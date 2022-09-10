import UserLeftCard from './UserLeftCard';
import UserProfile from './UserProfile';



function UserContainer() {
  return (
    <div className='w-full  mt-16 md:min-w-[600px] flex gap-2 justify-between overflow-y-auto px-1'>
        <div className='w-full lg:w-[68%] mx-auto'>
            <UserProfile />
          </div>
          <UserLeftCard />
    </div>
  )
}

export default UserContainer
