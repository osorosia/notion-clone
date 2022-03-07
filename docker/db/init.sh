#!/bin/bash

query=$(cat <<EOS
  use test;\n
  
  db.notes.insert(
    {
      title: 'test_title', 
      body: 'test_body',
    }
  );\n

EOS
)
  
echo -e "\n" $query | mongo -u root -p root
