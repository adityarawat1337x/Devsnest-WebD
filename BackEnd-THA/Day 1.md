<h1>Redis</h1>

<h4>
<h3>General</h3>
<strong>< Its same as json i.e everything is a key-value pair ></strong></br></t>
set name "aditya" - make key: name and value: aditya</br></t>
get name - display name value</br></t>
del naem -deletes the key-value</br></t>
exists name - shows if name exists</br></t>
flush all - deletes everything</br></t>
ttl name - key expiry time</br></t>
expire name 10 - name expires in 10 sec</br></t>
keys * - shows all keys</br></t>
setex name 10 "aditya" - sets expiry 10 sec</br></h4>
</br>
<h4>
<h3>Arrays</h3>
lpush arr 24 - pushes 24 in arr array from left  </br></t>
lrange arr 0-1 - displays keys from index 0 to index -1 i.e last index</br></t>
lpop - pops key from left </br></t>
rpush  arr 24 - pushes 24 in arr array from right  </br></t>
rpop  - pops key from right </br></t>
sadd hobby "sky diving" - adds sky diving into a set hobby</br></t>
smembers hobby - shows set members</br></t>
</h4></br>
<h4>
  <h3>Ojects</h3>
  hset person name "aditya" - person:{name: aditya}</br></t>
  hget person name - aditya</br></t>
  hgetall person - shows all </br></t>
  hdel person name - deletes name from person</br></t>
  hexists person name - checks if name exists in person</br></t>
</h4>
