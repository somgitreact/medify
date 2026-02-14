import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
const FaqCompo = ({ title, ans }) => {
   const [expanded, setExpanded] = useState(false);
  return (

     <Accordion
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
      disableGutters
      elevation={0}
      sx={{
        boxShadow: "none",          // remove shadow
        border: "none",             // remove border
        mb: 2,                      // space between accordions
        "&:before": { display: "none" }, // remove default divider line
      }}
    >
      <AccordionSummary
        sx={{
          px: 0,
          minHeight: "48px",
        }}
        expandIcon={
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: 500,
              lineHeight: 1,
            }}
          >
            {expanded ? "−" : "+"}
          </Typography>
        }
      >
        <Typography fontWeight={500}>{title}</Typography>
      </AccordionSummary>

      <AccordionDetails sx={{ px: 0 }}>
        <Typography color="text.secondary">{ans}</Typography>
      </AccordionDetails>
    </Accordion>

    
  )
}

export default FaqCompo