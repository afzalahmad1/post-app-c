import React, {useEffect} from "react" 
import { useSelector, useDispatch } from "react-redux"
import { fetchPost } from "./redux/actions/post.actions"

const App = () => {
  // let loading = useSelector(state => state.loading)
  let data = useSelector(state => state.data)
  let error = useSelector(state => state.error)

  const dispatch = useDispatch() 

    useEffect(() =>{
         dispatch(fetchPost())
    } ,[]
    )
    // if(loading){
    //   return <h1>Loading...</h1>
    // }

    if(error){
      return <h1>{error}</h1>
    }

  return(
    <div>
          <h1>Post List</h1>
          {
            data.map((post) => (
                <div key={post.id}> 
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))
          }
    </div>
  )
}

export default App