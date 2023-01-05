#!/usr/bin/env bash
# chmod +x push.sh
#jq -s 'reduce .[] as $item ({}; . * $item)' ./md/json/*
#jq -s '.[] * .[]' ./md/json/*
#cat ./md/json/text2api.json | jq '.[] | {id: .id}' > ./md/json/out.json
#cat ./md/json/text2api.json | jq '.[] , | .  ' > ./md/json/out.json
input=./md/json/*.json
output=./md/data/marketplace.json
#find $input -name cat {} |  jq -s 'flatten' > $output
jq -s 'flatten' $input > $output
