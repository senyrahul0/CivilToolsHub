export type SafetyHazard = {
  areaSlug: string;
  hazardSlug: string;
  title: string;
  areaTitle: string;
  summary: string;
  whatCanHappen: string[];
  possibleConsequences: string[];
  inspectionPoints: string[];
  requiredControls: string[];
  observationExample: string;
  recommendedAction: string;
  relatedTopics: string[];
};

export const highRiseHazards: SafetyHazard[] = [
  {
    areaSlug: "scaffolding",
    hazardSlug: "incomplete-working-platform",
    title: "Incomplete Working Platform",
    areaTitle: "Scaffolding",
    summary:
      "A scaffold working level where the platform is incomplete, contains unsafe openings or gaps, or does not provide a properly arranged working surface for the intended activity.",
    whatCanHappen: [
      "A worker may step into an open section or unsafe gap.",
      "A worker may lose balance while moving or performing the task.",
      "Tools or construction materials may fall through an open platform area.",
      "Workers may use scaffold tubes, braces, or other unsafe surfaces as temporary footing.",
    ],
    possibleConsequences: [
      "Fall from height",
      "Serious bodily injury",
      "Fatal injury",
      "Falling object incident",
      "Injury to persons working below",
    ],
    inspectionPoints: [
      "Check whether the working level provides a complete platform for the intended work.",
      "Check for open sections and unsafe gaps in the working surface.",
      "Check the condition of scaffold boards, planks, or system platforms.",
      "Check whether platform components are properly supported.",
      "Check for loose, displaced, or visibly damaged platform components.",
      "Check whether the platform arrangement is suitable for safe access and movement.",
      "Check for falling-object exposure below open platform areas.",
    ],
    requiredControls: [
      "Provide a properly arranged working platform suitable for the intended activity.",
      "Close or otherwise protect unsafe open sections in the working level.",
      "Use scaffold platform components suitable for the scaffold system and intended loading.",
      "Ensure platform components are properly supported and secured against unintended movement where required.",
      "Remove damaged or unsuitable platform components from service.",
      "Restrict use of the affected scaffold level until the unsafe platform condition is corrected and the scaffold is accepted under the applicable site inspection process.",
      "Maintain falling-object controls where persons may be exposed below.",
    ],
    observationExample:
      "Incomplete working platform observed on the scaffold, creating a fall-from-height and falling-object risk during work and access.",
    recommendedAction:
      "Complete and properly arrange the scaffold working platform, correct unsafe gaps or open sections, and ensure the affected scaffold level is inspected and accepted before use.",
    relatedTopics: [
      "Missing Guardrail",
      "Missing Midrail",
      "Missing Toe Board",
      "Unsafe Access",
      "Damaged Scaffold Component",
    ],
  },
  {
    areaSlug: "scaffolding",
    hazardSlug: "missing-guardrail",
    title: "Missing Guardrail",
    areaTitle: "Scaffolding",
    summary:
      "An open scaffold side or end where required edge protection is absent or incomplete, exposing workers to a fall hazard.",
    whatCanHappen: [
      "A worker may lose balance and fall from an open scaffold edge.",
      "A worker may move backward into an unprotected side while performing a task.",
      "Material movement may increase exposure to the open edge.",
      "Workers may rely only on personal fall protection where collective edge protection is expected by the applicable scaffold arrangement or procedure.",
    ],
    possibleConsequences: [
      "Fall from height",
      "Major injury",
      "Fatal injury",
      "Dropped tools or materials",
      "Injury to persons below",
    ],
    inspectionPoints: [
      "Check open sides and ends of each accessible scaffold working level.",
      "Check whether required top edge protection is present.",
      "Check continuity of edge protection around the working platform.",
      "Check for removed, loose, bent, or displaced guardrail components.",
      "Check access points and platform transitions for open-edge exposure.",
      "Check whether scaffold modification has created a new unprotected edge.",
    ],
    requiredControls: [
      "Provide the required scaffold edge protection in accordance with the applicable scaffold system, approved arrangement, and project requirements.",
      "Correct missing or incomplete guardrail protection before allowing exposure to the open edge.",
      "Use compatible scaffold components and approved connection arrangements.",
      "Prevent unauthorized removal or modification of edge-protection components.",
      "Restrict access to the affected level until the unsafe condition is corrected and inspected.",
    ],
    observationExample:
      "Guardrail protection was missing at the open side of the scaffold working platform, exposing workers to a fall-from-height hazard.",
    recommendedAction:
      "Provide complete and secure edge protection at the affected scaffold side and inspect the scaffold before permitting work.",
    relatedTopics: [
      "Missing Midrail",
      "Missing Toe Board",
      "Incomplete Working Platform",
      "Unsafe Scaffold Tagging",
    ],
  },
  {
    areaSlug: "scaffolding",
    hazardSlug: "missing-midrail",
    title: "Missing Midrail",
    areaTitle: "Scaffolding",
    summary:
      "A scaffold edge-protection arrangement where the intermediate rail or equivalent protection is absent or incomplete.",
    whatCanHappen: [
      "A worker may pass or fall through the open space in the edge-protection system.",
      "A crouching or kneeling worker may be exposed below the top guardrail.",
      "Loss of balance may result in contact with an inadequately protected scaffold edge.",
    ],
    possibleConsequences: [
      "Fall from height",
      "Serious injury",
      "Fatal injury",
      "Dropped object incident",
    ],
    inspectionPoints: [
      "Check the space between the working platform and top edge protection.",
      "Check whether intermediate edge protection is provided where required.",
      "Check for removed or displaced midrail components.",
      "Check the continuity of intermediate protection along open sides and ends.",
      "Check access areas and modified scaffold sections.",
    ],
    requiredControls: [
      "Provide required intermediate edge protection in accordance with the scaffold system and applicable project requirements.",
      "Use compatible components and secure them using the approved scaffold arrangement.",
      "Correct incomplete edge protection before workers use the affected scaffold level.",
      "Control unauthorized scaffold modification.",
    ],
    observationExample:
      "Midrail protection was missing from the scaffold edge, leaving an excessive open space in the edge-protection system.",
    recommendedAction:
      "Install the required intermediate edge protection and ensure the scaffold is inspected before continued use.",
    relatedTopics: [
      "Missing Guardrail",
      "Missing Toe Board",
      "Incomplete Working Platform",
    ],
  },
  {
    areaSlug: "scaffolding",
    hazardSlug: "missing-toe-board",
    title: "Missing Toe Board",
    areaTitle: "Scaffolding",
    summary:
      "A scaffold working platform where required toe-board or equivalent falling-object protection is missing or incomplete.",
    whatCanHappen: [
      "Tools or materials may be kicked or pushed from the platform edge.",
      "Loose construction material may fall onto persons below.",
      "Small items may pass beneath the scaffold edge-protection system.",
    ],
    possibleConsequences: [
      "Falling object incident",
      "Head injury",
      "Serious injury to persons below",
      "Damage to equipment or property",
    ],
    inspectionPoints: [
      "Check platform edges where tools or materials are used or stored.",
      "Check whether required toe-board protection is present.",
      "Check for missing sections and open gaps.",
      "Check whether toe-board components are loose or displaced.",
      "Check exposure of workers or public areas below the scaffold.",
    ],
    requiredControls: [
      "Provide required toe-board or equivalent falling-object protection based on the scaffold arrangement and exposure.",
      "Secure toe-board components using the approved scaffold system or arrangement.",
      "Prevent loose materials from accumulating at scaffold edges.",
      "Use additional falling-object controls where the risk cannot be adequately controlled by toe-board protection alone.",
      "Restrict access below where an uncontrolled falling-object hazard exists.",
    ],
    observationExample:
      "Toe-board protection was missing at the scaffold working platform, creating a falling-object risk to persons below.",
    recommendedAction:
      "Provide suitable falling-object protection at the scaffold edge and remove or secure loose materials before work continues.",
    relatedTopics: [
      "Missing Guardrail",
      "Missing Midrail",
      "Falling Material",
      "Incomplete Working Platform",
    ],
  },
  {
    areaSlug: "scaffolding",
    hazardSlug: "unsafe-access",
    title: "Unsafe Access",
    areaTitle: "Scaffolding",
    summary:
      "A scaffold access arrangement that requires unsafe climbing, stepping across gaps, or use of scaffold components not intended as a safe means of access.",
    whatCanHappen: [
      "A worker may slip or lose balance while entering or leaving the scaffold.",
      "A worker may climb braces or structural members.",
      "A worker may jump or step across an unsafe gap.",
      "Tools carried during access may reduce hand support and balance.",
    ],
    possibleConsequences: [
      "Fall from height",
      "Sprain or fracture",
      "Serious injury",
      "Fatal injury",
    ],
    inspectionPoints: [
      "Check how workers enter and leave each scaffold working level.",
      "Check for unsafe climbing on braces or scaffold frames.",
      "Check ladder, stair, or system access condition where provided.",
      "Check access openings and landing areas.",
      "Check for gaps between the access point and working platform.",
      "Check whether access is obstructed by stored material.",
    ],
    requiredControls: [
      "Provide a safe and suitable means of scaffold access for the work level.",
      "Prevent climbing on scaffold braces or other components not intended for access.",
      "Keep access and landing areas clear.",
      "Correct unsafe gaps or transitions at scaffold access points.",
      "Inspect access arrangements as part of the scaffold inspection process.",
    ],
    observationExample:
      "Safe access to the scaffold working platform was not provided, and workers were exposed to unsafe climbing and fall risk.",
    recommendedAction:
      "Provide suitable scaffold access and keep the access route clear before allowing workers to use the affected level.",
    relatedTopics: [
      "Incomplete Working Platform",
      "Missing Guardrail",
      "Damaged Scaffold Component",
    ],
  },
  {
    areaSlug: "scaffolding",
    hazardSlug: "missing-base-plate",
    title: "Missing Base Plate",
    areaTitle: "Scaffolding",
    summary:
      "A scaffold standard or support point where the intended base component is missing or the load-transfer arrangement is visibly unsuitable.",
    whatCanHappen: [
      "The scaffold standard may not transfer load as intended.",
      "A support point may settle, penetrate, or become unstable.",
      "The scaffold may become uneven or distorted.",
      "Instability may increase during loading or environmental exposure.",
    ],
    possibleConsequences: [
      "Scaffold instability",
      "Partial scaffold failure",
      "Scaffold collapse",
      "Fall from height",
      "Crush injury",
      "Fatal injury",
    ],
    inspectionPoints: [
      "Check each visible scaffold support point.",
      "Check whether intended base components are installed.",
      "Check base component condition and alignment.",
      "Check for direct bearing arrangements that are visibly unsuitable.",
      "Check for settlement, tilting, or movement at support points.",
      "Check the ground or supporting surface condition.",
    ],
    requiredControls: [
      "Provide the required scaffold base arrangement in accordance with the scaffold system, approved design, and supporting-surface requirements.",
      "Correct missing or unsuitable base components.",
      "Assess ground or supporting-surface suitability before scaffold use.",
      "Correct visible settlement, tilting, or instability.",
      "Have affected scaffold sections inspected before use after corrective work.",
    ],
    observationExample:
      "A scaffold support point was observed without the intended base plate arrangement, creating a potential stability concern.",
    recommendedAction:
      "Provide the correct base support arrangement, verify the supporting surface, and inspect the affected scaffold section before use.",
    relatedTopics: [
      "Missing Sole Board",
      "Improper Bracing",
      "Missing Scaffold Tie",
      "Scaffold Overloading",
    ],
  },
  {
    areaSlug: "scaffolding",
    hazardSlug: "missing-sole-board",
    title: "Missing Sole Board",
    areaTitle: "Scaffolding",
    summary:
      "A scaffold support location where a required sole board, mud sill, or other specified load-distribution arrangement is absent or unsuitable for the supporting surface.",
    whatCanHappen: [
      "Scaffold loads may be poorly distributed to the supporting surface.",
      "A support point may settle into soft or unsuitable ground.",
      "Uneven settlement may distort the scaffold.",
      "Scaffold stability may deteriorate.",
    ],
    possibleConsequences: [
      "Uneven scaffold settlement",
      "Scaffold instability",
      "Partial failure",
      "Scaffold collapse",
      "Serious or fatal injury",
    ],
    inspectionPoints: [
      "Check the supporting surface beneath scaffold standards.",
      "Check whether the specified load-distribution arrangement is provided.",
      "Check sole-board or support condition where used.",
      "Check for cracked, displaced, or visibly unsuitable support material.",
      "Check for soft ground, water accumulation, or erosion.",
      "Check for uneven settlement.",
    ],
    requiredControls: [
      "Use the scaffold foundation and load-distribution arrangement required by the approved scaffold design, system instructions, and ground conditions.",
      "Correct missing or unsuitable support arrangements.",
      "Control water, erosion, or other conditions affecting scaffold foundations.",
      "Reassess affected scaffold sections where settlement is observed.",
      "Inspect the scaffold after foundation corrective work and before use.",
    ],
    observationExample:
      "The scaffold support arrangement was incomplete at the base, with the required load-distribution support not provided for the existing surface condition.",
    recommendedAction:
      "Provide the specified scaffold foundation support arrangement and verify scaffold stability before allowing use.",
    relatedTopics: [
      "Missing Base Plate",
      "Improper Bracing",
      "Missing Scaffold Tie",
    ],
  },
  {
    areaSlug: "scaffolding",
    hazardSlug: "improper-bracing",
    title: "Improper Bracing",
    areaTitle: "Scaffolding",
    summary:
      "A scaffold where required bracing is missing, incomplete, loose, displaced, or arranged inconsistently with the approved scaffold configuration.",
    whatCanHappen: [
      "The scaffold may sway or deform under load.",
      "The scaffold may lose intended lateral stability.",
      "Connections and standards may be subjected to unintended forces.",
      "Instability may increase during work, loading, or environmental exposure.",
    ],
    possibleConsequences: [
      "Scaffold instability",
      "Partial structural failure",
      "Scaffold collapse",
      "Fall from height",
      "Crush injury",
      "Fatal injury",
    ],
    inspectionPoints: [
      "Check the scaffold for missing bracing components.",
      "Check diagonal and longitudinal bracing arrangement where applicable.",
      "Check for loose, displaced, or disconnected braces.",
      "Check scaffold alignment and visible deformation.",
      "Check modified scaffold sections.",
      "Compare the arrangement with the applicable scaffold design or system requirements.",
    ],
    requiredControls: [
      "Provide bracing in accordance with the approved scaffold configuration, design, and system requirements.",
      "Correct loose, missing, or displaced bracing components.",
      "Do not remove structural scaffold components without authorization and assessment.",
      "Restrict use where scaffold stability is uncertain.",
      "Have the scaffold inspected after structural modification or corrective work.",
    ],
    observationExample:
      "Scaffold bracing was incomplete, creating a potential lateral stability and scaffold failure risk.",
    recommendedAction:
      "Restore the required bracing arrangement and have the scaffold inspected before continued use.",
    relatedTopics: [
      "Missing Scaffold Tie",
      "Missing Base Plate",
      "Missing Sole Board",
      "Scaffold Overloading",
    ],
  },
  {
    areaSlug: "scaffolding",
    hazardSlug: "missing-scaffold-tie",
    title: "Missing Scaffold Tie",
    areaTitle: "Scaffolding",
    summary:
      "A scaffold tie, anchor, or restraint point required by the scaffold design or arrangement is missing, removed, ineffective, or visibly unsuitable.",
    whatCanHappen: [
      "The scaffold may move away from or toward the supporting structure.",
      "Lateral instability may increase.",
      "Wind and work loads may produce unintended scaffold movement.",
      "Progressive instability may develop if multiple restraint points are affected.",
    ],
    possibleConsequences: [
      "Scaffold instability",
      "Scaffold overturning or collapse",
      "Fall from height",
      "Crush injury",
      "Fatal injury",
    ],
    inspectionPoints: [
      "Check visible scaffold tie and restraint locations.",
      "Check for removed or disconnected ties.",
      "Check tie connections for visible looseness or damage.",
      "Check whether scaffold modification has affected restraint points.",
      "Check the scaffold against the approved tie pattern or design information.",
      "Check for unusual scaffold movement or separation from the structure.",
    ],
    requiredControls: [
      "Provide scaffold ties, anchors, and restraints in accordance with the approved scaffold design and applicable system requirements.",
      "Do not remove required ties without authorized assessment and an approved alternative arrangement.",
      "Correct missing, loose, or damaged restraint points.",
      "Restrict scaffold use where stability may be affected.",
      "Inspect the scaffold after tie or restraint corrective work.",
    ],
    observationExample:
      "A required scaffold tie or restraint point was missing, creating a potential scaffold stability hazard.",
    recommendedAction:
      "Restore the approved scaffold tie or restraint arrangement and inspect the scaffold before continued use.",
    relatedTopics: [
      "Improper Bracing",
      "Scaffold Overloading",
      "Missing Base Plate",
      "Damaged Scaffold Component",
    ],
  },
  {
    areaSlug: "scaffolding",
    hazardSlug: "damaged-scaffold-component",
    title: "Damaged Scaffold Component",
    areaTitle: "Scaffolding",
    summary:
      "A scaffold component showing visible damage, deformation, cracking, severe corrosion, or another condition that may affect its intended performance.",
    whatCanHappen: [
      "The damaged component may fail under load.",
      "The scaffold may lose local support or stability.",
      "A damaged platform component may move or break.",
      "Other scaffold components may be subjected to unintended loading.",
    ],
    possibleConsequences: [
      "Component failure",
      "Partial scaffold failure",
      "Scaffold collapse",
      "Fall from height",
      "Crush injury",
      "Serious or fatal injury",
    ],
    inspectionPoints: [
      "Check scaffold tubes, frames, standards, ledgers, transoms, braces, and platform components for visible damage.",
      "Check for bending, cracking, severe corrosion, or deformation.",
      "Check connection points and locking components.",
      "Check for makeshift repairs or unauthorized modification.",
      "Check damaged areas after impact or material-handling incidents.",
    ],
    requiredControls: [
      "Remove damaged or unsuitable scaffold components from service.",
      "Use components compatible with the scaffold system and intended arrangement.",
      "Do not use makeshift repairs unless specifically assessed and approved under the applicable scaffold procedure.",
      "Inspect affected scaffold sections after component replacement.",
      "Segregate defective components to prevent unintended reuse.",
    ],
    observationExample:
      "A visibly damaged scaffold component was observed in the scaffold arrangement, creating a potential component failure risk.",
    recommendedAction:
      "Remove the defective component from service, replace it with a suitable component, and inspect the affected scaffold section before use.",
    relatedTopics: [
      "Improper Bracing",
      "Missing Scaffold Tie",
      "Incomplete Working Platform",
      "Scaffold Overloading",
    ],
  },
  {
    areaSlug: "scaffolding",
    hazardSlug: "scaffold-overloading",
    title: "Scaffold Overloading",
    areaTitle: "Scaffolding",
    summary:
      "A condition where people, materials, equipment, or stored loads may exceed the scaffold's intended or approved loading arrangement.",
    whatCanHappen: [
      "Platform components may deflect or fail.",
      "Scaffold standards and connections may be overloaded.",
      "Local failure may progress to a larger scaffold failure.",
      "Excess stored material may obstruct safe movement and access.",
    ],
    possibleConsequences: [
      "Platform failure",
      "Scaffold instability",
      "Partial or complete scaffold collapse",
      "Fall from height",
      "Crush injury",
      "Fatal injury",
    ],
    inspectionPoints: [
      "Check the quantity and distribution of material stored on scaffold platforms.",
      "Check for concentrated loads.",
      "Check for heavy equipment or materials not considered in the scaffold arrangement.",
      "Check platform deflection or visible distress.",
      "Check access routes for material congestion.",
      "Verify applicable scaffold load information where required.",
    ],
    requiredControls: [
      "Keep scaffold loading within the approved or intended load capacity.",
      "Control material storage and load distribution on working platforms.",
      "Remove unnecessary accumulated materials.",
      "Do not place heavy or concentrated loads on a scaffold without confirming suitability.",
      "Use scaffold load information, design requirements, and site controls applicable to the scaffold.",
      "Restrict use and obtain competent assessment where overloading or structural distress is suspected.",
    ],
    observationExample:
      "Excessive material was stored on the scaffold working platform, creating a potential scaffold overloading and access hazard.",
    recommendedAction:
      "Remove excess material, restore safe access, and verify the scaffold loading arrangement before continued use.",
    relatedTopics: [
      "Incomplete Working Platform",
      "Improper Bracing",
      "Missing Scaffold Tie",
      "Damaged Scaffold Component",
    ],
  },
  {
    areaSlug: "scaffolding",
    hazardSlug: "unsafe-scaffold-tagging",
    title: "Unsafe Scaffold Tagging",
    areaTitle: "Scaffolding",
    summary:
      "A scaffold status-control condition where the inspection or tagging arrangement is missing, unclear, outdated, inconsistent with site procedure, or may incorrectly indicate that the scaffold is ready for use.",
    whatCanHappen: [
      "Workers may use a scaffold that has not completed the required site inspection process.",
      "An incomplete or modified scaffold may be mistaken for an accepted scaffold.",
      "Inspection status may not be clearly communicated.",
      "Unsafe scaffold conditions may remain in use.",
    ],
    possibleConsequences: [
      "Use of an unsafe scaffold",
      "Fall from height",
      "Scaffold failure exposure",
      "Repeated unsafe conditions",
      "Serious or fatal injury",
    ],
    inspectionPoints: [
      "Check whether scaffold status is communicated according to the project scaffold procedure.",
      "Check whether inspection identification is present where required.",
      "Check whether displayed status information is legible and current.",
      "Check modified scaffolds for reinspection requirements.",
      "Check whether workers are using scaffolds with unclear or restricted status.",
      "Check consistency between physical scaffold condition and displayed status.",
    ],
    requiredControls: [
      "Follow the project's scaffold inspection and status-control procedure.",
      "Clearly identify scaffolds that are incomplete, restricted, or not accepted for use.",
      "Prevent workers from using scaffolds that have not completed the required inspection process.",
      "Reinspect scaffolds after modifications where required by the applicable procedure.",
      "Remove or correct misleading and outdated status information.",
    ],
    observationExample:
      "The scaffold status or inspection identification was unclear, creating a risk that workers could use the scaffold without confirming its current inspection status.",
    recommendedAction:
      "Verify the scaffold condition through the applicable site inspection process and clearly communicate its current use status before access is permitted.",
    relatedTopics: [
      "Incomplete Working Platform",
      "Missing Guardrail",
      "Damaged Scaffold Component",
      "Improper Bracing",
    ],
  },
];

export function getHighRiseHazard(
  areaSlug: string,
  hazardSlug: string,
) {
  return highRiseHazards.find(
    (hazard) =>
      hazard.areaSlug === areaSlug &&
      hazard.hazardSlug === hazardSlug,
  );
}

export function getHighRiseHazardsByArea(areaSlug: string) {
  return highRiseHazards.filter(
    (hazard) => hazard.areaSlug === areaSlug,
  );
}