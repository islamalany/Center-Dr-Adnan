#!/usr/bin/env python3
"""Simple HTTP server for Dr. Adnan Center website."""
import http.server
import socketserver
import os
import webbrowser
import threading

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def log_message(self, format, *args):
        print(f"  {self.address_string()} - {format % args}")

def open_browser():
    import time
    time.sleep(0.5)
    webbrowser.open(f"http://localhost:{PORT}/index.html")

if __name__ == "__main__":
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"\n  Dr. Adnan Center - Local Dev Server")
        print(f"  =====================================")
        print(f"  Running at: http://localhost:{PORT}")
        print(f"  Homepage:   http://localhost:{PORT}/index.html")
        print(f"  Services:   http://localhost:{PORT}/services.html")
        print(f"  Book:       http://localhost:{PORT}/book-appointment.html")
        print(f"\n  Press Ctrl+C to stop\n")
        threading.Thread(target=open_browser, daemon=True).start()
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n  Server stopped.")
