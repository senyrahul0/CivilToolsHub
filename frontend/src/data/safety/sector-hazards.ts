export type SectorHazard = {
  sectorSlug: string;
  areaSlug: string;
  hazardSlug: string;
  sectorTitle: string;
  areaTitle: string;
  hazardTitle: string;
  overview: string;
  whatCanHappen: string[];
  consequences: string[];
  commonCauses: string[];
  controls: string[];
  inspectionPoints: string[];
  observationExample: string;
  recommendedAction: string;
};

export const sectorHazards: SectorHazard[] = [
  {
    sectorSlug: "bridge-flyover",
    areaSlug: "girder-lifting",
    hazardSlug: "crane-overloading",
    sectorTitle: "Bridge & Flyover Safety",
    areaTitle: "Girder Lifting",
    hazardTitle: "Crane Overloading",
    overview:
      "Crane overloading may occur when the actual lifted load, lifting radius, rigging weight, or operational condition exceeds the safe capacity defined by the crane load chart and approved lifting arrangement.",
    whatCanHappen: [
      "The crane may become unstable during lifting.",
      "The crane may overturn due to excessive load or lifting radius.",
      "Boom, jib, wire rope, or lifting components may fail.",
      "The suspended girder may fall or move uncontrollably.",
      "Workers and nearby equipment may be struck by the load.",
    ],
    consequences: [
      "Fatal or serious injury",
      "Crane overturning",
      "Dropped girder or structural member",
      "Damage to bridge components",
      "Damage to lifting equipment",
      "Major project delay",
    ],
    commonCauses: [
      "Incorrect load weight calculation",
      "Lifting beyond approved crane radius",
      "Failure to include rigging and lifting accessory weight",
      "Incorrect crane configuration",
      "Use of an unsuitable crane",
      "Failure to follow the approved lifting plan",
      "Poor communication between lifting personnel",
    ],
    controls: [
      "Verify the total lifted load before starting the lifting operation.",
      "Confirm crane capacity against the manufacturer load chart.",
      "Include lifting beam, slings, shackles, and other accessories in the total load calculation.",
      "Verify the actual lifting radius and crane configuration.",
      "Use an approved lifting plan and method statement.",
      "Ensure the crane is positioned on suitable and stable ground.",
      "Use competent crane operators, riggers, and lifting supervisors.",
      "Stop the lifting operation if actual conditions differ from the approved plan.",
    ],
    inspectionPoints: [
      "Crane load chart is available and applicable to the crane configuration.",
      "Actual load weight is confirmed.",
      "Lifting radius is verified.",
      "Outriggers are fully deployed as required.",
      "Ground condition is suitable for crane loading.",
      "Rigging accessories are inspected and certified.",
      "Lifting plan is approved and available.",
      "Exclusion zone is established.",
      "Communication system is confirmed.",
      "Competent lifting team is present.",
    ],
    observationExample:
      "Girder lifting activity was observed with the crane operating at an extended lifting radius without clear verification of the total lifted load against the applicable crane load chart.",
    recommendedAction:
      "Stop the lifting operation and verify the total load, lifting radius, crane configuration, and applicable load chart capacity. Resume the activity only after confirmation of the approved lifting arrangement by the competent lifting team.",
  },

  {
    sectorSlug: "road-highway",
    areaSlug: "traffic-management",
    hazardSlug: "vehicle-worker-interface",
    sectorTitle: "Road & Highway Safety",
    areaTitle: "Traffic Management",
    hazardTitle: "Vehicle and Worker Interface",
    overview:
      "Vehicle and worker interface hazards arise when construction workers, site vehicles, plant, and public traffic operate within the same or poorly separated work zone.",
    whatCanHappen: [
      "Workers may be struck by moving vehicles.",
      "Construction plant may collide with workers or vehicles.",
      "Public vehicles may enter the active work zone.",
      "Workers may become trapped between plant and fixed objects.",
      "Poor traffic movement may create secondary collisions.",
    ],
    consequences: [
      "Fatal or serious injury",
      "Vehicle collision",
      "Plant impact",
      "Public injury",
      "Property damage",
      "Traffic disruption",
    ],
    commonCauses: [
      "Poor segregation between workers and vehicles",
      "Missing or inadequate barricading",
      "Unclear traffic routes",
      "Poor visibility",
      "Excessive vehicle speed",
      "Uncontrolled reversing",
      "Inadequate lighting during night work",
    ],
    controls: [
      "Provide physical segregation between pedestrian and vehicle routes.",
      "Implement an approved traffic management plan.",
      "Install suitable barricades, signs, and warning devices.",
      "Define vehicle entry, exit, and turning routes.",
      "Control reversing with trained banksmen where required.",
      "Maintain adequate work-zone lighting.",
      "Enforce project speed limits.",
      "Provide high-visibility clothing for exposed workers.",
    ],
    inspectionPoints: [
      "Traffic management plan is available.",
      "Pedestrian routes are clearly defined.",
      "Vehicle routes are marked.",
      "Barricading is complete.",
      "Warning signs are visible.",
      "Speed controls are implemented.",
      "Banksman is available for controlled movement.",
      "Night lighting is adequate.",
      "Workers are wearing high-visibility clothing.",
      "Public access to the work zone is controlled.",
    ],
    observationExample:
      "Workers were observed moving within an active vehicle route without effective physical segregation from construction vehicles.",
    recommendedAction:
      "Provide a clearly segregated pedestrian route and restrict worker movement within active vehicle paths. Review the traffic management arrangement before continuing vehicle operations.",
  },

  {
    sectorSlug: "metro-railway",
    areaSlug: "track-work",
    hazardSlug: "moving-rail-equipment",
    sectorTitle: "Metro & Railway Safety",
    areaTitle: "Track Work",
    hazardTitle: "Moving Rail Equipment",
    overview:
      "Moving rail equipment can create serious struck-by and crushing hazards where workers enter or remain within active track and equipment movement zones.",
    whatCanHappen: [
      "Workers may be struck by moving rail equipment.",
      "Workers may become trapped between equipment and structures.",
      "Unexpected equipment movement may enter the work area.",
      "Poor communication may expose workers to moving plant.",
      "Emergency escape routes may become obstructed.",
    ],
    consequences: [
      "Fatal injury",
      "Crushing injury",
      "Amputation",
      "Equipment collision",
      "Damage to rail infrastructure",
      "Operational disruption",
    ],
    commonCauses: [
      "Uncontrolled access to track areas",
      "Poor communication",
      "Failure to isolate equipment movement",
      "Inadequate lookout arrangements",
      "Poor visibility",
      "Workers entering restricted zones",
    ],
    controls: [
      "Control access to active track areas.",
      "Implement approved track possession or isolation arrangements where applicable.",
      "Use defined communication protocols.",
      "Provide competent lookouts or controllers where required.",
      "Maintain clear emergency escape routes.",
      "Use suitable warning systems.",
      "Brief workers on movement zones before starting work.",
      "Stop work if movement control is unclear.",
    ],
    inspectionPoints: [
      "Track access is controlled.",
      "Movement authority is confirmed.",
      "Communication arrangements are functional.",
      "Warning systems are available.",
      "Restricted zones are identified.",
      "Emergency escape routes are clear.",
      "Workers have received activity briefing.",
      "Lookout arrangements are implemented where required.",
    ],
    observationExample:
      "Workers were observed carrying out track-side activities without a clearly defined separation from the rail equipment movement zone.",
    recommendedAction:
      "Stop exposed work and establish controlled access, equipment movement coordination, and a clearly defined safe work zone before restarting the activity.",
  },

  {
    sectorSlug: "tunnel-underground",
    areaSlug: "confined-space",
    hazardSlug: "oxygen-deficiency",
    sectorTitle: "Tunnel & Underground Safety",
    areaTitle: "Confined Space",
    hazardTitle: "Oxygen Deficiency",
    overview:
      "Oxygen deficiency may develop in underground and confined work areas due to poor ventilation, displacement of oxygen, chemical processes, gases, or restricted air circulation.",
    whatCanHappen: [
      "Workers may experience dizziness or confusion.",
      "Workers may lose consciousness.",
      "Workers may become unable to self-rescue.",
      "Multiple workers may be exposed during an uncontrolled rescue attempt.",
      "Fatal asphyxiation may occur.",
    ],
    consequences: [
      "Loss of consciousness",
      "Asphyxiation",
      "Brain injury",
      "Multiple casualties",
      "Fatality",
    ],
    commonCauses: [
      "Poor ventilation",
      "Failure to test the atmosphere",
      "Oxygen displacement by gases",
      "Inadequate confined-space controls",
      "Ventilation system failure",
      "Unplanned entry",
    ],
    controls: [
      "Test the atmosphere before entry.",
      "Continuously monitor atmospheric conditions where required.",
      "Provide suitable mechanical ventilation.",
      "Implement a confined-space permit system.",
      "Provide trained attendants and entry personnel.",
      "Prepare a suitable rescue plan.",
      "Prevent unauthorized entry.",
      "Stop work and evacuate if atmospheric conditions become unsafe.",
    ],
    inspectionPoints: [
      "Confined-space permit is approved.",
      "Atmospheric test results are recorded.",
      "Gas detector is suitable and calibrated.",
      "Ventilation is operational.",
      "Entry and exit routes are clear.",
      "Attendant is present.",
      "Communication is available.",
      "Rescue equipment is ready.",
      "Emergency plan is understood.",
    ],
    observationExample:
      "Personnel were preparing to enter an underground confined work area without documented atmospheric testing and confirmation of safe oxygen levels.",
    recommendedAction:
      "Prevent entry until atmospheric testing is completed, ventilation is confirmed, and all confined-space permit and rescue requirements are implemented.",
  },

  {
    sectorSlug: "industrial-manufacturing",
    areaSlug: "machine-safety",
    hazardSlug: "unguarded-moving-parts",
    sectorTitle: "Industrial & Manufacturing Safety",
    areaTitle: "Machine Safety",
    hazardTitle: "Unguarded Moving Parts",
    overview:
      "Exposed moving machine parts can create entanglement, crushing, cutting, and drawing-in hazards for operators and nearby personnel.",
    whatCanHappen: [
      "Clothing may become entangled in rotating equipment.",
      "Hands or fingers may enter moving parts.",
      "Workers may become trapped at nip points.",
      "Unexpected contact may cause severe cutting injuries.",
      "A worker may be pulled into operating machinery.",
    ],
    consequences: [
      "Amputation",
      "Crushing injury",
      "Laceration",
      "Permanent disability",
      "Fatal injury",
    ],
    commonCauses: [
      "Missing machine guards",
      "Removed guards",
      "Damaged interlocks",
      "Operating machinery during maintenance",
      "Unsafe access to moving components",
      "Poor machine inspection",
    ],
    controls: [
      "Install suitable fixed or interlocked machine guards.",
      "Do not operate machinery with guards removed.",
      "Apply lockout and tagout before maintenance.",
      "Inspect guards and interlocks regularly.",
      "Restrict access to hazardous moving components.",
      "Train operators in safe machine operation.",
      "Stop defective machinery until repaired.",
    ],
    inspectionPoints: [
      "Machine guards are installed.",
      "Guards are secure.",
      "Interlocks are functional.",
      "Emergency stops are accessible.",
      "LOTO arrangements are available.",
      "Operators are trained.",
      "Moving components are not exposed.",
      "Inspection records are maintained.",
    ],
    observationExample:
      "Rotating machine components were observed exposed during operation due to a missing protective guard.",
    recommendedAction:
      "Stop the machine and isolate the energy source. Install the required protective guard and verify the guarding arrangement before returning the machine to service.",
  },

  {
    sectorSlug: "power-energy",
    areaSlug: "electrical-safety",
    hazardSlug: "exposed-energized-parts",
    sectorTitle: "Power & Energy Safety",
    areaTitle: "Electrical Safety",
    hazardTitle: "Exposed Energized Parts",
    overview:
      "Exposed energized electrical parts can result in direct contact, electric shock, burns, and arc-related incidents.",
    whatCanHappen: [
      "A worker may contact an energized conductor.",
      "Electrical current may pass through the body.",
      "An electrical arc may occur.",
      "Nearby conductive tools may contact live components.",
      "Secondary falls may occur following electric shock.",
    ],
    consequences: [
      "Electric shock",
      "Electrical burns",
      "Arc injury",
      "Fall from height",
      "Fatal electrocution",
    ],
    commonCauses: [
      "Missing electrical covers",
      "Open electrical panels",
      "Damaged insulation",
      "Failure to isolate power",
      "Unauthorized electrical access",
      "Poor temporary electrical arrangements",
    ],
    controls: [
      "De-energize and isolate electrical systems before work where practicable.",
      "Apply approved lockout and tagout procedures.",
      "Install covers and barriers over energized components.",
      "Restrict electrical work to authorized competent persons.",
      "Use suitable electrical PPE where required.",
      "Maintain safe approach distances.",
      "Inspect temporary and permanent electrical systems.",
    ],
    inspectionPoints: [
      "Electrical panels are closed.",
      "Live parts are protected.",
      "LOTO is implemented where required.",
      "Warning signs are displayed.",
      "Access is restricted.",
      "Electrical PPE is available.",
      "Cables and insulation are in good condition.",
      "Authorized electrical personnel are identified.",
    ],
    observationExample:
      "An electrical panel was observed open with energized components accessible and without effective restriction of unauthorized personnel.",
    recommendedAction:
      "Restrict access immediately and arrange for an authorized electrical person to isolate or properly secure the energized components before work continues in the area.",
  },

  {
    sectorSlug: "oil-gas-petrochemical",
    areaSlug: "gas-testing",
    hazardSlug: "flammable-gas-atmosphere",
    sectorTitle: "Oil, Gas & Petrochemical Safety",
    areaTitle: "Gas Testing",
    hazardTitle: "Flammable Gas Atmosphere",
    overview:
      "A flammable gas atmosphere may create fire and explosion hazards when combustible gas or vapour is present within its flammable range and an ignition source is introduced.",
    whatCanHappen: [
      "Gas or vapour may ignite.",
      "A flash fire may occur.",
      "An explosion may develop.",
      "Workers may suffer severe burns.",
      "Fire may spread to nearby process equipment.",
    ],
    consequences: [
      "Multiple fatalities",
      "Severe burn injuries",
      "Explosion",
      "Process plant damage",
      "Major fire",
      "Environmental impact",
    ],
    commonCauses: [
      "Failure to perform gas testing",
      "Gas release or leakage",
      "Inadequate ventilation",
      "Hot work near flammable atmosphere",
      "Incorrect gas detector use",
      "Failure to continuously monitor changing conditions",
    ],
    controls: [
      "Conduct gas testing before starting applicable work.",
      "Use suitable and calibrated gas detection equipment.",
      "Control ignition sources.",
      "Provide adequate ventilation.",
      "Implement permit-to-work requirements.",
      "Continuously monitor the atmosphere where conditions may change.",
      "Stop work if gas levels exceed approved limits.",
      "Maintain emergency response arrangements.",
    ],
    inspectionPoints: [
      "Gas detector is calibrated.",
      "Gas test is completed.",
      "Test results are recorded.",
      "Permit conditions are confirmed.",
      "Ignition sources are controlled.",
      "Ventilation is adequate.",
      "Continuous monitoring is provided where required.",
      "Emergency arrangements are available.",
    ],
    observationExample:
      "Work was being prepared in a process area without documented gas-test confirmation immediately before commencement of the activity.",
    recommendedAction:
      "Do not start the activity until gas testing is completed by an authorized competent person and all permit, atmospheric monitoring, and ignition-control requirements are confirmed.",
  },

  {
    sectorSlug: "marine-port-offshore",
    areaSlug: "working-over-water",
    hazardSlug: "fall-into-water",
    sectorTitle: "Marine, Port & Offshore Safety",
    areaTitle: "Working Over Water",
    hazardTitle: "Fall Into Water",
    overview:
      "Personnel working near open water may fall from jetties, platforms, vessels, temporary structures, or unprotected edges into the water.",
    whatCanHappen: [
      "A worker may fall into the water.",
      "The worker may be unable to swim or self-rescue.",
      "Strong current may move the casualty away from the work area.",
      "The worker may strike structures during the fall.",
      "Rescue may be delayed.",
    ],
    consequences: [
      "Drowning",
      "Hypothermia",
      "Impact injury",
      "Loss of consciousness",
      "Fatality",
    ],
    commonCauses: [
      "Missing edge protection",
      "Slippery working surfaces",
      "Failure to use personal flotation devices",
      "Poor lighting",
      "Adverse weather",
      "Inadequate rescue arrangements",
    ],
    controls: [
      "Provide suitable edge protection where practicable.",
      "Use approved personal flotation devices.",
      "Maintain non-slip working surfaces.",
      "Provide adequate lighting.",
      "Prepare a water rescue plan.",
      "Provide suitable rescue equipment.",
      "Control work during adverse weather.",
      "Maintain effective communication.",
    ],
    inspectionPoints: [
      "Edge protection is available.",
      "Personal flotation devices are worn.",
      "Life rings are accessible.",
      "Rescue boat or suitable rescue arrangement is available where required.",
      "Working surfaces are safe.",
      "Lighting is adequate.",
      "Weather conditions are monitored.",
      "Rescue team understands the emergency plan.",
    ],
    observationExample:
      "Personnel were observed working close to an open jetty edge without suitable personal flotation devices and immediately accessible water-rescue equipment.",
    recommendedAction:
      "Stop exposed work and provide the required fall prevention, personal flotation, and water-rescue arrangements before allowing personnel to resume work near the open water edge.",
  },

  {
    sectorSlug: "mining-heavy-infrastructure",
    areaSlug: "heavy-equipment",
    hazardSlug: "equipment-blind-spot",
    sectorTitle: "Mining & Heavy Infrastructure Safety",
    areaTitle: "Heavy Equipment",
    hazardTitle: "Equipment Blind Spot",
    overview:
      "Large mobile equipment can have extensive blind spots where operators may be unable to see workers, light vehicles, or obstacles around the machine.",
    whatCanHappen: [
      "A worker may be struck by moving equipment.",
      "A light vehicle may enter the blind spot.",
      "A worker may be crushed during reversing.",
      "Equipment may collide with structures or other plant.",
      "The operator may move without seeing exposed personnel.",
    ],
    consequences: [
      "Fatal injury",
      "Crushing injury",
      "Vehicle collision",
      "Equipment damage",
      "Operational disruption",
    ],
    commonCauses: [
      "Workers entering equipment blind spots",
      "Uncontrolled reversing",
      "Missing proximity warning systems",
      "Poor communication",
      "Inadequate segregation",
      "Failure to use a spotter where required",
    ],
    controls: [
      "Establish equipment exclusion zones.",
      "Segregate pedestrians and heavy equipment.",
      "Use trained spotters where required.",
      "Install and maintain reversing alarms and cameras.",
      "Use proximity detection systems where applicable.",
      "Maintain positive communication with equipment operators.",
      "Prevent workers from approaching equipment until acknowledged by the operator.",
      "Provide high-visibility clothing.",
    ],
    inspectionPoints: [
      "Exclusion zones are established.",
      "Pedestrian routes are segregated.",
      "Reversing alarm is functional.",
      "Camera systems are functional where installed.",
      "Spotter arrangements are available.",
      "Communication method is defined.",
      "Workers understand equipment blind spots.",
      "High-visibility clothing is worn.",
    ],
    observationExample:
      "A worker was observed standing within the rear blind-spot area of operating heavy equipment without positive communication with the equipment operator.",
    recommendedAction:
      "Remove personnel from the equipment operating zone and reinforce exclusion-zone and positive-communication requirements before equipment movement resumes.",
  },
];

export function getSectorHazard(
  sectorSlug: string,
  areaSlug: string,
  hazardSlug: string,
) {
  return sectorHazards.find(
    (hazard) =>
      hazard.sectorSlug === sectorSlug &&
      hazard.areaSlug === areaSlug &&
      hazard.hazardSlug === hazardSlug,
  );
}

export function getSectorHazardStaticParams() {
  return sectorHazards.map((hazard) => ({
    sector: hazard.sectorSlug,
    area: hazard.areaSlug,
    hazard: hazard.hazardSlug,
  }));
}

export function getRelatedSectorHazards(
  currentHazard: SectorHazard,
) {
  return sectorHazards
    .filter(
      (hazard) =>
        hazard.sectorSlug === currentHazard.sectorSlug &&
        hazard.hazardSlug !== currentHazard.hazardSlug,
    )
    .slice(0, 4);
}