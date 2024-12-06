#!/bin/bash

# Navigate to the directory containing the images
# cd "public/images/optimized" || exit
# cd "public/images/raw" || exit

# Loop through all .webp files
for file in *.png; do
  # Use regex to remove leading zeros from the numbered part of the filename
  new_name=$(echo "$file" | sed -E 's/_0*([0-9]+)/_\1/')
  
  # Rename the file only if the new name is different from the old name
  if [[ "$file" != "$new_name" ]]; then
    mv "$file" "$new_name"
    echo "Renamed $file to $new_name"
  fi
done

echo "Done renaming files."