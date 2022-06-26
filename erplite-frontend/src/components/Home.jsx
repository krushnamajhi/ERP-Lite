import React, { useState } from 'react';
import RecordTypes from '../functions/RecordTypes';

function Home(props) {

    return (
        <div>
            <h1 className='text-center my-5'> Welcome Krushna !!!</h1>
            <span>
            The term ERP was coined in 1990 by Gartner1, but its roots date to the 1960s. Back then, the concept applied to inventory management and control in the manufacturing sector. Software engineers created programs to monitor inventory, reconcile balances, and report on status. By the 1970s, this had evolved into Material Requirements Planning (MRP) systems for scheduling production processes. In the 1980s, MRP grew to encompass more manufacturing processes, prompting many to call it MRP-II or Manufacturing Resource Planning.
            <br/>
            By 1990, these systems had expanded beyond inventory control and other operational processes to other back-office functions like accounting and human resources, setting the stage for ERP as we've come to know it. Today, ERP has expanded to encompass business intelligence (BI) while also handling "front-office" functions such as sales force automation (SFA), marketing automation and ecommerce. With these product advancements and the success stories coming out of these systems, companies in a broad range of industries—from wholesale distribution to ecommerce—use ERP solutions. Moreover, even though the "e" in ERP stands for "enterprise," high-growth and mid-size companies are now rapidly adopting ERP systems.
            <br/>
            Software-as-a-Service (SaaS) solutions—also referred to as "cloud computing"—have helped fuel this growth. Cloud-based solutions not only make ERP software more affordable, they also make these systems easier to implement and manage. Perhaps even more importantly, cloud ERP enables real-time reporting and BI, making them even valuable to executives and staff seeking visibility into the business. As a result, companies of all sizes and a wide range of industries are transitioning to cloud ERP systems. In fact, Forrester predicts that SaaS-based ERP adoption will rise 21 percent annually through 2015.2 When you stop to consider the benefits of ERP, it's easy to see why it's become so popular and why its use will continue to grow so rapidly.
            </span>
        </div>
    );
}

export default Home;