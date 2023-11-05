export default function Navbar() {
   return (
       <div className="navbar bg-base-100 bg-blue-500">
           <div className="flex-1">
               <a className="btn btn-ghost normal-case text-xl">VenueLoca</a>
           </div>
           <div className="flex-end">
                <button className='flex-end'>
                    <a className="btn btn-ghost normal-case">
                        Log In
                    </a>
               </button>
               <button className='flex-end'>
                    <a className="btn btn-ghost normal-case">
                        Register
                    </a>
               </button>
           </div>
       </div>
    )
}
