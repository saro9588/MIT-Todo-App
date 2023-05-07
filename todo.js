function Todo({todo,index,remove}){
  function handle(){
    console.log('Ping:',index);
    remove(index);
  }
  return (<>
  <button type="button" onClick={handle} class="btn-close" aria-label="Close"></button>
  <div className="todo" >{todo.text} </div>
  </>
  )
  
}
