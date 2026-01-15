#!/bin/bash
# Run this script to download all SoundCloud cover images
# Usage: cd to project root and run: bash download-covers.sh

cd "$(dirname "$0")/public/images"

echo "Downloading cover images..."

# Replace -large with -t500x500 for higher resolution
curl -L "https://i1.sndcdn.com/artworks-4Jnvufnt9dBwVoxa-DAdynA-t500x500.jpg" -o "coachella-2025-mix.jpg"
curl -L "https://i1.sndcdn.com/artworks-otLgyecAzF5oLDyt-9qX6vQ-t500x500.jpg" -o "laundry-day-mix.jpg"
curl -L "https://i1.sndcdn.com/artworks-Zq02QyzKtOz6sgsu-lVabZg-t500x500.jpg" -o "lane-8-live-set.jpg"
curl -L "https://i1.sndcdn.com/artworks-Lr5eyysAcNaDB0Z4-QiiO3Q-t500x500.jpg" -o "dombresky-mix.jpg"
curl -L "https://i1.sndcdn.com/artworks-WywJSxx7qwB5uZjy-J0jvfA-t500x500.jpg" -o "deadmau5-mix.jpg"
curl -L "https://i1.sndcdn.com/artworks-GnV4MJfp9qYyscG2-kKm1ig-t500x500.jpg" -o "clean-mix-episode-1.jpg"
curl -L "https://i1.sndcdn.com/artworks-7yX2s0aSyq1ukxAZ-bpuPgg-t500x500.jpg" -o "coachella-2024-mix.jpg"
curl -L "https://i1.sndcdn.com/artworks-Q5oOdJKyU0eyR51k-zFaNTw-t500x500.jpg" -o "tech-house-mix.jpg"
curl -L "https://i1.sndcdn.com/artworks-w6SzgNHwGdLzCY7I-ctVRPw-t500x500.jpg" -o "believe-in-love-mix.jpg"
curl -L "https://i1.sndcdn.com/artworks-EgMmFnijq5rommap-GzOzgA-t500x500.jpg" -o "coachella-2023-day3.jpg"
curl -L "https://i1.sndcdn.com/artworks-ezAsnMZW2fTR9D9E-pdvEjA-t500x500.jpg" -o "coachella-2023-day2.jpg"
curl -L "https://i1.sndcdn.com/artworks-t8GwtEkFJBWWUYPR-4TtyXA-t500x500.jpg" -o "coachella-2023-day1.jpg"
curl -L "https://i1.sndcdn.com/artworks-9ONeCoNcXSFlxe0J-y4fHzg-t500x500.jpg" -o "coachella-2023-mix.jpg"
curl -L "https://i1.sndcdn.com/artworks-kADKc8w8AuchGeh3-clIZug-t500x500.jpg" -o "disco-house-mix.jpg"
curl -L "https://i1.sndcdn.com/artworks-pWJ4RmAUQeNaEM2O-tqQRsA-t500x500.jpg" -o "lane-8-mix.jpg"
curl -L "https://i1.sndcdn.com/artworks-yZRaydDK6BLMG0cE-5qRZoA-t500x500.jpg" -o "coachella-2022-mix.jpg"
curl -L "https://i1.sndcdn.com/artworks-IcSDeWB2S1Sz4jAg-NH5HkQ-t500x500.jpg" -o "rufus-du-sol-mix.jpg"
curl -L "https://i1.sndcdn.com/artworks-vFyVynjEwVYxx7tJ-vzA9AQ-t500x500.jpg" -o "dance-at-home-003.jpg"
curl -L "https://i1.sndcdn.com/artworks-HhOQPgh5wQzRxjJS-8tTziw-t500x500.jpg" -o "dance-at-home-002.jpg"
curl -L "https://i1.sndcdn.com/artworks-mGi8O9AFwiX5llBZ-cU2kkw-t500x500.jpg" -o "dance-at-home-001.jpg"

echo "Done! All cover images downloaded to public/images/"
