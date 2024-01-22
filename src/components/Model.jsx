import React from 'react'
import "../css/rooms.css";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";

export default function Model(props) {
    const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <div className="butn">
            <div className="flex flex-wrap gap-2">
              <Button
                onClick={() => setOpenModal(true)}
                gradientMonochrome="info"
              >
                Book Now
              </Button>
              <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>{props.topic}</Modal.Header>
                <Modal.Body>
                  <div className="space-y-6">
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      {/* With less than a month to go before the European Union
                      enacts new consumer privacy laws for its citizens,
                      companies around the world are updating their terms of
                      service agreements to comply. */}
                      {props.parone}
                    </p>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      {/* The European Union’s General Data Protection Regulation
                      (G.D.P.R.) goes into effect on May 25 and is meant to
                      ensure a common set of data rights in the European Union.
                      It requires organizations to notify users as soon as
                      possible of high-risk data breaches that could personally
                      affect them. */}
                      {props.partwo}
                    </p>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <a href='roombooking'>
                  <Button onClick={() => setOpenModal(false)} gradientMonochrome="info">Book</Button></a>
                  <Button gradientMonochrome="cyan" onClick={() => setOpenModal(false)}>
                    Back
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
    </div>
  )
}
