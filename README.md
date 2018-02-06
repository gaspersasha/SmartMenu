# Smart Menu with React

Drop Down menu which appears responsibly on a page

### Dependencies

npm + node + webpack (global)

### Getting start

Clone the repo:
```
git clone <link>
```

Open terminal and hint commands:
```
npm install
```

Start server:
```
node server.js
```

Normally, server uses 3000 port. But you can configure it yourself in
./server.js
```
...
app.listen(3000, function () { (line 6)
...
```

Start webpack:
 ```
webpack -w
```
 
You will get compiled bundle.js in /public
 
Go to UTR:
 ```
http://localhost:3000/
 ```
 
 
### Smart Menu configuration
 
SmartMenu is react component which takes following array of data to display:
 
 ```
 FirstList={
    title: 'text inside the item',
    href: 'link',
 }
```

Pass it as param to the SmartMenu witch basic title:
 ```
 <SmartMenu title='SmartMenu or SS' list={FirstList}/>
 ```
 
 WATCH page.jsx

### Testing

To test responsiveness configure blocks appearance in custom.scss

 ```
 $switch-left : 20%;
 $switch-right : 40%;
 ```
