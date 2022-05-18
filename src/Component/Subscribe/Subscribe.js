import './Subscribe.css'
import React, { useState } from 'react'
import { gql, useQuery, useLazyQuery, useMutation, useSubscription } from "@apollo/client";

function Subscribe() {

    const InsertEmailSubscriber = gql`
        mutation MyMutation($email: String) {
            insert_Subscriber(objects: {email: $email}) {
                affected_rows
                returning {
                    id
                    email
                }
            }
        }
    `;
    
      
  const [EmailSubs, setEmailSubs] = useState("");
  const [insertEmailSubs, { loading: loadingEmailSubs }] = useMutation(InsertEmailSubscriber);

    const onChangeSubs = (e) => {
        setEmailSubs(e.target.value);
        console.info(EmailSubs);
    };
    const onClickSubs = () => {
        insertEmailSubs({ variables: { email: EmailSubs } });
        setEmailSubs("");
    };
  return (
    <>
        <div className='container mt-5 mb-5'> 
            <form className='row px-4'>
                <div className='col-md-6 col-sm-6 col-xl-6 col-xs-6 ps-4 '>
                    <h4><strong className='color-heading'>Subscribe for Exclusive Email-only Recomendations</strong></h4>
                    <h5>Exclusive access to more place recommendations</h5>
                </div>
                <div className='col-md-4 col-sm-4 col-xl-4 col-xs-4'>
                    <div className="input-group input-group-lg" id='input-email'>
                        <input type="email" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" 
                        placeholder='example@example.com' onChange={onChangeSubs}/>
                    </div>
                </div>
                <div className='col-md-2 col-sm-2 col-xl-2 col-xs-2'>
                    <button type="submit" className="btn btn-lg" id='btn-subs' onClick={onClickSubs}>&emsp;Subscribe&emsp;</button>
                </div>
            </form>
        </div>
    </>
  )
}

export default Subscribe