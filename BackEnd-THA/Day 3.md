<h1>REDIS</h1>

<h4>
<h3>pub sub</h3>
  - subscribe <name> - subscribe to a channel</br></t>
  - unsubscribe <name> - unsubscribe to a channel</br></t>
  - pnsubscribe <(a-z)*> - unsubscribe to a channel on the basis of regex</br></t>
  - publish <name> <msg> - publish a msg to a channel</br></t>
  - publish <name> <msg> - publish a msg to a channel</br></t>
<h3>streams</h3>
  - xadd mystream 1000 or * name <name> - stream with key=1000 or system generated with name as <name>  
  - xadd mystream maxlen <num> * name <name> - stream with key=1000 or system generated with name as <name>
  - xread count <num of entries> streams mystream id  - shows all num of entries after id  
  - xread block <time in ms> streams  mystream  id - after timeout closes the stream if inactive
  - xread block <time in ms> streams  mystream  $ - works like pub sub but after timeout closes the stream if inactive
  - xrange mystream <start_id> <end_id> count <entries> - shows entries btw the id range
  - xrange mystream - + count <entries> - shows entries btw 1st and Last 
  
