#!/bin/bash

# Number of total requests
TOTAL_REQUESTS=30

# URL to test
URL="http://localhost/"

echo "Testing rate limit on $URL"

for i in $(seq 1 $TOTAL_REQUESTS); do
    STATUS=$(curl -s -o /dev/null -w "%{http_code}" $URL)
    echo "Request $i: $STATUS"
done
