<h1>Redis</h1>

<h4>
<h3>General</h3>
its same as json i.e everything is a key-value pair</br>
set name "aditya" - make key: name and value: aditya</br>
get name - display name value</br>
del naem -deletes the key-value</br>
exists name - shows if name exists</br>
flush all - deletes everything</br>
ttl name - key expiry time</br>
expire name 10 - name expires in 10 sec</br>
keys * - shows all keys</br>
setex name 10 "aditya" - sets expiry 10 sec</br></h4>
</br>
<h4>
<h3>Arrays</h3>
lpush arr 24 - pushes 24 in arr array from left  </br>
lrange arr 0-1 - displays keys from index 0 to index -1 i.e last index</br>
lpop - pops key from left </br>
rpush  arr 24 - pushes 24 in arr array from right  </br>
rpop  - pops key from right </br>
sadd hobby "sky diving" - adds sky diving into a set hobby</br>
smembers hobby - shows set members</br>
</h4></br>
<h4>
  <h3>Ojects</h3>
  hset person name "aditya" - person:{name: aditya}</br>
  hget person name - aditya</br>
  hgetall person - shows all </br>
  hdel person name - deletes name from person</br>
  hexists person name - checks if name exists in person</br>
  
  
</h4>
