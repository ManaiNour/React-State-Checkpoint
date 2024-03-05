import React from 'react'
import logo from './logo.svg'
import './App.css'
class App extends React.Component{
    constructor (){ 
        super()
        this.state={
            name:'Name',
            age:'Age',
            img:'Image',
            dragon:'Dragon',
            test:false,
        }


        
        
    }
    clic =() => {
     
      this.setState({test:(!this.state.test)});
       this.setState({name:'Hiccup Horrendous Haddock III',age:'15 years old',img:"data:image/webp;base64,UklGRkAGAABXRUJQVlA4IDQGAABwHACdASqnAGEAPo0oo1GlIaUlE/CgEYlnChbIQrf5BE1JyvFTz7/JJE9wf2Iz89l8qxg1x4+CR59s5n1CowCl57Apl62W6a84mpz6jOcoHlA42JmkEZpEdODHA66MuISUfBzEq7CHZpO/ySgtANxFi73TQVJX5L0JI3UK01Igtp+STCJ/PcRfn7pMkc3Z+q1EOR7BYOvuoFZXgRrFVR2Pv/IC/W+MshGUSpWAibGiyEeV4TYoRbX0wVeyRa9uC5gpaUhi37QiSB1n2FuZdJmD1n6NiL7la0MEQ/ZRATGaV3kXwf1r22Ei2O5hYAD+/6CCD4y/qFsx+lY2VAUdIZY+1tGEsytyNnixhhsAaBm0ymqHiLnCWUn5RSYSiutH6rd6CAKeF3kXiJMG8gpkO6eIJ0irzD+Ucjci76Ui3UWR6Rfhq0yWs1mS2fo+DydJI6RLDD2OaadJGMUeExjWnIXLv9Jd2N5i6JLi5rbMozIAqnnRfqvmBl8cNNlSZ/b63r6Ij/w6/XJ3HoyF2a7vS9ArSVhIN+22kyLb6A/4WzCtG9Ns8OfhrKg72R5xvMFg1j9LCMFXmeV4q41EOtzFpHqqYG+Q4tZ7w/bPjMWd4GiOOkbwyZ9pvN+nWw5X5C9H/54UjDDDGdTW2CP2BFqeX1MhPSOs8dq+1jfljivYHlAoPR5KTiq+Emxxf3iImkQ59wTGAf1+WjwH18ziwy5u2SjPhBqcg4cLNhqTkh4/cd6MOP5EH6sYUYUrx7nxiDE6gxUhPT2gUAG9yhD5XvM5bvI/9fzolZ6ziUcucvU7fNTZuWUrcYfCA9ErRHJw7JLZ9PysnzX+c/+wwKmDasKLNaqagwMvC/bC74RBgd3RzGSh7Jv+DFGsMw9UWcR2d+DKeemVlU+QTPld4XV4o0TZ9nMQ7LPuJ54MUjlTboaaFiw8ENmuKq62hxcT4VmiJz0BMv3MzP2jMtO5yvWK7eu/rkiIni13CQoOhWRSvjftDyVKd0YMP/mPTiJVSDmId9t7d7a2DId2u9xkiV9OgZrhP8TVyzz9EA4odjNcgBHdc8VMrYbtUP4dizTQl8Ue1wTXvvm4wskgdVYPGuu8qo3/lV+TpCMQ0y366aJXHdPez01uaIQrukF/i4QJAQZ1e7fi2ZJ2ig+aqJ7G5aaN/UzVw3yInmu8vBcLRz8VNoCXovce+0/TYwpSMEY5dDfKKvCd6KCy2fc6aJJ2bpVGqFgW+pogBRmChLJSbbJJezt+0vW8E0FGTiOm8uwuqEtcng1Oi1AUypQ1wvqWUf6JhF4LmOjXtLUOKhLobdDqmONeXaDi2TJTQVBfjv5v8it/L48a804J+NtUmhGJZ3TxZoNv+UK5LY4x0ZiOpqhNhNHG2azo0WP8dLbqp38/2Q4BCaG217ET2gbZzi9M4PNAsFVR66aCPfOKnmGGCKVMNOoKSrVuG8Eyj4BTZro4eP9v8uAEj6D94+Ks2UyvAGtr2nbZSH5to2IjoFAmf3Ahz8WZ9zUvnV6otJFHu+aiTMst0tw44aUWnTon2ivBxwQ15m5OFfUEkCuEWmwc46rspr45L8AE9clm/7qrs01iQI8kyqjpByahIJ65ZoE3Q7wqLmEvUw5Hsvis+GmyhqlouJngZGyQRTOhn1YtCGi+z7qofZiyUXIyZbSbornZ1IYFQXo8l0QGuzAFMQ5Tp4iD+mj1lP/H/WyhAmYncSvyIV2R2c1CvuGQTQCD7I5VS/Ljopx7pt0xFGE1tDuNqUVc2QKEYYt34CLZuvclcfYjzVucqFGVReuoxjKHPzky2DiAhO3BuJRbV2U20eXd8bh9bOt24MXadrTf+mZbA16Ij0iQEk8UwKo579aKuJ6Tk1Klu2uj+tEj7BYIhhfnzVWtLANMB458Y9w7rnzeygYfSPfRks3nwdh8BZ+2bgY8CUueqfUFLnArSqxKSgaZpEMXKfk4R0tddLLNI35BigaVZFShifHBUXbO0tAXrvbrErYFFU6gGkN4c9m+7w4IaJu+L9dwl1cIJF9SLv/HbcqBKANdErdaMaVdNcg5umG0JfZqAAXbT7B2jAJzg2Y0Ar2XO5dJtE5CB0zL6/ktFlCBoE4QBpM8RiIAAAAA",dragon:'Toothless'});
      
    }
    


      

    render(){
      

        return(
          console.log(this.state.test),

        <>
        <div className='page'>
        <div className='buttons'>
                <button className='button' onClick={()=>this.clic()  } style={{display: this.state.test ? 'block' : 'none'}} type="button">Hide Profile</button>
                <button className='button' onClick={()=>this.clic()  } style={{display: this.state.test ?  'none':'block'}} type="button">Show Profile</button>

                

            </div>
            <div className='profil'  style={{display: this.state.test ? 'none'  : 'block'}}>
            <p>Photo</p>
                <p >Name</p>
                <p>Age</p>
                <p>Dragon</p>
                

            </div>
            <div className='profil'  style={{display: this.state.test ? 'block'  : 'none'}}>
              
                <img  src={this.state.img} alt="" style={{width:'300px ', height:"200px"}}></img>
                <p >{this.state.name}</p>
                <p>{this.state.age}</p>
                <p>{this.state.dragon}</p>
                <p>{this.state.test}</p>

            </div>
           
            </div>
            </>
          
        );
    }
}



export default App;