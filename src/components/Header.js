import React from "react";

export const Header = () => {
  return (
    <div style={{ display:'flex', justifyContent:'center', 
    backgroundColor: "#003B95", width: "100%", height: "100px" }}>
      <div style={{ width:'77%'}}>

            <div style={{display:'flex',  flexDirection:'row', height:'50%' }}>
                <div style={{  display:'flex',  alignItems:'center', justifyContent:'flex-start', width:'12%', }}>
                        <div style={{ marginLeft:'20px', color:'white', fontSize:'30px', fontWeight:'bold' }}>Booking.com</div>
                </div>
                <div style={{ display:'flex', alignItems:'center', justifyContent:'flex-end', width:'88%' }}>

                    <button type="submit" style={{ marginLeft:'auto', width:'80px', height:'30px', marginRight:'20px' }} >Sign in</button><br/>
                </div>

            </div>
            <div style={{ height:'50%' }}>

            </div>

      </div>
    </div>
  );
};
