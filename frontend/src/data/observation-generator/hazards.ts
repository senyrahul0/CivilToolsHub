export type Hazard = {
  id: string;
  sector: string;
  area: string;
  hazard: string;
  severity: "Low" | "Medium" | "High" | "Critical";
  observation: string;
  risk: string;
  consequences: string[];
  correctiveAction: string[];
  preventiveAction: string[];
  responsible: "Safety Officer" | "Site Supervisor" | "Site Engineer" | "Construction Manager" | "Scaffolding Supervisor";
  priority: "Low" | "Medium" | "High" | "Immediate";
  standard: string;
};

export const hazards: Hazard[] = [
  {
    id: "missing-guardrail",
    sector: "High-Rise Building",
    area: "Scaffolding",
    hazard: "Missing Guardrail",
    severity: "High",
    observation:
      "Guardrail protection was missing on the scaffold working platform, exposing workers to a fall-from-height hazard.",
    risk:
      "Workers may fall from the open edge while accessing or working on the scaffold.",
    consequences: [
      "Fatality",
      "Permanent Disability",
      "Fracture",
      "Dropped Objects",
      "Property Damage",
    ],
    correctiveAction: [
      "Install complete guardrail immediately.",
      "Restrict access until rectified.",
      "Inspect scaffold before reuse.",
    ],
    preventiveAction: [
      "Daily scaffold inspection.",
      "Do not remove guardrails without authorization.",
      "Follow approved scaffold design.",
    ],
    responsible: "Scaffolding Supervisor",
    priority: "Immediate",
    standard: "ISO 45001 / OSHA 1926.451",
  },
  {
    id: "unprotected-edge",
    sector: "High-Rise Building",
    area: "Work at Height",
    hazard: "Unprotected Edge",
    severity: "Critical",
    observation:
      "An unprotected edge was observed without suitable edge protection, exposing workers to a fall-from-height hazard.",
    risk:
      "Personnel may fall from height causing serious injury or fatality.",
    consequences: [
      "Fatality",
      "Permanent Disability",
      "Major Injury",
      "Internal Injury",
    ],
    correctiveAction: [
      "Provide guardrail system.",
      "Install lifeline if required.",
      "Restrict access immediately.",
    ],
    preventiveAction: [
      "Inspect edges daily.",
      "Provide edge protection before work starts.",
      "Train workers on fall protection.",
    ],
    responsible: "Site Supervisor",
    priority: "Immediate",
    standard: "ISO 45001 / OSHA 1926.501",
  },
  {
    id: "unsafe-excavation",
    sector: "High-Rise Building",
    area: "Excavation & Earthwork",
    hazard: "Unsafe Excavation",
    severity: "Critical",
    observation:
      "Excavation work was carried out without following the approved excavation safety requirements, creating a high risk of collapse and worker exposure.",
    risk:
      "Unsafe excavation may result in trench collapse, worker burial, serious injury, or fatality.",
    consequences: [
      "Fatality",
      "Permanent Disability",
      "Internal Injury",
      "Trench Collapse",
      "Property Damage",
    ],
    correctiveAction: [
      "Stop excavation immediately.",
      "Implement the approved excavation method statement.",
      "Inspect excavation before resuming work.",
    ],
    preventiveAction: [
      "Follow excavation permit requirements.",
      "Conduct daily inspection.",
      "Ensure competent supervision.",
    ],
    responsible: "Site Engineer",
    priority: "Immediate",
    standard: "OSHA 1926.651 / OSHA 1926.652",
  },
  {
    id: "no-barricading-excavation",
    sector: "High-Rise Building",
    area: "Excavation & Earthwork",
    hazard: "No Barricading Around Excavation",
    severity: "High",
    observation:
      "Excavated area was found without proper barricading or warning signs, exposing workers and vehicles to fall hazards.",
    risk:
      "Personnel or equipment may accidentally enter the excavation resulting in injury or equipment damage.",
    consequences: [
      "Fall Into Excavation",
      "Major Injury",
      "Fracture",
      "Vehicle Accident",
      "Property Damage",
    ],
    correctiveAction: [
      "Install rigid barricading immediately.",
      "Provide warning signage.",
      "Restrict unauthorized access.",
    ],
    preventiveAction: [
      "Barricade every excavation before work starts.",
      "Inspect barricading daily.",
      "Maintain adequate illumination during night work.",
    ],
    responsible: "Safety Officer",
    priority: "Immediate",
    standard: "OSHA 1926.651",
  },
  {
    id: "excavation-edge-collapse",
    sector: "High-Rise Building",
    area: "Excavation & Earthwork",
    hazard: "Excavation Edge Collapse",
    severity: "Critical",
    observation:
      "Cracks and loose soil were observed along the excavation edge indicating possible ground instability.",
    risk:
      "Collapse of excavation edge may bury workers or damage nearby structures and equipment.",
    consequences: [
      "Fatality",
      "Permanent Disability",
      "Internal Injury",
      "Property Damage",
    ],
    correctiveAction: [
      "Suspend work immediately.",
      "Stabilize excavation slopes.",
      "Install shoring or benching where required.",
    ],
    preventiveAction: [
      "Daily inspection by competent person.",
      "Keep heavy loads away from excavation edge.",
      "Monitor soil conditions after rain.",
    ],
    responsible: "Construction Manager",
    priority: "Immediate",
    standard: "OSHA 1926.652",
  },
  {
    id: "no-safe-access-ladder",
    sector: "High-Rise Building",
    area: "Excavation & Earthwork",
    hazard: "No Safe Access Ladder",
    severity: "High",
    observation:
      "Workers were entering and exiting the excavation without a safe access ladder or approved access system.",
    risk:
      "Unsafe entry or exit may result in slips, trips, falls, or delayed emergency evacuation.",
    consequences: [
      "Fall Into Excavation",
      "Major Injury",
      "Fracture",
      "Emergency Delay",
    ],
    correctiveAction: [
      "Provide access ladder immediately.",
      "Ensure ladder extends above ground level.",
      "Inspect ladder condition before use.",
    ],
    preventiveAction: [
      "Provide safe access for every excavation deeper than applicable limits.",
      "Inspect access arrangements daily.",
      "Train workers on safe access procedures.",
    ],
    responsible: "Site Supervisor",
    priority: "High",
    standard: "OSHA 1926.651",
  },
  {
    id: "water-accumulation-excavation",
    sector: "High-Rise Building",
    area: "Excavation & Earthwork",
    hazard: "Water Accumulation in Excavation",
    severity: "High",
    observation:
      "Water accumulation was observed inside the excavation creating unstable soil conditions and slip hazards.",
    risk:
      "Standing water may weaken excavation walls, increase collapse risk, and expose workers to slipping hazards.",
    consequences: [
      "Excavation Collapse",
      "Slip and Fall",
      "Property Damage",
    ],
    correctiveAction: [
      "Stop work until water is removed.",
      "Provide proper dewatering system.",
      "Inspect excavation stability before restarting work.",
    ],
    preventiveAction: [
      "Monitor groundwater continuously.",
      "Maintain dewatering pumps.",
      "Inspect excavation after rainfall.",
    ],
    responsible: "Site Engineer",
    priority: "High",
    standard: "OSHA 1926.651(h)",
  },
  {
    id: "unsafe-scaffold-access",
    sector: "High-Rise Building",
    area: "Scaffolding",
    hazard: "Unsafe Scaffold Access",
    severity: "High",
    observation:
      "Workers were using the scaffold structure framework for climbing instead of an approved external ladder or internal access system.",
    risk:
      "Climbing scaffold framework increases the possibility of slip and fall incidents leading to major internal or physical injuries.",
    consequences: [
      "Fatality",
      "Permanent Disability",
      "Fall from Height",
      "Fracture",
    ],
    correctiveAction: [
      "Stop climbing framework immediately.",
      "Install secured internal stairs or dedicated access ladders.",
      "Provide appropriate safety signage near access point.",
    ],
    preventiveAction: [
      "Verify access systems during initial scaffold handover.",
      "Conduct worker briefing on safe access practices.",
      "Perform weekly checks on access components.",
    ],
    responsible: "Scaffolding Supervisor",
    priority: "High",
    standard: "OSHA 1926.451(e)",
  },
  {
    id: "scaffold-not-tagged",
    sector: "High-Rise Building",
    area: "Scaffolding",
    hazard: "Scaffold Not Tagged",
    severity: "Medium",
    observation:
      "The erected scaffold structure lacked a visible safety status tag (Green/Red tag system) to indicate inspection status before usage.",
    risk:
      "Workers might unintentionally use an uncertified, incomplete, or unstable scaffold structural layout.",
    consequences: [
      "Fatality",
      "Permanent Disability",
      "Fall from Height",
      "Regulatory Deficiencies",
    ],
    correctiveAction: [
      "Stop scaffold usage immediately.",
      "Arrange inspection by a competent inspector.",
      "Apply appropriate verification tag prominently at the access point.",
    ],
    preventiveAction: [
      "Implement standard pre-use tag controls.",
      "Train workforces to check inspection tags before mounting scaffolding.",
      "Maintain an up-to-date site scaffold registry.",
    ],
    responsible: "Safety Officer",
    priority: "High",
    standard: "OSHA 1926.451(f)(3)",
  },
  {
    id: "missing-base-plate",
    sector: "High-Rise Building",
    area: "Scaffolding",
    hazard: "Missing Base Plate",
    severity: "Critical",
    observation:
      "Scaffold vertical standard poles were found placed directly on the surface without structural base plates to distribute the system weight load.",
    risk:
      "Direct point load application could cause displacement, vertical pole slippage, or surface indentation, creating global layout instability.",
    consequences: [
      "Fatality",
      "Permanent Disability",
      "Fall from Height",
      "Internal Injury",
    ],
    correctiveAction: [
      "Stop operations on affected scaffold lines.",
      "Use appropriate mechanical lift support to insert standard base plates.",
      "Re-verify structural vertical alignment.",
    ],
    preventiveAction: [
      "Ensure full compliance with design load footprints.",
      "Enforce mandatory components checklist prior to erection stages.",
      "Mandate daily layout tracking procedures.",
    ],
    responsible: "Scaffolding Supervisor",
    priority: "Immediate",
    standard: "OSHA 1926.451(c)(2)",
  },
  {
    id: "missing-sole-plate",
    sector: "High-Rise Building",
    area: "Scaffolding",
    hazard: "Missing Sole Plate",
    severity: "High",
    observation:
      "Scaffold base components were configured without structural timber sole plates on compacted soft soil foundation surfaces.",
    risk:
      "Soil bearing failure or localized settling from structural weight could compromise frame integrity over extended durations.",
    consequences: [
      "Fatality",
      "Permanent Disability",
      "Fall from Height",
      "Fracture",
    ],
    correctiveAction: [
      "Evacuate workforce from the scaffold frame lines.",
      "Insert structural sill boards or timber plates underneath base elements.",
      "Audit soil density stability status.",
    ],
    preventiveAction: [
      "Analyze surface firmness before specifying scaffolding footprint layouts.",
      "Mandate sole plates on unpaved ground configurations.",
      "Monitor ground stability variables post wet weather occurrences.",
    ],
    responsible: "Scaffolding Supervisor",
    priority: "Immediate",
    standard: "OSHA 1926.451(c)(2)",
  },
  {
    id: "improper-cross-bracing",
    sector: "High-Rise Building",
    area: "Scaffolding",
    hazard: "Improper Cross Bracing",
    severity: "Critical",
    observation:
      "Scaffold cross bracing was missing, damaged, or improperly installed, affecting the overall stability of the scaffold structure.",
    risk:
      "The scaffold may become unstable and collapse, exposing workers to serious injury or fatality.",
    consequences: [
      "Fatality",
      "Permanent Disability",
      "Fall from Height",
      "Internal Injury",
    ],
    correctiveAction: [
      "Stop work on the affected scaffold immediately.",
      "Install or repair the cross bracing as per the approved scaffold design.",
      "Inspect the scaffold before allowing further use.",
    ],
    preventiveAction: [
      "Inspect scaffold bracing during erection and daily inspections.",
      "Do not remove bracing without authorization.",
      "Ensure erection is carried out by trained scaffolders.",
    ],
    responsible: "Scaffolding Supervisor",
    priority: "Immediate",
    standard: "OSHA 1926.451(a)",
  },
  {
    id: "scaffold-not-tied-to-structure",
    sector: "High-Rise Building",
    area: "Scaffolding",
    hazard: "Scaffold Not Tied to Structure",
    severity: "Critical",
    observation:
      "The scaffold was not adequately tied or anchored to the permanent structure as required.",
    risk:
      "The scaffold may overturn, sway, or collapse due to wind loads or worker movement.",
    consequences: [
      "Fatality",
      "Permanent Disability",
      "Fall from Height",
      "Internal Injury",
    ],
    correctiveAction: [
      "Stop scaffold use immediately.",
      "Install all required ties and anchors as per scaffold design.",
      "Verify scaffold stability before resuming work.",
    ],
    preventiveAction: [
      "Follow scaffold tie pattern during erection.",
      "Inspect all ties before every shift.",
      "Do not remove scaffold ties without approval.",
    ],
    responsible: "Scaffolding Supervisor",
    priority: "Immediate",
    standard: "OSHA 1926.451(c)",
  },
  {
    id: "overloaded-scaffold-platform",
    sector: "High-Rise Building",
    area: "Scaffolding",
    hazard: "Overloaded Scaffold Platform",
    severity: "Critical",
    observation:
      "Excessive construction materials were stored on the scaffold platform beyond its safe working load.",
    risk:
      "Overloading may cause platform failure or scaffold collapse, resulting in serious injuries.",
    consequences: [
      "Fatality",
      "Permanent Disability",
      "Fall from Height",
      "Internal Injury",
    ],
    correctiveAction: [
      "Remove excess materials immediately.",
      "Maintain the load within the scaffold's rated capacity.",
      "Inspect the scaffold for any damage before reuse.",
    ],
    preventiveAction: [
      "Display scaffold load capacity signage.",
      "Train workers on safe loading practices.",
      "Monitor scaffold loading during work activities.",
    ],
    responsible: "Scaffolding Supervisor",
    priority: "Immediate",
    standard: "OSHA 1926.451(f)(1)",
  },
  {
    id: "unsecured-scaffold-materials",
    sector: "High-Rise Building",
    area: "Scaffolding",
    hazard: "Unsecured Scaffold Materials",
    severity: "High",
    observation:
      "Loose tools and construction materials were stored on the scaffold platform without proper securing arrangements.",
    risk:
      "Materials may fall from the scaffold and strike workers or damage equipment below.",
    consequences: [
      "Head Injury",
      "Dropped Objects",
      "Property Damage",
    ],
    correctiveAction: [
      "Secure all loose materials immediately.",
      "Remove unnecessary materials from the platform.",
      "Barricade the area below if overhead work is in progress.",
    ],
    preventiveAction: [
      "Maintain good housekeeping on scaffold platforms.",
      "Use tool lanyards where applicable.",
      "Inspect scaffold platforms before each shift.",
    ],
    responsible: "Safety Officer",
    priority: "High",
    standard: "OSHA 1926.451(h)",
  },
  {
    id: "missing-safety-net-scaffold",
    sector: "High-Rise Building",
    area: "Scaffolding",
    hazard: "Missing Safety Net Around Scaffold",
    severity: "High",
    observation:
      "Safety net protection was not provided around the scaffold where there was a risk of falling persons or materials.",
    risk:
      "Workers or falling objects may fall from the scaffold, causing serious injury or fatality.",
    consequences: [
      "Fatality",
      "Fall from Height",
      "Dropped Objects",
    ],
    correctiveAction: [
      "Install approved safety nets immediately.",
      "Restrict work until adequate fall protection is provided.",
      "Inspect the safety net installation before use.",
    ],
    preventiveAction: [
      "Install safety nets wherever required by the risk assessment.",
      "Inspect safety nets regularly for damage.",
      "Ensure proper fixing and overlap during installation.",
    ],
    responsible: "Safety Officer",
    priority: "Immediate",
    standard: "OSHA 1926.451(g)",
  },
  {
    id: "unauthorized-scaffold-modification",
    sector: "High-Rise Building",
    area: "Scaffolding",
    hazard: "Unauthorized Scaffold Modification",
    severity: "Critical",
    observation:
      "The scaffold structure was modified without approval or by an unauthorized person, affecting its original design and stability.",
    risk:
      "Unauthorized modifications may reduce scaffold stability and result in scaffold collapse or fall from height.",
    consequences: [
      "Fatality",
      "Permanent Disability",
      "Fall from Height",
      "Internal Injury",
    ],
    correctiveAction: [
      "Stop work immediately.",
      "Restore the scaffold to the approved design.",
      "Inspect the scaffold by a competent person before reuse.",
    ],
    preventiveAction: [
      "Allow scaffold modifications only with authorization.",
      "Maintain scaffold modification records.",
      "Train workers not to alter scaffold components.",
    ],
    responsible: "Scaffolding Supervisor",
    priority: "Immediate",
    standard: "OSHA 1926.451(f)(7)",
  },
  {
    id: "unauthorized-scaffold-erection",
    sector: "High-Rise Building",
    area: "Scaffolding",
    hazard: "Scaffold Erected by Unauthorized Person",
    severity: "Critical",
    observation:
      "The scaffold was erected, altered, or dismantled by personnel who were not trained or authorized for scaffolding work.",
    risk:
      "Improper scaffold erection may lead to structural instability, collapse, and serious injury.",
    consequences: [
      "Fatality",
      "Permanent Disability",
      "Fall from Height",
      "Fracture",
    ],
    correctiveAction: [
      "Stop scaffold work immediately.",
      "Allow only trained and authorized scaffolders to perform scaffold activities.",
      "Re-inspect the scaffold before use.",
    ],
    preventiveAction: [
      "Maintain competency records of scaffolders.",
      "Verify authorization before assigning scaffold work.",
      "Conduct periodic competency assessments.",
    ],
    responsible: "Construction Manager",
    priority: "Immediate",
    standard: "OSHA 1926.451(f)(7)",
  },
  {
    id: "damaged-scaffold-tube",
    sector: "High-Rise Building",
    area: "Scaffolding",
    hazard: "Damaged Scaffold Tube",
    severity: "High",
    observation:
      "Bent, cracked, corroded, or damaged scaffold tubes were found in use.",
    risk:
      "Damaged scaffold components may fail under load, causing scaffold instability or collapse.",
    consequences: [
      "Fatality",
      "Permanent Disability",
      "Fall from Height",
      "Fracture",
    ],
    correctiveAction: [
      "Remove damaged scaffold tubes immediately.",
      "Replace with approved scaffold components.",
      "Inspect the complete scaffold before use.",
    ],
    preventiveAction: [
      "Inspect scaffold materials before every erection.",
      "Segregate damaged materials.",
      "Maintain regular scaffold inspections.",
    ],
    responsible: "Scaffolding Supervisor",
    priority: "High",
    standard: "OSHA 1926.451(b)",
  },
  {
    id: "missing-ladder-gate",
    sector: "High-Rise Building",
    area: "Scaffolding",
    hazard: "Missing Ladder Gate",
    severity: "High",
    observation:
      "The ladder access opening was found without a self-closing ladder safety gate.",
    risk:
      "Workers may accidentally fall through the ladder opening while accessing the scaffold platform.",
    consequences: [
      "Fatality",
      "Permanent Disability",
      "Fall from Height",
      "Internal Injury",
    ],
    correctiveAction: [
      "Install a self-closing ladder gate immediately.",
      "Restrict scaffold access until installed.",
      "Inspect all scaffold access openings.",
    ],
    preventiveAction: [
      "Provide ladder gates at every scaffold access point.",
      "Inspect ladder gates during daily inspections.",
      "Replace damaged gates immediately.",
    ],
    responsible: "Scaffolding Supervisor",
    priority: "Immediate",
    standard: "OSHA 1926.451(e)",
  },
  {
    id: "poor-housekeeping-scaffold",
    sector: "High-Rise Building",
    area: "Scaffolding",
    hazard: "Poor Housekeeping on Scaffold Platform",
    severity: "Medium",
    observation:
      "Construction debris, loose materials, and waste were found on the scaffold platform.",
    risk:
      "Poor housekeeping may cause slips, trips, and falling object incidents.",
    consequences: [
      "Major Injury",
      "Fracture",
      "Slip and Trip",
      "Dropped Objects",
    ],
    correctiveAction: [
      "Remove unnecessary materials immediately.",
      "Maintain clear access and working areas.",
      "Dispose of waste in designated bins.",
    ],
    preventiveAction: [
      "Maintain housekeeping throughout the shift.",
      "Inspect scaffold platforms before starting work.",
      "Assign responsibility for daily housekeeping.",
    ],
    responsible: "Scaffolding Supervisor",
    priority: "Medium",
    standard: "OSHA 1926.451(f)",
  },
  {
    id: "missing-guardrail-work-height",
    sector: "High-Rise Building",
    area: "Work at Height",
    hazard: "Missing Guardrail at Work Platform",
    severity: "High",
    observation:
      "Guardrails were missing on high elevated edge borders, violating temporary barrier installation constraints.",
    risk:
      "Workers may fall from the unprotected edge while performing work at height.",
    consequences: [
      "Fall from Height",
      "Major Injury",
      "Fatality",
    ],
    correctiveAction: [
      "Halt proximity access pathways instantly.",
      "Erect top rails, mid rails, and toe board protection frames.",
      "Verify structural rigidity before releasing perimeter locks.",
    ],
    preventiveAction: [
      "Pre-install edge safety perimeter setups ahead of construction phases.",
      "Incorporate daily check logs for edge barriers.",
      "Train site workforces on elevated boundary limits.",
    ],
    responsible: "Site Supervisor",
    priority: "Immediate",
    standard: "OSHA 1926.501(b)(1)",
  },
  {
    id: "floor-opening-not-covered",
    sector: "High-Rise Building",
    area: "Work at Height",
    hazard: "Uncovered Floor Opening",
    severity: "Critical",
    observation:
      "Open slab structural voids, duct segments, and shaft entries were left exposed without strong structural covers or safety boundaries.",
    risk:
      "Personnel passing near layout boundaries risk dropping through floor openings into inner vertical sections.",
    consequences: [
      "Fall from Height",
      "Major Injury",
      "Fatality",
    ],
    correctiveAction: [
      "Secure openings with certified load-bearing material panels immediately.",
      "Apply high-visibility warning paint markings indicating structural voids.",
      "Secure the covers firmly to prevent accidental shifts.",
    ],
    preventiveAction: [
      "Maintain a dynamic record tracking all structural void operations.",
      "Enforce mandatory inspections for floor openings across every shift.",
      "Prohibit moving slab void protections without written authorization.",
    ],
    responsible: "Site Engineer",
    priority: "Immediate",
    standard: "OSHA 1926.501(b)(4)",
  },
  {
    id: "unsafe-working-platform",
    sector: "High-Rise Building",
    area: "Work at Height",
    hazard: "Unsafe Working Platform",
    severity: "High",
    observation:
      "Temporary staging levels were erected with loose elements, inadequate width footprints, or unapproved materials.",
    risk:
      "Platform components might break or slip under mechanical weight distributions, resulting in falls from height.",
    consequences: [
      "Fall from Height",
      "Major Injury",
      "Fracture",
      "Dropped Objects",
    ],
    correctiveAction: [
      "Evacuate workforces from uncertified staging structures.",
      "Re-lay platforms using approved planks and lock assemblies.",
      "Perform compliance checks on load capacities.",
    ],
    preventiveAction: [
      "Enforce design parameter standards for temporary structures.",
      "Conduct mandatory tool-box sessions regarding platform weights.",
      "Implement routine checks on structural hardware stability.",
    ],
    responsible: "Site Supervisor",
    priority: "High",
    standard: "OSHA 1926.501",
  },
  {
    id: "missing-full-body-harness",
    sector: "High-Rise Building",
    area: "Work at Height",
    hazard: "Missing Full Body Harness",
    severity: "Critical",
    observation:
      "Personnel were operating near exposed borders without wearing full-body fall arrest harness systems.",
    risk:
      "Sudden loss of balance near high perimeters will result in direct, unrestricted falls.",
    consequences: [
      "Fatality",
      "Major Injury",
      "Permanent Disability",
      "Internal Injury",
    ],
    correctiveAction: [
      "Remove non-compliant workers from elevated boundaries immediately.",
      "Provide certified fall protection gear units.",
      "Confirm proper fit adjustments before allowing reentry.",
    ],
    preventiveAction: [
      "Enforce zero-tolerance safety gear compliance audits at high access points.",
      "Perform periodic verification checks on harness load loops.",
      "Incorporate fall protection drills within monthly training calendars.",
    ],
    responsible: "Safety Officer",
    priority: "Immediate",
    standard: "OSHA 1926.501 / OSHA 1926.502",
  },
  {
    id: "improper-harness-anchorage",
    sector: "High-Rise Building",
    area: "Work at Height",
    hazard: "Improper Harness Anchorage",
    severity: "Critical",
    observation:
      "Workers anchored harness lanyards to weak conduits, electrical piping paths, or non-load-bearing structural parts.",
    risk:
      "Weak anchor choices will shear or fail completely during fall forces, rendering the harness system useless.",
    consequences: [
      "Fatality",
      "Permanent Disability",
      "Major Injury",
      "Fall from Height",
    ],
    correctiveAction: [
      "Stop compromised operations instantly.",
      "Direct lines to certified engineered anchors or lifeline tracks.",
      "Inspect lanyard hook states for strain deformities.",
    ],
    preventiveAction: [
      "Mark certified anchorage structures clearly with high-visibility color bands.",
      "Install engineering-approved static lifelines across open project boundaries.",
      "Train site personnel to calculate safe fall clearances properly.",
    ],
    responsible: "Safety Officer",
    priority: "Immediate",
    standard: "OSHA 1926.502(d)(15)",
  },
  {
    id: "unsafe-ladder-usage",
    sector: "High-Rise Building",
    area: "Work at Height",
    hazard: "Unsafe Ladder Usage",
    severity: "High",
    observation:
      "Workers were observed overreaching, standing on the top rungs, or carrying heavy materials while climbing the ladder.",
    risk:
      "Unsafe behavior on ladders can cause a loss of balance, leading to slip and fall incidents from elevation.",
    consequences: [
      "Major Injury",
      "Fall from Height",
      "Head Injury",
      "Fracture",
    ],
    correctiveAction: [
      "Instruct workers to stop unsafe practices immediately.",
      "Enforce the three-point contact rule during climbing.",
      "Provide mechanical lifting assistance for heavy tools or equipment.",
    ],
    preventiveAction: [
      "Conduct regular toolbox talks on safe ladder procedures.",
      "Ensure supervisors monitor ladder work effectively.",
      "Prohibit standing on the top two rungs of any step ladder.",
    ],
    responsible: "Site Supervisor",
    priority: "High",
    standard: "OSHA 1926.1053",
  },
  {
    id: "damaged-ladder",
    sector: "High-Rise Building",
    area: "Work at Height",
    hazard: "Use of Damaged Ladder",
    severity: "High",
    observation:
      "A ladder with broken rungs, split side rails, or defective structural components was found in active use on site.",
    risk:
      "A damaged ladder may fail under the worker's weight, causing a sudden fall from height.",
    consequences: [
      "Fatality",
      "Major Injury",
      "Fall from Height",
      "Fracture",
    ],
    correctiveAction: [
      "Remove the damaged ladder from service immediately.",
      "Tag it clearly as 'Do Not Use' and arrange for disposal or repair.",
      "Provide a certified, high-quality replacement ladder.",
    ],
    preventiveAction: [
      "Inspect ladders for defects before every work shift.",
      "Maintain an inventory of certified ladders on site.",
      "Destroy defective ladders completely to prevent accidental reuse.",
    ],
    responsible: "Safety Officer",
    priority: "High",
    standard: "OSHA 1926.1053(b)(15)",
  },
  {
    id: "ladder-not-secured",
    sector: "High-Rise Building",
    area: "Work at Height",
    hazard: "Ladder Not Secured or Tied Off",
    severity: "High",
    observation:
      "An extension ladder was placed against a structure without being tied off at the top or secured at the base.",
    risk:
      "The ladder may slip at the base or slide sideways, causing the worker to fall from height.",
    consequences: [
      "Fatality",
      "Major Injury",
      "Fall from Height",
      "Fracture",
    ],
    correctiveAction: [
      "Secure, tie off, or anchor the ladder at the top and base immediately.",
      "Have a second worker hold the ladder base until it is completely secured.",
      "Ensure the ladder extends at least 3 feet above the landing platform.",
    ],
    preventiveAction: [
      "Enforce mandatory tie-off rules for all extension ladders.",
      "Verify proper ladder placement angles (4:1 ratio) during inspections.",
      "Train workers on correct extension ladder staging protocols.",
    ],
    responsible: "Site Supervisor",
    priority: "High",
    standard: "OSHA 1926.1053(b)(1)",
  },
  {
    id: "working-without-lifeline",
    sector: "High-Rise Building",
    area: "Work at Height",
    hazard: "Working Without Fall Protection Lifeline",
    severity: "Critical",
    observation:
      "Workers were executing tasks on leading edges or open structures without a secure lifeline system to hook their harnesses.",
    risk:
      "Without a lifeline connection, full-body safety harnesses cannot prevent or arrest a fatal fall.",
    consequences: [
      "Fatality",
      "Permanent Disability",
      "Fall from Height",
      "Internal Injury",
    ],
    correctiveAction: [
      "Stop all open border work immediately.",
      "Install approved temporary or permanent lifeline tracks.",
      "Ensure workers hook their lanyards before returning to the area.",
    ],
    preventiveAction: [
      "Mandate lifeline planning in the safe work method statement (SWMS).",
      "Audit leading-edge fall protection measures daily.",
      "Provide sufficient certified lifelines ahead of slab operations.",
    ],
    responsible: "Safety Officer",
    priority: "Immediate",
    standard: "OSHA 1926.502(d)",
  },
  {
    id: "missing-horizontal-lifeline",
    sector: "High-Rise Building",
    area: "Work at Height",
    hazard: "Missing or Loose Horizontal Lifeline",
    severity: "Critical",
    observation:
      "A horizontal lifeline installed along the building perimeter was found sagging, loose, or missing proper anchor supports.",
    risk:
      "A loose lifeline increases the fall distance and may fail under the weight of a falling worker, risking anchor breakage.",
    consequences: [
      "Fatality",
      "Permanent Disability",
      "Fall from Height",
      "Internal Injury",
    ],
    correctiveAction: [
      "Halt perimeter activities immediately.",
      "Tighten the horizontal lifeline to proper specs using turnbuckles.",
      "Verify all wire clamps and anchor connections are secure.",
    ],
    preventiveAction: [
      "Ensure horizontal lifelines are designed and approved by a qualified engineer.",
      "Check line tension and attachment tracks weekly.",
      "Inspect lifelines regularly for wear, frays, or rust indicators.",
    ],
    responsible: "Construction Manager",
    priority: "Immediate",
    standard: "OSHA 1926.502(d)",
  },
  {
    id: "missing-toe-board",
    sector: "High-Rise Building",
    area: "Work at Height",
    hazard: "Missing Toe Board",
    severity: "High",
    observation:
      "Toe boards were not installed along the edge of the elevated working platform where there was a risk of materials falling.",
    risk:
      "Tools or construction materials may fall from the platform and strike workers below.",
    consequences: [
      "Major Injury",
      "Head Injury",
      "Dropped Objects",
      "Property Damage",
    ],
    correctiveAction: [
      "Install toe boards immediately.",
      "Remove loose materials from platform edges.",
      "Restrict access below until protection is provided.",
    ],
    preventiveAction: [
      "Install toe boards on all elevated work platforms.",
      "Inspect edge protection before each shift.",
      "Maintain good housekeeping at height.",
    ],
    responsible: "Safety Officer",
    priority: "High",
    standard: "OSHA 1926.502(j)",
  },
  {
    id: "improper-edge-protection",
    sector: "High-Rise Building",
    area: "Work at Height",
    hazard: "Improper Edge Protection",
    severity: "Critical",
    observation:
      "Edge protection was incomplete, damaged, or improperly installed along the open working edge.",
    risk:
      "Workers may fall through unprotected sections while performing work at height.",
    consequences: [
      "Fatality",
      "Permanent Disability",
      "Fall from Height",
      "Internal Injury",
    ],
    correctiveAction: [
      "Stop work immediately.",
      "Repair or replace the damaged edge protection.",
      "Inspect the complete edge protection system before resuming work.",
    ],
    preventiveAction: [
      "Inspect edge protection daily.",
      "Do not remove guardrails without authorization.",
      "Maintain continuous edge protection throughout the work area.",
    ],
    responsible: "Site Supervisor",
    priority: "Immediate",
    standard: "OSHA 1926.501(b)(1)",
  },
  {
    id: "unsafe-roof-work",
    sector: "High-Rise Building",
    area: "Work at Height",
    hazard: "Unsafe Roof Work",
    severity: "Critical",
    observation:
      "Workers were carrying out roof work without adequate fall protection or safe access arrangements.",
    risk:
      "Workers may fall from the roof edge resulting in serious injury or fatality.",
    consequences: [
      "Fatality",
      "Permanent Disability",
      "Fall from Height",
      "Internal Injury",
    ],
    correctiveAction: [
      "Stop roof work immediately.",
      "Provide approved fall protection systems.",
      "Ensure safe roof access before restarting work.",
    ],
    preventiveAction: [
      "Conduct roof work only under a safe work permit.",
      "Provide lifelines and guardrails where required.",
      "Train workers on roof safety procedures.",
    ],
    responsible: "Site Supervisor",
    priority: "Immediate",
    standard: "OSHA 1926.501(b)(10)",
  },
  {
    id: "falling-object-hazard",
    sector: "High-Rise Building",
    area: "Work at Height",
    hazard: "Falling Object Hazard",
    severity: "High",
    observation:
      "Tools, materials, or equipment were stored or handled at height without adequate protection against falling.",
    risk:
      "Falling objects may strike workers below, causing serious injuries or property damage.",
    consequences: [
      "Head Injury",
      "Dropped Objects",
      "Property Damage",
    ],
    correctiveAction: [
      "Secure all tools and materials immediately.",
      "Barricade the area below.",
      "Use tool lanyards where applicable.",
    ],
    preventiveAction: [
      "Maintain proper material storage at height.",
      "Inspect work areas before starting work.",
      "Provide overhead protection where required.",
    ],
    responsible: "Safety Officer",
    priority: "High",
    standard: "OSHA 1926.501(c)",
  },
  {
    id: "improper-safety-net-installation",
    sector: "High-Rise Building",
    area: "Work at Height",
    hazard: "Improper Safety Net Installation",
    severity: "Critical",
    observation:
      "The safety net system was improperly installed, damaged, or inadequately secured below the work area.",
    risk:
      "An improperly installed safety net may fail to arrest a falling worker or falling materials.",
    consequences: [
      "Fatality",
      "Permanent Disability",
      "Fall from Height",
      "Internal Injury",
    ],
    correctiveAction: [
      "Stop work immediately.",
      "Reinstall the safety net in accordance with approved requirements.",
      "Inspect the safety net before resuming work.",
    ],
    preventiveAction: [
      "Inspect safety nets before each use.",
      "Install safety nets only by trained personnel.",
      "Replace damaged safety nets immediately.",
    ],
    responsible: "Safety Officer",
    priority: "Immediate",
    standard: "OSHA 1926.502(c)",
  },
  {
    id: "unsafe-mobile-scaffold",
    sector: "High-Rise Building",
    area: "Work at Height",
    hazard: "Unsafe Mobile Scaffold Usage",
    severity: "High",
    observation:
      "Workers were moving a mobile tower scaffold while personnel or loose materials were still remaining on the top platform.",
    risk:
      "Moving the scaffold tower with load or personnel can cause shifting balance, leading to a sudden roll-over or fall.",
    consequences: [
      "Fatality",
      "Permanent Disability",
      "Fall from Height",
      "Fracture",
    ],
    correctiveAction: [
      "Stop moving the scaffold tower immediately.",
      "Instruct all workers to descend before repositioning the structure.",
      "Clear all loose materials and tools from platforms prior to movements.",
    ],
    preventiveAction: [
      "Lock caster wheel brakes securely before anyone mounts the platform.",
      "Train teams on the specific assembly and relocation rules for mobile towers.",
      "Prohibit platform occupancy during manual scaffold displacement shifts.",
    ],
    responsible: "Scaffolding Supervisor",
    priority: "High",
    standard: "OSHA 1926.452(w)",
  },
  {
    id: "improper-mewp-use",
    sector: "High-Rise Building",
    area: "Work at Height",
    hazard: "Improper MEWP Operation",
    severity: "Critical",
    observation:
      "Workers operating inside a Mobile Elevating Work Platform (MEWP) bucket did not anchor their safety harnesses to the designated platform point.",
    risk:
      "A sudden mechanical jolt or bump can eject workers out of the platform bucket if they are not tied off.",
    consequences: [
      "Fatality",
      "Permanent Disability",
      "Fall from Height",
      "Internal Injury",
    ],
    correctiveAction: [
      "Halt boom or scissor lift operations instantly.",
      "Instruct personnel to attach harness lanyards to the certified anchor hook point.",
      "Verify the gate enclosure mechanism is latched completely.",
    ],
    preventiveAction: [
      "Ensure only certified and trained operators run elevating boom equipment.",
      "Enforce mandatory inspections of harness hook status before platform elevation.",
      "Maintain strict ground clearance parameters around operating radius tracks.",
    ],
    responsible: "Site Supervisor",
    priority: "Immediate",
    standard: "OSHA 1926.453",
  },
  {
    id: "unsafe-fragile-surface",
    sector: "High-Rise Building",
    area: "Work at Height",
    hazard: "Unprotected Work on Fragile Surfaces",
    severity: "Critical",
    observation:
      "Workers were walking over fragile sheet elements or panels without utilizing crawling boards or fallback safety nets underneath.",
    risk:
      "The fragile substrate cannot support full load weights, risking sheet failure and immediate breakthrough drops.",
    consequences: [
      "Fatality",
      "Permanent Disability",
      "Fall from Height",
      "Internal Injury",
    ],
    correctiveAction: [
      "Order workers off the fragile panels immediately.",
      "Install staging board runways or underslung catchment safety frameworks.",
      "Barricade non-load paths with clear warning boundary signs.",
    ],
    preventiveAction: [
      "Conduct structural path integrity validation testing before surface staging phases.",
      "Provide mandatory crawl boards for thin panel maintenance activities.",
      "Display explicit entry-restriction tags around ceiling skylight profiles.",
    ],
    responsible: "Site Engineer",
    priority: "Immediate",
    standard: "OSHA 1926.501",
  },
  {
    id: "fall-protection-not-inspected",
    sector: "High-Rise Building",
    area: "Work at Height",
    hazard: "Uninspected Fall Protection Equipment",
    severity: "High",
    observation:
      "Full-body harnesses and shock-absorbing lanyards in use showed signs of extreme wear, friction burns, or missing pre-use safety inspection tags.",
    risk:
      "Damaged or uncertified PPE can rupture completely under fall arrest tension loads, failing to stop a fall.",
    consequences: [
      "Fatality",
      "Permanent Disability",
      "Fall from Height",
      "Major Injury",
    ],
    correctiveAction: [
      "Confiscate the uninspected or damaged safety gear immediately.",
      "Provide new, certified fall arrest gear with valid color-coded tags.",
      "Destroy defective web harness items to prevent accidental site reuse.",
    ],
    preventiveAction: [
      "Implement a monthly color-coded safety gear auditing process on site.",
      "Train personnel to execute thorough pre-use harness strap inspections.",
      "Maintain an up-to-date registry of all active personal protective equipment units.",
    ],
    responsible: "Safety Officer",
    priority: "High",
    standard: "OSHA 1926.502",
  },
  {
    id: "missing-working-platform-formwork",
    sector: "High-Rise Building",
    area: "Formwork / Mivan",
    hazard: "Missing Working Platform",
    severity: "Critical",
    observation:
      "A safe working platform was not provided for workers carrying out formwork or Mivan activities at height.",
    risk:
      "Workers may lose balance and fall while erecting, dismantling, or adjusting formwork components.",
    consequences: [
      "Fatality",
      "Permanent Disability",
      "Fall from Height",
      "Major Injury",
    ],
    correctiveAction: [
      "Stop work immediately.",
      "Provide a fully decked working platform.",
      "Inspect the platform before allowing work to resume.",
    ],
    preventiveAction: [
      "Provide working platforms before starting formwork activities.",
      "Inspect platforms daily.",
      "Allow work only from approved platforms.",
    ],
    responsible: "Site Supervisor",
    priority: "Immediate",
    standard: "OSHA 1926.451 / OSHA 1926.501",
  },
  {
    id: "missing-handrail-formwork-platform",
    sector: "High-Rise Building",
    area: "Formwork / Mivan",
    hazard: "Missing Handrail on Formwork Platform",
    severity: "Critical",
    observation:
      "The formwork working platform was found without complete handrail protection.",
    risk:
      "Workers may fall from the open edge while performing formwork activities.",
    consequences: [
      "Fatality",
      "Permanent Disability",
      "Fall from Height",
      "Internal Injury",
    ],
    correctiveAction: [
      "Stop work immediately.",
      "Install complete handrail protection.",
      "Inspect edge protection before resuming work.",
    ],
    preventiveAction: [
      "Provide handrails on every elevated platform.",
      "Inspect edge protection before each shift.",
      "Do not remove handrails without authorization.",
    ],
    responsible: "Safety Officer",
    priority: "Immediate",
    standard: "OSHA 1926.501(b)(1)",
  },
  {
    id: "missing-access-ladder-formwork",
    sector: "High-Rise Building",
    area: "Formwork / Mivan",
    hazard: "Missing Access Ladder",
    severity: "High",
    observation:
      "Workers were accessing the formwork platform without an approved access ladder.",
    risk:
      "Unsafe access may result in slips, trips, or falls while climbing onto the formwork platform.",
    consequences: [
      "Fall from Height",
      "Major Injury",
      "Fracture",
      "Head Injury",
    ],
    correctiveAction: [
      "Provide an approved access ladder immediately.",
      "Restrict unsafe access.",
      "Inspect ladder condition before use.",
    ],
    preventiveAction: [
      "Provide safe access at all formwork locations.",
      "Inspect access arrangements daily.",
      "Train workers on safe access procedures.",
    ],
    responsible: "Site Supervisor",
    priority: "High",
    standard: "OSHA 1926.1053",
  },
  {
    id: "unsecured-formwork-components",
    sector: "High-Rise Building",
    area: "Formwork / Mivan",
    hazard: "Unsecured Formwork Components",
    severity: "Critical",
    observation:
      "Formwork panels or supporting components were found unsecured before concrete placement.",
    risk:
      "Loose formwork components may collapse or become dislodged during construction activities.",
    consequences: [
      "Fatality",
      "Permanent Disability",
      "Structural Collapse",
      "Major Injury",
    ],
    correctiveAction: [
      "Stop work immediately.",
      "Secure all formwork components.",
      "Inspect the entire formwork system before continuing work.",
    ],
    preventiveAction: [
      "Verify all locking pins and wedges before use.",
      "Conduct pre-pour inspections.",
      "Allow only competent personnel to assemble formwork.",
    ],
    responsible: "Site Engineer",
    priority: "Immediate",
    standard: "OSHA 1926.703",
  },
  {
    id: "damaged-formwork-panel",
    sector: "High-Rise Building",
    area: "Formwork / Mivan",
    hazard: "Damaged Formwork Panel",
    severity: "High",
    observation:
      "Damaged, bent, or cracked formwork panels were found in use.",
    risk:
      "Damaged panels may fail under concrete pressure, resulting in collapse or falling materials.",
    consequences: [
      "Major Injury",
      "Structural Collapse",
      "Property Damage",
      "Internal Injury",
    ],
    correctiveAction: [
      "Remove damaged panels from service immediately.",
      "Replace with approved panels.",
      "Inspect the complete formwork system before reuse.",
    ],
    preventiveAction: [
      "Inspect panels before each use.",
      "Segregate damaged materials.",
      "Maintain proper storage and handling.",
    ],
    responsible: "Site Engineer",
    priority: "High",
    standard: "OSHA 1926.703(a)",
  },
];