import Image from "next/image";
import React from 'react';
import ButtonComponent from '../components/ButtonComponent'

export default function Eligibility() {
  return (
    <div className="flex justify-center pt-20">
      <div className="grid grid-cols-2 max-w-5xl border border-blue-100 rounded-xl">
        <div className="col-span-1 p-12 border-r border-red-100">
          <p>Ah shoot</p>
          <p>Looks like this wallet isn’t eligible. No stress, you can still participate in the ecosystem and governance in several ways.</p>
          <div>A minimum of 3 points total are required to be eligible. If you scored less than 3 points, all criteria will be crossed out.</div>
          <ButtonComponent variant="secondary">Explore projects on MOI</ButtonComponent>
        </div>
        <div className="col-span-1 p-12">
          <p>Eligibility criteria</p>
          <p>Eligibility criteria</p>
          <p>Eligibility criteria</p>
          <p>Eligibility criteria</p>
          <p>Eligibility criteria</p>
          <p>Eligibility criteria</p>
        </div>
      </div>
    </div>
  );
}
