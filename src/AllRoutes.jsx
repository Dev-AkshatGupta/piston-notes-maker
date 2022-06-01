import React from "react";
import {  AuthenticationPage, TrashPage, HomePage,ArchivePage } from "Pages";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute, RestrictedRoute } from "Components";

const AllRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/trash" element={<TrashPage />} />
        <Route path="/archive" element={<ArchivePage />} />
        <Route path="/homePage" element={<HomePage/>}/>
      </Route>
      <Route element={<RestrictedRoute />}>
        <Route path="/" element={<AuthenticationPage />} />
      </Route>
    </Routes>
  );
};

export { AllRoutes };
