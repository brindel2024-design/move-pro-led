#!/usr/bin/perl
use strict;
use warnings;
use IO::Socket::INET;

my $port = $ENV{PORT} || 3001;
my $root = 'C:/Users/brindel2024/site calude/move-pro-led';

my %mime = (
    html  => 'text/html; charset=utf-8',
    css   => 'text/css',
    js    => 'application/javascript',
    json  => 'application/json',
    png   => 'image/png',
    jpg   => 'image/jpeg',
    jpeg  => 'image/jpeg',
    gif   => 'image/gif',
    svg   => 'image/svg+xml',
    ico   => 'image/x-icon',
    txt   => 'text/plain',
    webp  => 'image/webp',
    woff  => 'font/woff',
    woff2 => 'font/woff2',
);

my $server = IO::Socket::INET->new(
    LocalAddr => '127.0.0.1',
    LocalPort => $port,
    Proto     => 'tcp',
    Listen    => 20,
    ReuseAddr => 1,
) or die "Cannot bind port $port: $!\n";

print "Move Pro server running at http://localhost:$port\n";
$| = 1;

while (my $client = $server->accept()) {
    my $request = '';
    eval {
        local $SIG{ALRM} = sub { die "timeout\n" };
        alarm(5);
        while (my $line = <$client>) {
            $request .= $line;
            last if $line =~ /^\r?\n$/;
        }
        alarm(0);
    };
    next if $@;

    my ($method, $path) = $request =~ /^(\w+)\s+([^\s]+)/;
    $path //= '/';
    $path =~ s/\?.*//;
    $path =~ s/%([0-9A-Fa-f]{2})/chr(hex($1))/ge;
    $path = '/index.html' if $path eq '/';

    # Normalise path separator
    (my $rel = $path) =~ s|^/||;
    $rel =~ s|/|\\|g if $^O eq 'MSWin32';
    my $file = $root . '/' . $rel;
    $file =~ s|//+|/|g;

    if (-f $file) {
        my ($ext) = $file =~ /\.([^.]+)$/;
        my $ct = $mime{lc($ext // '')} // 'application/octet-stream';
        if (open my $fh, '<:raw', $file) {
            my $body = do { local $/; <$fh> };
            close $fh;
            my $len = length $body;
            print $client
                "HTTP/1.1 200 OK\r\n" .
                "Content-Type: $ct\r\n" .
                "Content-Length: $len\r\n" .
                "Cache-Control: no-cache\r\n" .
                "Access-Control-Allow-Origin: *\r\n\r\n";
            print $client $body;
        }
    } else {
        my $body = "404 - Not found: $path";
        print $client "HTTP/1.1 404 Not Found\r\nContent-Length: " . length($body) . "\r\n\r\n$body";
    }
    close $client;
}
