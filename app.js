async function fetchUser() {
    try{
        //just making a network request to get the response from api through link
        const response=await fetch('https://randomuser.me/api/');

        //after we get the response we convert it to json
        const data=await response.json();

        //now just extrct the user as response has many users we only want one
        const user=data.results[0];


        document.getElementById('user-photo').src=user.picture.medium;
        document.getElementById('user-name').textContent=`${user.name.first} ${user.name.last}`;
        document.getElementById('user-mailid').textContent=user.email;
        document.getElementById('country').textContent=user.location.country;
    }catch(error){
        console.error('Failed to fetch',error);
        alert('somethimg is wrong XXXXXX Try again XXXXX')
    }   
    
}
fetchUser();
document.getElementById('user-btn').addEventListener('click',fetchUser)