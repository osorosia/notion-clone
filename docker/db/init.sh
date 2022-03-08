#!/bin/bash

query=$(cat <<EOS
  use test;\n
  
  db.notes.insert(
    {
      _id: '6227448eb6c177475c40c96c',
      title: 'test_title', 
      body: 'test_body',
    }
  );\n

EOS
)
  
echo -e "\n" $query | mongo -u root -p root
