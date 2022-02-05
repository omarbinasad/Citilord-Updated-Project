import React from "react";
import SingleTeamMember from "../../../About/Components/Team/SingleTeamMember/SingleTeamMember";
import Team from "../../../About/Components/Team/Team";
import "./TeamMembersPhotos.css";

const TeamMembersPhotos = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <SingleTeamMember></SingleTeamMember>
        <SingleTeamMember></SingleTeamMember>
        <SingleTeamMember></SingleTeamMember>
        <SingleTeamMember></SingleTeamMember>
        <SingleTeamMember></SingleTeamMember>
        <SingleTeamMember></SingleTeamMember>
        <SingleTeamMember></SingleTeamMember>
        <SingleTeamMember></SingleTeamMember>
      </div>
    </div>
  );
};

export default TeamMembersPhotos;
