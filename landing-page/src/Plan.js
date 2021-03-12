import PlanCard from "./PlanCard";
import "./Plans.scss";


function Plans() {
    return (
        <Section>
            <PlanCard
                heading="Group" 
                 summary ="Basic Sales &amp; marketing for up to 5 users"
                 price ="$25"
                 link="/subscribe-group"  
                 getfrom
                 features={[
                    "Account & contact management",
                    "Opportunity tracking",
                    "Lead scoring, routing & assignment",
                    "Task & event tracking",
                    "Customizable reports & standard dashboards",
                    "Mobile access, customization & administration",
                    "Chatter-company social network",
                    "Outlook Side Panel & sync",
                    "Case management"
                    
                    // "Campaigns",
                    // "Customizable dashboards",
                    // "Collaborative forecasting",
                    // "Products, quotes & orders",
                    // "Mass email",
                    // "Role permissions"
                    
                    // "Workflow & approval automation",
                    // "Report history tracking",
                    // "Profiles and page layouts",
                    // "Custom app development",
                    // "Integration via web service API",
                    // "Salesforce Identity",
                    // "Salesforce Private AppExchange"
                    
                    // "Unlimited customizations",
                    // "Unlimited custom apps",
                    // "Multiple sandboxes",
                    // "Additional data storage",
                    // "24x7 toll-free support",
                    // "Access to 100+ admin services",
                    // "Unlimited online training"
                 ]}/>
        </Section>
    )
}

export default Plans;