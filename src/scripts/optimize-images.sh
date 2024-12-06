#!/bin/bash

# Define directories
RAW_DIR="public/images/raw"
OPTIMIZED_DIR="public/images/optimized"

# Create the optimized directory if it doesn't exist
mkdir -p "$OPTIMIZED_DIR"

# Loop through PNG files in the raw directory
for file in "$RAW_DIR"/*.png; do
  # Get the base filename (without path or extension)
  base_name=$(basename "$file" .png)

  # Check if the corresponding webp file already exists
  if [ ! -f "$OPTIMIZED_DIR/$base_name.webp" ]; then
    echo "Converting $file to $OPTIMIZED_DIR/$base_name.webp"
    magick "$file" "$OPTIMIZED_DIR/$base_name.webp"
  else
    echo "Skipping $file: already converted"
  fi
done