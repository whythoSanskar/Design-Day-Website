import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function SimpleAccordion() {
  return (
    <section className="my-20">
      <div id="faq">
<<<<<<< HEAD
        <h2 className="m-6 text-5xl ">FAQ</h2>
      <Accordion className='m-10'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontSize: '2rem' , margin: '.5rem'}}>What is Design Day?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Design Day is an event where participants of Google Solution Challenge present their prototypes they have developed.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='m-10'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{fontSize: '2rem' , margin: '.5rem'}}>Do we need to submit our project in advance?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, teams are required to submit their projects at least 24 hours before the event.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className='m-10'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{fontSize: '2rem' , margin: '.5rem'}}>How do I register my team for Design Day?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Register your team on the above register button on this website.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className='m-10'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{fontSize: '2rem' , margin: '.5rem'}}>Do we need to submit our project in advance?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, teams are required to submit their projects at least 24 hours before the event.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className='m-10'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{fontSize: '2rem' , margin: '.5rem'}}>What should we bring to the event?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Teams must bring their own equipment, including laptops, chargers, and any other necessary tools.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className='m-10'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{fontSize: '2rem' , margin: '.5rem'}}>Will there be judges?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          No, mentors will be present instead of judges.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className='m-10'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{fontSize: '2rem' , margin: '.5rem'}}>Can we exceed our presentation time?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          No, any team that exceeds the allotted time will be asked to conclude their presentation.
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
=======
        <h2 className="m-6 text-5xl">FAQ</h2>
        <Accordion className="m-10 drop-shadow-xl ">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              backgroundColor: "#1b1e29",
              color: "rgba(252, 244, 244, 0.768)",
            }}
          >
            <Typography sx={{ fontSize: "2rem", margin: ".5rem" }}>
              What is it?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundColor: "#1b1e29",
              color: "rgba(252, 244, 244, 0.768)",
            }}
          >
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="m-10">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            sx={{
              backgroundColor: "#1b1e29",
              color: "rgba(252, 244, 244, 0.768)",
            }}
          >
            <Typography sx={{ fontSize: "2rem", margin: ".5rem" }}>
              What is it?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundColor: "#1b1e29",
              color: "rgba(252, 244, 244, 0.768)",
            }}
          >
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
>>>>>>> eaf3c8f5d9b09b422006dc0171c6a024dab270ef
    </section>
  );
}
