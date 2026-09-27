import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  FileText,
} from "lucide-react";

const questions = {
  rental: [
    {
      id: "landlord",
      label: "Landlord full name",
      type: "text",
      placeholder: "Enter landlord name",
    },
    {
      id: "tenant",
      label: "Tenant full name",
      type: "text",
      placeholder: "Enter tenant name",
    },
    {
      id: "property",
      label: "Property address",
      type: "textarea",
      placeholder: "Enter complete property address",
    },
    {
      id: "rent",
      label: "Monthly rent",
      type: "number",
      placeholder: "Enter monthly rent",
    },
    {
      id: "deposit",
      label: "Security deposit",
      type: "number",
      placeholder: "Enter security deposit",
    },
  ],

  nda: [
    {
      id: "disclosingParty",
      label: "Disclosing party",
      type: "text",
      placeholder: "Company or person's name",
    },
    {
      id: "receivingParty",
      label: "Receiving party",
      type: "text",
      placeholder: "Company or person's name",
    },
    {
      id: "purpose",
      label: "Purpose of disclosure",
      type: "textarea",
      placeholder: "Explain why information is being shared",
    },
    {
      id: "duration",
      label: "Agreement duration",
      type: "text",
      placeholder: "Example: 2 years",
    },
  ],

  employment: [
    {
      id: "employee",
      label: "Employee name",
      type: "text",
      placeholder: "Enter employee name",
    },
    {
      id: "company",
      label: "Company name",
      type: "text",
      placeholder: "Enter company name",
    },
    {
      id: "position",
      label: "Job position",
      type: "text",
      placeholder: "Enter job position",
    },
    {
      id: "salary",
      label: "Salary",
      type: "number",
      placeholder: "Enter salary",
    },
  ],

  service: [
    {
      id: "provider",
      label: "Service provider",
      type: "text",
      placeholder: "Enter provider name",
    },
    {
      id: "client",
      label: "Client name",
      type: "text",
      placeholder: "Enter client name",
    },
    {
      id: "service",
      label: "Service description",
      type: "textarea",
      placeholder: "Describe the service",
    },
    {
      id: "fee",
      label: "Service fee",
      type: "number",
      placeholder: "Enter service fee",
    },
  ],

  general: [
    {
      id: "partyOne",
      label: "First party",
      type: "text",
      placeholder: "Enter first party",
    },
    {
      id: "partyTwo",
      label: "Second party",
      type: "text",
      placeholder: "Enter second party",
    },
    {
      id: "purpose",
      label: "Purpose of agreement",
      type: "textarea",
      placeholder: "Explain the purpose",
    },
  ],

  "legal-notice": [
    {
      id: "sender",
      label: "Sender name",
      type: "text",
      placeholder: "Enter sender name",
    },
    {
      id: "receiver",
      label: "Receiver name",
      type: "text",
      placeholder: "Enter receiver name",
    },
    {
      id: "issue",
      label: "Issue / reason",
      type: "textarea",
      placeholder: "Describe the issue",
    },
  ],
};

function Questionnaire() {

  const { type } = useParams();
  const navigate = useNavigate();

  const currentQuestions = questions[type] || [];

  const [answers, setAnswers] = useState({});

  const [currentStep, setCurrentStep] = useState(0);

  const currentQuestion = currentQuestions[currentStep];

  const handleChange = (event) => {

    setAnswers({
      ...answers,
      [currentQuestion.id]: event.target.value,
    });

  };


  const nextStep = () => {

    if (!answers[currentQuestion.id]?.trim()) {
      alert("Please enter an answer.");
      return;
    }

    if (currentStep < currentQuestions.length - 1) {

      setCurrentStep(currentStep + 1);

    } else {

      localStorage.setItem(
        "legalEaseDraft",
        JSON.stringify({
          type,
          answers,
        })
      );

      navigate("/preview");

    }

  };


  const previousStep = () => {

    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }

  };


  if (!currentQuestion) {
    return (
      <div className="empty-page">
        <h2>Document type not found</h2>
      </div>
    );
  }


  const progress =
    ((currentStep + 1) / currentQuestions.length) * 100;


  return (

    <div className="questionnaire-page">

      <div className="questionnaire-card">

        <div className="questionnaire-header">

          <div className="small-icon">
            <FileText size={20} />
          </div>

          <div>

            <span>
              Step {currentStep + 1} of {currentQuestions.length}
            </span>

            <h2>Create your document</h2>

          </div>

        </div>


        <div className="progress-container">

          <div
            className="progress-bar"
            style={{ width: `${progress}%` }}
          ></div>

        </div>


        <div className="question-content">

          <label>
            {currentQuestion.label}
          </label>


          {currentQuestion.type === "textarea" ? (

            <textarea
              value={answers[currentQuestion.id] || ""}
              onChange={handleChange}
              placeholder={currentQuestion.placeholder}
              rows="6"
            />

          ) : (

            <input
              type={currentQuestion.type}
              value={answers[currentQuestion.id] || ""}
              onChange={handleChange}
              placeholder={currentQuestion.placeholder}
            />

          )}

        </div>


        <div className="question-actions">

          <button
            className="btn btn-secondary"
            onClick={previousStep}
            disabled={currentStep === 0}
          >
            <ArrowLeft size={17} />
            Back
          </button>


          <button
            className="btn btn-primary"
            onClick={nextStep}
          >

            {currentStep === currentQuestions.length - 1
              ? "Generate Preview"
              : "Continue"}

            <ArrowRight size={17} />

          </button>

        </div>

      </div>

    </div>

  );
}

export default Questionnaire;
