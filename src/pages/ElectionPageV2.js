import { React, useEffect, useState } from "react";
import Idconformation from "../components/Idconformation";
import Showbloks from "../components/Showbloks";
import axios from "../extras/reqHelper";


const ElectionPageV2 = () => {
  const [ candState, setCandState ] = useState([])
  const [ election, setElection ] = useState({})

  const id = localStorage.getItem("eleID")


  axios.get(`/public/get-election/${id}`)
            .then((res) => {
                setElection(res.data);
            })
            .catch(err => console.log(err))

  useEffect(()=>{
    axios.get(`/public/all-cand/${id}`)
    .then((res) => {
      setCandState(res.data.nominatedCandidates);
      console.log(res.data)
    })
    .catch(err => console.log(err))
  }, [])
 

          

  return (
    <div>
      <div class="p-5 mb-5 bg-light rounded-3">
        <div class="container-fluid py-5">
          <h1 class="display-5 fw-bold mb-3">{election.electionName}</h1>
          <p class="col-md-8 fs-4">{election.electionDec}</p>
          <div class="mb-5">
            {
              new Date(election.votingEnd) < new Date()
                ? <Showbloks />
                : <Idconformation />
            }
          </div>
        </div>
      </div >

      <div class="row g-5">
        <div class="col-md-6">
          <h2>Criateria For Voting</h2>
          <p>Ready to beyond the starter template? Check out these open source projects that you can quickly
            duplicate to a new GitHub repository.</p>
          <ul class="icon-list">
            <li>criateris will display here</li>
          </ul>
        </div>

        <div class="col-md-6">
          <h2>Electing Parties / Candidates</h2>
          <p>Read more detailed instructions and documentation on using or contributing to Bootstrap.</p>
          <ol class="list-group list-group">
          {
              candState.map((cand) => {
                return (
                  <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                      <div class="fw-bold">{cand.candidate.candName}</div>
                      {cand.candidate.candEmail}
                    </div>
                    <span class="badge bg-primary rounded-pill">{cand.voteCount}</span>
                  </li>
                )
              })
            }
          </ol>
        </div>
      </div>


    </div >
  )
};

export default ElectionPageV2;
