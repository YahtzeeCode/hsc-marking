// HSC Marking Practice — Question Bank
// Each question: { id, marks, topic, source, stimulus, question, criteria[], keyPoints, sampleAnswer }
// criteria descriptors are ordered highest mark first.

const QUESTIONS = {
  "business-studies": [

    // ============ 1 MARK ============
    {
      id: "bs-1-1",
      "criteriaSource": "official",
      marks: 1,
      topic: "Operations",
      source: "CSSA 2025 Trial HSC",
      stimulus: null,
      question: "Identify ONE government policy that affects operations management.",
      criteria: [
        { marks: 1, descriptor: "Identifies one relevant government policy that affects operations management." }
      ],
      keyPoints: "Environmental protection legislation, industrial relations/workplace laws, trade agreements and tariffs, industry protection, consumer/product safety regulations.",
      "sampleAnswer": "One government policy that affects operations management is environmental protection legislation, which sets standards for waste disposal and emissions during production."
    },
    {
      id: "bs-1-2",
      "criteriaSource": "derived",
      marks: 1,
      topic: "Operations",
      source: "Original — NESA-style",
      stimulus: null,
      question: "Identify ONE performance objective of operations management.",
      criteria: [
        { marks: 1, descriptor: "Identifies one performance objective of operations management." }
      ],
      keyPoints: "Quality, cost, speed, dependability, flexibility.",
      "sampleAnswer": "One performance objective of operations management is quality, which involves producing goods or services that consistently meet customer expectations."
    },
    {
      id: "bs-1-3",
      "criteriaSource": "derived",
      marks: 1,
      topic: "Finance",
      source: "Original — NESA-style",
      stimulus: null,
      question: "Identify ONE source of short-term debt finance for a business.",
      criteria: [
        { marks: 1, descriptor: "Identifies one source of short-term debt finance." }
      ],
      keyPoints: "Overdraft, commercial bills, factoring, trade credit.",
      "sampleAnswer": "One source of short-term debt finance is an overdraft, which allows a business to withdraw more than its account balance up to an agreed limit."
    },
    {
      id: "bs-1-4",
      "criteriaSource": "derived",
      marks: 1,
      topic: "Finance",
      source: "Original — NESA-style",
      stimulus: null,
      question: "Identify ONE financial objective of a business.",
      criteria: [
        { marks: 1, descriptor: "Identifies one financial objective of a business." }
      ],
      keyPoints: "Profitability, liquidity, efficiency, solvency, growth.",
      "sampleAnswer": "One financial objective of a business is profitability, which involves maximising profit relative to the funds invested in the business."
    },

    // ============ 2 MARK ============
    {
      id: "bs-2-1",
      "criteriaSource": "official",
      marks: 2,
      topic: "Marketing",
      source: "CSSA 2025 Trial HSC (Q22a)",
      stimulus: null,
      question: "Outline ONE ethical influence on marketing.",
      criteria: [
        { marks: 2, descriptor: "Sketches in general terms ONE ethical influence on marketing." },
        { marks: 1, descriptor: "Provides some relevant information." }
      ],
      keyPoints: "Good taste in advertising, truth and accuracy in advertising, sugging (selling under the guise of research) and engaging in fair competition, products that may damage health.",
      "sampleAnswer": "Ethical marketing refers to a business\u0027s moral obligation to promote products responsibly. One ethical influence is avoiding products that may damage health, such as marketing junk food to children. Businesses must weigh potential profits against the harm caused, as unethical marketing can damage reputation and erode consumer trust."
    },
    {
      id: "bs-2-2",
      "criteriaSource": "official",
      marks: 2,
      topic: "Finance",
      source: "CSSA 2025 Trial HSC (Q23a)",
      stimulus: "A business has the following assets and liabilities. They are considering reducing their reliance on debt by becoming a public company.\n\nTotal Assets: $18 million\nTotal Liabilities: $10 million",
      question: "Calculate the debt to equity ratio (total liabilities ÷ total equity) for this business. Show all working.",
      criteria: [
        { marks: 2, descriptor: "Shows correct working and answer for the debt to equity ratio." },
        { marks: 1, descriptor: "States correct working but incorrect final calculation OR provides correct answer only." }
      ],
      keyPoints: "Total Equity = Total Assets − Total Liabilities. Debt to equity = Total Liabilities ÷ Total Equity.",
      "sampleAnswer": "Total Equity = Total Assets − Total Liabilities = $18 million − $10 million = $8 million. Debt to equity ratio = Total Liabilities ÷ Total Equity = $10 million ÷ $8 million = 1.25:1 (125%)."
    },
    {
      id: "bs-2-3",
      "criteriaSource": "official",
      marks: 2,
      topic: "Operations",
      source: "CSSA 2024 Trial HSC (Q22a), adapted",
      stimulus: "A renovation business transforms a range of inputs into completed renovation projects for its residential customers.",
      question: "Identify TWO transformed resources used in the operations process of a business.",
      criteria: [
        { marks: 2, descriptor: "Recognises and names TWO transformed resources." },
        { marks: 1, descriptor: "Recognises and names ONE transformed resource." }
      ],
      keyPoints: "Materials, information, customers.",
      "sampleAnswer": "Two transformed resources used in this renovation business\u0027s operations process are materials, such as timber and tiles, and information, such as customer specifications, both of which are converted into the finished renovation project."
    },
    {
      id: "bs-2-4",
      "criteriaSource": "official",
      marks: 2,
      topic: "Finance",
      source: "CSSA 2024 Trial HSC (Q21a)",
      stimulus: "A business reports total equity of $230 000 and net profit of $60 000.",
      question: "Calculate the return on equity ratio (net profit ÷ total equity) for this business. Show all working.",
      criteria: [
        { marks: 2, descriptor: "Shows correct working and answer for the return on equity ratio." },
        { marks: 1, descriptor: "States correct working but incorrect final calculation OR provides correct answer only." }
      ],
      keyPoints: "Return on equity = net profit ÷ total equity.",
      "sampleAnswer": "Return on equity = net profit ÷ total equity = $60 000 ÷ $230 000 = 0.26:1 or 26%."
    },
    {
      id: "bs-2-5",
      "criteriaSource": "official",
      marks: 2,
      topic: "Human Resources",
      source: "CSSA 2024 Trial HSC (Q24a)",
      stimulus: null,
      question: "Explain how absenteeism rates can be used to measure the effectiveness of human resource management.",
      criteria: [
        { marks: 2, descriptor: "Sketches in general terms how absenteeism rates can measure the effectiveness of human resource management." },
        { marks: 1, descriptor: "Provides some relevant information." }
      ],
      keyPoints: "Absenteeism as an indicator of employee dissatisfaction, poor job design, workplace conflict, or a negative workplace culture.",
      "sampleAnswer": "Absenteeism refers to the rate at which employees are away from work. A high or rising absenteeism rate can indicate poor human resource management, as it often reflects employee dissatisfaction, poor job design, workplace conflict or a negative culture, meaning HR strategies are failing to keep staff engaged and motivated."
    },

    // ============ 3 MARK ============
    {
      id: "bs-3-1",
      "criteriaSource": "official",
      marks: 3,
      topic: "Operations",
      source: "CSSA 2025 Trial HSC (Q21b)",
      stimulus: null,
      question: "Why is e-commerce important in supply chain management?",
      criteria: [
        { marks: 3, descriptor: "Clearly explains why e-commerce is important in supply chain management." },
        { marks: 2, descriptor: "Sketches in general terms why e-commerce is important in supply chain management." },
        { marks: 1, descriptor: "Provides some relevant information." }
      ],
      keyPoints: "Faster ordering and tracking, real-time communication with suppliers, reduced lead times, lower inventory costs, wider market access.",
      "sampleAnswer": "E-commerce is the buying and selling of goods and services online. It is important in supply chain management because it lets businesses communicate and transact with suppliers and customers electronically, speeding up ordering, invoicing and tracking. Because information can be shared instantly, lead times are reduced and forecasting is more accurate, allowing businesses to hold lower inventory levels and cut storage costs. E-commerce also gives businesses access to a wider range of suppliers and international markets, improving efficiency and competitiveness."
    },
    {
      id: "bs-3-2",
      "criteriaSource": "derived",
      marks: 3,
      topic: "Human Resources",
      source: "CSSA 2025 Trial HSC (Q24a)",
      stimulus: null,
      question: "Describe ONE method of workplace dispute resolution.",
      criteria: [
        { marks: 3, descriptor: "Clearly describes ONE method of workplace dispute resolution." },
        { marks: 2, descriptor: "Sketches in general terms ONE method of workplace dispute resolution." },
        { marks: 1, descriptor: "Provides some relevant information." }
      ],
      keyPoints: "Grievance procedures, mediation, conciliation, arbitration (Fair Work Commission).",
      "sampleAnswer": "Mediation is a method of workplace dispute resolution in which an independent third party helps an employer and employee communicate to reach their own mutually acceptable solution, without imposing a decision. This encourages both parties to discuss the issue openly and negotiate an outcome, which helps preserve the working relationship. It is often faster and less costly than approaches such as arbitration through the Fair Work Commission."
    },
    {
      id: "bs-3-3",
      "criteriaSource": "official",
      marks: 3,
      topic: "Human Resources",
      source: "CSSA 2025 Trial HSC (Q24b)",
      stimulus: null,
      question: "Explain how rising living standards may influence human resource management.",
      criteria: [
        { marks: 3, descriptor: "Clearly provides how rising living standards may influence human resource management." },
        { marks: 2, descriptor: "Sketches in general terms how rising living standards may influence human resource management." },
        { marks: 1, descriptor: "Provides some relevant information." }
      ],
      keyPoints: "Rising income and quality of life, pressure for higher wages and better working conditions, work-life balance, competitiveness in retaining staff.",
      "sampleAnswer": "Living standards refer to the level of wealth and comfort available to people in a society. As living standards rise, employees expect higher wages and better conditions to maintain their improved quality of life, which pressures employers to offer competitive pay and support work-life balance. Businesses that fail to meet these rising expectations may struggle to attract and retain skilled staff, reducing productivity."
    },
    {
      id: "bs-3-4",
      "criteriaSource": "official",
      marks: 3,
      topic: "Finance",
      source: "CSSA 2024 Trial HSC (Q21b)",
      stimulus: null,
      question: "Explain why comparative ratio analysis is useful to a business.",
      criteria: [
        { marks: 3, descriptor: "Clearly shows why comparative ratio analysis is useful to a business." },
        { marks: 2, descriptor: "Sketches in general terms why comparative ratio analysis is useful." },
        { marks: 1, descriptor: "Makes a relevant statement about comparative ratio analysis." }
      ],
      keyPoints: "Comparing ratios across years and against industry benchmarks to identify trends, strengths and weaknesses, and inform decision-making.",
      "sampleAnswer": "Comparative ratio analysis involves comparing a business\u0027s financial ratios across different years and against industry benchmarks. This is useful because it helps identify trends, strengths and weaknesses in financial performance, such as declining profitability or worsening liquidity. By comparing results to industry standards, a business can evaluate how competitive and efficient it is, allowing it to make informed decisions to improve its financial position."
    },
    {
      id: "bs-3-5",
      "criteriaSource": "official",
      marks: 3,
      topic: "Finance",
      source: "CSSA 2024 Trial HSC (Q21c)",
      stimulus: null,
      question: "Recommend ONE strategy a business could use to improve its profitability.",
      criteria: [
        { marks: 3, descriptor: "Provides reasons in favour of ONE profitability strategy for the business." },
        { marks: 2, descriptor: "Sketches in general terms ONE profitability strategy for the business." },
        { marks: 1, descriptor: "Makes a relevant statement about profitability." }
      ],
      keyPoints: "Cost control strategies (fixed/variable costs, cost centres, expense minimisation), revenue control strategies linked to marketing objectives.",
      "sampleAnswer": "One strategy a business could use to improve profitability is cost control, which involves minimising fixed and variable expenses relative to revenue. For example, a business could reduce wage costs by outsourcing non-core functions or negotiate with suppliers to lower the cost of goods sold. This widens the gap between revenue and expenses, improving profitability without necessarily needing to increase sales."
    },

    // ============ 4 MARK ============
    {
      id: "bs-4-1",
      "criteriaSource": "derived",
      marks: 4,
      topic: "Marketing",
      source: "CSSA 2025 Trial HSC (Q22b)",
      stimulus: "GRC Candles specialises in eco-friendly candles made from sustainable materials. The company's new premium range of candles is made with rare oils. The candles are positioned as luxury and sold exclusively through GRC's retail store. The business is considering a selective channel choice.",
      question: "Recommend ONE appropriate pricing strategy that GRC Candles could use for its new premium range of candles.",
      criteria: [
        { marks: 4, descriptor: "Provides a clear and supported recommendation of an appropriate pricing strategy for the new premium range." },
        { marks: 3, descriptor: "Provides a recommendation of a pricing strategy with some support." },
        { marks: 2, descriptor: "Sketches in general terms a pricing strategy." },
        { marks: 1, descriptor: "Provides some relevant information." }
      ],
      keyPoints: "Premium/prestige pricing, price skimming, psychological pricing — linked to the luxury positioning and rare-oil ingredients.",
      "sampleAnswer": "Premium (prestige) pricing involves deliberately setting a high price to reflect a product\u0027s exclusive, high-quality image. GRC Candles should use premium pricing for its new range, as the high price reinforces the luxury positioning created by its rare oils and sustainable materials, and matches its selective distribution through its own retail store. Customers attracted to this luxury range are likely to be less price-sensitive and motivated by quality and status rather than cost, so a high price supports rather than deters purchase and protects GRC\u0027s brand image and profit margin."
    },
    {
      id: "bs-4-2",
      "criteriaSource": "derived",
      marks: 4,
      topic: "Marketing",
      source: "CSSA 2025 Trial HSC (Q22c)",
      stimulus: "GRC Candles specialises in eco-friendly candles made from sustainable materials. The company's new premium range of candles is made with rare oils. The candles are positioned as luxury and sold exclusively through GRC's retail store. The business is considering a selective channel choice.",
      question: "Discuss GRC Candle's decision to adopt a selective channel choice.",
      criteria: [
        { marks: 4, descriptor: "Clearly discusses the positive and negative implications of GRC Candle's decision to adopt a selective channel choice." },
        { marks: 3, descriptor: "Discusses the implications of a selective channel choice for GRC Candles." },
        { marks: 2, descriptor: "Sketches in general terms a selective channel choice." },
        { marks: 1, descriptor: "Provides some relevant information." }
      ],
      keyPoints: "Selective distribution: fewer outlets, greater control over brand image/customer experience, easier to maintain exclusivity and premium positioning, but limits market reach and potential sales volume compared to intensive distribution.",
      "sampleAnswer": "Selective distribution involves selling a product through a limited number of outlets. By selling its premium range exclusively through its own retail store, GRC Candles gains greater control over how the product is presented and sold, protecting the luxury, eco-friendly image that supports its premium pricing and can strengthen brand exclusivity. However, limiting sales to one outlet restricts market reach, meaning GRC may sell a lower volume and generate less revenue than if it used a more intensive distribution strategy. GRC must weigh the benefit of protecting its premium image against the opportunity cost of reduced sales."
    },
    {
      id: "bs-4-3",
      "criteriaSource": "official",
      marks: 4,
      topic: "Finance",
      source: "CSSA 2025 Trial HSC (Q23b)",
      stimulus: null,
      question: "Distinguish between TWO types of ordinary shares.",
      criteria: [
        { marks: 4, descriptor: "Notes detailed differences between two types of ordinary shares." },
        { marks: 3, descriptor: "Notes differences between two types of ordinary shares." },
        { marks: 2, descriptor: "Notes a difference between two types of ordinary shares." },
        { marks: 1, descriptor: "Provides some relevant information." }
      ],
      keyPoints: "New issues, rights issues, placements, share purchase plans.",
      "sampleAnswer": "A share purchase plan allows existing shareholders to buy additional shares directly from the company at a discount, usually up to a fixed dollar limit per shareholder, regardless of their current holding. A rights issue, by contrast, offers new shares to existing shareholders in proportion to the shares they already own. Because a rights issue is allocated proportionally, it does not dilute the ownership of shareholders who take up their entitlement, whereas a share purchase plan can dilute the proportional ownership of larger shareholders who do not participate to the same extent as smaller ones."
    },
    {
      id: "bs-4-4",
      "criteriaSource": "derived",
      marks: 4,
      topic: "Finance",
      source: "CSSA 2025 Trial HSC (Q23c), adapted",
      stimulus: null,
      question: "Explain the influence of the Australian Securities Exchange (ASX) on a business considering becoming a publicly listed company.",
      criteria: [
        { marks: 4, descriptor: "Clearly explains the influence of the ASX on the business." },
        { marks: 3, descriptor: "Explains the influence of the ASX on the business." },
        { marks: 2, descriptor: "Sketches in general terms the influence of the ASX." },
        { marks: 1, descriptor: "Provides some relevant information." }
      ],
      keyPoints: "Raising equity capital, share price determination, ongoing disclosure and reporting requirements, corporate governance, liquidity for shareholders.",
      "sampleAnswer": "The Australian Securities Exchange (ASX) is Australia\u0027s main market for buying and selling shares in public companies. Listing on the ASX would allow the business to raise equity finance from a large pool of investors, providing access to capital beyond private or debt sources. However, becoming listed also means complying with ongoing disclosure and reporting requirements under the ASX Listing Rules and Corporations Act, increasing transparency but also compliance costs. Additionally, the company\u0027s share price becomes subject to investor sentiment and market fluctuations beyond its control."
    },
    {
      id: "bs-4-5",
      "criteriaSource": "official",
      marks: 4,
      topic: "Human Resources",
      source: "CSSA 2025 Trial HSC (Q24c)",
      stimulus: null,
      question: "Justify the use of internal recruitment for a business.",
      criteria: [
        { marks: 4, descriptor: "Provides a clear and supported argument for the use of internal recruitment for a business." },
        { marks: 3, descriptor: "Provides an argument for the use of internal recruitment for a business." },
        { marks: 2, descriptor: "Sketches in general terms internal recruitment." },
        { marks: 1, descriptor: "Provides some relevant information." }
      ],
      keyPoints: "Career progression opportunities, reduced time/cost vs external recruitment, retained corporate knowledge/culture, improved morale, faster induction.",
      "sampleAnswer": "Internal recruitment involves filling job vacancies with existing employees rather than hiring externally. This is beneficial because it offers current staff opportunities for career progression, improving morale and motivation. It is also faster and cheaper than external recruitment, avoiding lengthy advertising and selection processes, and existing employees already know the business\u0027s culture and procedures, reducing induction time and cost. For these reasons, internal recruitment is an effective way to fill vacancies while retaining skilled, loyal staff."
    },
    {
      id: "bs-4-6",
      "criteriaSource": "official",
      marks: 4,
      topic: "Marketing",
      source: "CSSA 2024 Trial HSC (Q23b)",
      stimulus: "Rainbow Wetsuits is an Australian business that designs, manufactures and sells wetsuits and swimwear through its own retail stores and website.",
      question: "Explain how physical evidence can help Rainbow Wetsuits achieve its marketing objectives.",
      criteria: [
        { marks: 4, descriptor: "Clearly shows how physical evidence can help the business achieve its marketing objective." },
        { marks: 3, descriptor: "Makes evident the relationship between physical evidence and the marketing objective." },
        { marks: 2, descriptor: "Sketches in general terms physical evidence or marketing objectives." },
        { marks: 1, descriptor: "Makes a relevant statement." }
      ],
      keyPoints: "Store layout, colours, lighting, sound and presentation appealing to the target market; impact on customer attraction, sales and market share.",
      "sampleAnswer": "Physical evidence refers to the tangible elements customers experience when interacting with a business, such as store layout, colours, lighting and presentation. Because Rainbow Wetsuits sells through its own retail stores, it can use physical evidence strategically by designing layouts, colours and displays that appeal to its target market of swimwear and wetsuit customers. This creates an attractive, on-brand shopping environment that draws more customers into stores, which is likely to increase sales and, in turn, help Rainbow Wetsuits grow its market share."
    },
    {
      id: "bs-4-7",
      "criteriaSource": "official",
      marks: 4,
      topic: "Human Resources",
      source: "CSSA 2024 Trial HSC (Q24b)",
      stimulus: null,
      question: "Discuss the positive and/or negative impacts on a business of outsourcing a human resource function.",
      criteria: [
        { marks: 4, descriptor: "Identifies issues and provides points on the positive and/or negative impact on a business of outsourcing a human resource function." },
        { marks: 3, descriptor: "Provides characteristics and features of a business outsourcing a human resource function." },
        { marks: 2, descriptor: "Sketches in general terms a business outsourcing a human resource function." },
        { marks: 1, descriptor: "Provides some relevant information." }
      ],
      keyPoints: "Positives: cost reduction, efficiency, access to specialist skills, focus on core business. Negatives: cost overruns, quality/communication issues, coordination difficulty, potential conflict.",
      "sampleAnswer": "Outsourcing a human resource function, such as recruitment, means paying an external provider to perform the task instead of doing it in-house. This can benefit a business by reducing costs, providing access to specialist expertise and improving efficiency, allowing management to focus on core business activities. However, outsourcing can also cause problems such as cost overruns, reduced quality control and communication difficulties, since the business has less direct oversight of how the function is performed, which may create conflict if service standards are not met."
    },
    {
      id: "bs-4-8",
      "criteriaSource": "official",
      marks: 4,
      topic: "Human Resources",
      source: "CSSA 2024 Trial HSC (Q24c)",
      stimulus: null,
      question: "Compare the use of developmental performance management and administrative performance management.",
      criteria: [
        { marks: 4, descriptor: "Clearly provides detailed similarities and/or differences between the use of developmental performance management and administrative performance management." },
        { marks: 3, descriptor: "Provides some similarities and/or differences between the use of developmental performance management and administrative performance management." },
        { marks: 2, descriptor: "Sketches in general terms developmental performance management or administrative performance management." },
        { marks: 1, descriptor: "Provides some relevant information." }
      ],
      keyPoints: "Developmental (forward-looking, coaching/training/feedback, employee growth) vs administrative (backward-looking, appraisals/ratings/rewards, accountability).",
      "sampleAnswer": "Developmental performance management is forward-looking, using feedback, coaching and training to build employees\u0027 skills for current and future roles, which tends to increase motivation and engagement. Administrative performance management is backward-looking, using appraisals, ratings and rewards to measure past performance and hold employees accountable. While administrative approaches promote accountability, they can be demotivating as they focus on judging past results rather than developing capability. Developmental approaches generally build stronger long-term performance but require a greater ongoing time commitment from managers."
    },

    // ============ 5 MARK ============
    {
      id: "bs-5-1",
      "criteriaSource": "official",
      marks: 5,
      topic: "Operations",
      source: "CSSA 2024 Trial HSC (Q22c), adapted",
      stimulus: "GreenBuild Renovations provides renovation services to residential customers. The business has recently increased its use of environmentally sustainable practices, including using recycled and existing materials such as timber, tiles and cabinetry wherever possible, rather than sourcing new materials.",
      question: "Make a judgement about the influence of environmental sustainability on the strategic role of operations for GreenBuild Renovations.",
      criteria: [
        { marks: 5, descriptor: "Makes a clear judgement about the influence of environmental sustainability on the strategic role of operations for the business." },
        { marks: 4, descriptor: "Makes a judgement about the influence of environmental sustainability on the strategic role of operations." },
        { marks: 3, descriptor: "Provides characteristics and features of environmental sustainability and the strategic role of operations." },
        { marks: 2, descriptor: "Sketches in general terms the impact of environmental sustainability and/or the strategic role of operations." },
        { marks: 1, descriptor: "Provides some relevant information." }
      ],
      keyPoints: "Cost leadership vs differentiation as strategic roles of operations; sustainability's link to reduced input/waste costs and to service differentiation via customer/social attitudes.",
      "sampleAnswer": "Environmental sustainability refers to a business\u0027s use of production methods that minimise environmental harm. For GreenBuild Renovations, using recycled and existing materials such as timber, tiles and cabinetry instead of new materials strongly supports the strategic role of operations in two ways. First, it supports cost leadership, since recycled materials are often cheaper than new inputs and reduce disposal and landfill costs, improving price competitiveness. Second, it supports differentiation, as offering an environmentally sustainable renovation service appeals to increasingly eco-conscious customers, distinguishing GreenBuild from competitors relying solely on new materials. Overall, environmental sustainability plays a highly significant strategic role, allowing GreenBuild to simultaneously reduce costs and differentiate its service. The main limitation is that consistently sourcing suitable recycled materials of adequate quality may be more difficult than ordering new stock, so GreenBuild must manage this trade-off carefully."
    },
    {
      id: "bs-5-2",
      "criteriaSource": "derived",
      marks: 5,
      topic: "Human Resources",
      source: "Original — NESA-style",
      stimulus: null,
      question: "Assess the effectiveness of ONE method of workplace dispute resolution in maintaining positive employer–employee relationships.",
      criteria: [
        { marks: 5, descriptor: "Makes a well-supported judgement about the effectiveness of the method in maintaining positive employer-employee relationships." },
        { marks: 4, descriptor: "Makes a judgement about the effectiveness of the method." },
        { marks: 3, descriptor: "Provides characteristics and features of the method and its effect on employer-employee relationships." },
        { marks: 2, descriptor: "Sketches in general terms the method of dispute resolution." },
        { marks: 1, descriptor: "Provides some relevant information." }
      ],
      keyPoints: "Grievance procedures, mediation, conciliation, arbitration; speed, cost, preserving relationships, enforceability of outcomes.",
      "sampleAnswer": "Mediation is a dispute resolution method in which an independent third party helps the employer and employee communicate and negotiate their own agreed solution, rather than having an outcome imposed on them. This method is generally effective in maintaining positive employer-employee relationships because it is collaborative rather than adversarial - neither party \u0027loses\u0027, which helps preserve trust and goodwill. It is also faster, cheaper and more private than formal alternatives such as arbitration through the Fair Work Commission, minimising workplace disruption. However, mediation depends on both parties being willing to negotiate honestly and compromise; where there is a serious breach of trust or a large power imbalance, mediation may fail and a more formal, binding process may be required. Overall, mediation is highly effective for resolving minor, communication-based disputes while protecting relationships, but less effective for serious or deeply entrenched conflicts."
    },
    {
      id: "bs-5-3",
      "criteriaSource": "derived",
      marks: 5,
      topic: "Finance",
      source: "Original — NESA-style",
      stimulus: "A small retail business has experienced a period of declining cash flow, making it difficult to pay suppliers and staff on time, despite reporting a profit for the year.",
      question: "Assess the effectiveness of TWO financial management strategies the business could use to improve its cash flow position.",
      criteria: [
        { marks: 5, descriptor: "Makes a well-supported judgement about the effectiveness of two financial management strategies in improving the business's cash flow position." },
        { marks: 4, descriptor: "Makes a judgement about the effectiveness of two financial management strategies." },
        { marks: 3, descriptor: "Provides characteristics and features of two financial management strategies relevant to cash flow." },
        { marks: 2, descriptor: "Sketches in general terms one or two financial management strategies." },
        { marks: 1, descriptor: "Provides some relevant information." }
      ],
      keyPoints: "Cash flow management (cash flow statements, discounts for early payment), working capital management (control of receivables/payables, factoring, leasing).",
      "sampleAnswer": "Two financial management strategies this business could use are cash flow management and working capital management. Preparing a cash flow statement would let the business forecast future shortfalls and act early, while offering discounts for early payment would encourage customers to pay sooner, bringing cash in faster. This directly addresses the mismatch between reported profit and the actual cash available to pay suppliers and staff. Secondly, tightening control over working capital, such as reducing the credit period offered to customers and negotiating longer payment terms with suppliers, would free up cash in the short term. Both strategies are likely to be effective, as they target the timing gap between earning profit and receiving cash. However, offering discounts and shorter credit terms may reduce sales if customers rely on trade credit, so the business must balance improved liquidity against the risk of losing price- or credit-sensitive customers."
    },

    // ============ 6 MARK ============
    {
      id: "bs-6-1",
      "criteriaSource": "derived",
      marks: 6,
      topic: "Operations",
      source: "CSSA 2025 Trial HSC (Q21c)",
      stimulus: null,
      question: "Analyse how ONE global factor can help a business achieve its performance objectives.",
      criteria: [
        { marks: 6, descriptor: "Provides a well-developed analysis of how the global factor helps the business achieve performance objectives, integrating relevant business terminology." },
        { marks: 5, descriptor: "Provides a developed analysis of how the global factor helps achieve performance objectives." },
        { marks: 4, descriptor: "Analyses how the global factor helps achieve performance objectives." },
        { marks: 3, descriptor: "Provides characteristics and features of the global factor and performance objectives." },
        { marks: 2, descriptor: "Sketches in general terms the global factor and/or performance objectives." },
        { marks: 1, descriptor: "Provides some relevant information." }
      ],
      keyPoints: "Global sourcing, economies of scale, scanning and learning, research and development, and how each links to cost, quality, speed, dependability, or flexibility.",
      "sampleAnswer": "Global sourcing involves purchasing materials, components or labour from suppliers overseas rather than domestically. This helps a business achieve its cost performance objective, as sourcing from countries with lower production or labour costs reduces input expenses, allowing more competitive pricing or higher profit margins. Global sourcing can also support the quality objective, as it may provide access to specialised materials, technology or skills not available locally, improving the finished product. However, relying on distant, international suppliers can undermine the speed and dependability objectives, as longer supply chains increase the risk of delays, currency fluctuations and disruptions such as customs issues or transport problems. This means a business must carefully manage supplier relationships and logistics when sourcing globally. Overall, global sourcing can significantly strengthen a business\u0027s cost and quality performance, but only if the resulting risks to reliability and delivery times are actively managed."
    },
    {
      id: "bs-6-2",
      "criteriaSource": "official",
      marks: 6,
      topic: "Marketing",
      source: "CSSA 2024 Trial HSC (Q23c)",
      stimulus: "Rainbow Wetsuits is an Australian business that designs, manufactures and sells wetsuits and swimwear through its own retail stores and website. At the start of each season, Rainbow Wetsuits releases its new range at a high price and gradually reduces the price as the season progresses.",
      question: "Analyse the relationship between Rainbow Wetsuits' pricing strategy and its marketing objectives.",
      criteria: [
        { marks: 6, descriptor: "Clearly draws out and relates implications of the relationship between the business's pricing strategy and its marketing objective." },
        { marks: 5, descriptor: "Draws out and relates implications of the relationship between the pricing strategy and marketing objective." },
        { marks: 4, descriptor: "Makes evident the relationship between the pricing strategy and marketing objective." },
        { marks: 3, descriptor: "Provides characteristics and features of a pricing strategy and a marketing objective." },
        { marks: 2, descriptor: "Sketches in general terms a pricing strategy or a marketing objective." },
        { marks: 1, descriptor: "Recognises and names a pricing strategy or a marketing objective." }
      ],
      keyPoints: "Price skimming; implications for profit, market share, and sales volume across the season.",
      "sampleAnswer": "Rainbow Wetsuits uses price skimming, releasing its new range at a high price at the start of each season and gradually lowering it as the season progresses. This directly supports the marketing objective of profit, as early adopters who want the newest styles are typically less price-sensitive and willing to pay a premium, maximising revenue per unit before competitors can react. However, this pricing approach has implications for Rainbow Wetsuits\u0027 market share objective: charging high prices initially may deter more price-sensitive customers early in the season, potentially pushing them towards competitors, so Rainbow Wetsuits only recaptures this segment once prices fall later on. This creates a trade-off between the profit and market share objectives - prioritising profit through skimming could limit market share growth, whereas pricing lower from the outset would likely increase market share and sales volume but reduce profit margins. Rainbow Wetsuits must judge whether the higher early-season profits outweigh the potential loss of price-sensitive customers to competitors."
    },
    {
      id: "bs-6-3",
      "criteriaSource": "derived",
      marks: 6,
      topic: "Marketing",
      source: "Original — NESA-style",
      stimulus: "A mid-sized skincare brand wants to increase brand awareness and sales among customers aged 18–30. It is considering increasing its investment in social media influencer marketing.",
      question: "Evaluate the effectiveness of using influencer marketing to achieve the skincare brand's marketing objectives.",
      criteria: [
        { marks: 6, descriptor: "Makes a well-supported, balanced judgement about the effectiveness of influencer marketing in achieving the business's marketing objectives." },
        { marks: 5, descriptor: "Makes a supported judgement about the effectiveness of influencer marketing." },
        { marks: 4, descriptor: "Provides a judgement about the effectiveness of influencer marketing with some support." },
        { marks: 3, descriptor: "Provides characteristics and features of influencer marketing and marketing objectives." },
        { marks: 2, descriptor: "Sketches in general terms influencer marketing and/or marketing objectives." },
        { marks: 1, descriptor: "Provides some relevant information." }
      ],
      keyPoints: "Reach and trust among the target demographic, cost, measurability, brand-fit/reputation risk; weighed against the stated objectives of awareness and sales.",
      "sampleAnswer": "Influencer marketing involves paying social media personalities to promote a business\u0027s products to their followers. This is likely to be highly effective for this skincare brand in reaching its 18–30 target market, who spend significant time on social media and often trust influencer recommendations more than traditional advertising, helping build brand awareness quickly and supporting the objective of increasing sales among this demographic. However, its effectiveness depends heavily on selecting influencers whose audience and values genuinely align with the brand; a poor match or an influencer scandal could damage the brand\u0027s reputation rather than build it. Influencer marketing can also be costly when using high-profile influencers, and its impact on sales can be harder to measure precisely than more traceable channels like direct online advertising. On balance, influencer marketing is an effective strategy for this brand\u0027s awareness and sales objectives provided it partners with credible, well-matched influencers and tracks results carefully alongside other measurable promotion methods."
    }
,
  {
    "id": "bs-3-intermediate-market",
    "criteriaSource": "official",
    "marks": 3,
    "topic": "Marketing",
    "source": "CSSA 2022 Trial HSC (Q21a)",
    "stimulus": null,
    "question": "Define the intermediate market and provide an example.",
    "criteria": [
      { "marks": 3, "descriptor": "States the meaning of the intermediate market and provides an example" },
      { "marks": 2, "descriptor": "States the meaning of the intermediate market OR provides a basic sketch of the intermediate market and provides an example" },
      { "marks": 1, "descriptor": "Provides a basic sketch of the intermediate market OR provides an example" }
    ],
    "keyPoints": "wholesalers and retailers, purchase finished products to resell for profit, not for personal consumption, example e.g. a wholesaler supplying independent supermarkets",
    "sampleAnswer": "The intermediate market consists of wholesalers and retailers who purchase finished products in order to resell them for a profit, rather than to consume them personally. This distinguishes it from the final consumer market, which buys goods for personal use. For example, a wholesaler that buys grocery products in bulk from manufacturers and on-sells them to independent supermarkets is operating within the intermediate market."
  },
  {
    "id": "bs-3-implied-conditions",
    "criteriaSource": "official",
    "marks": 3,
    "topic": "Marketing",
    "source": "CSSA 2022 Trial HSC (Q21b)",
    "stimulus": null,
    "question": "Clarify why a business needs to ensure implied conditions are met.",
    "criteria": [
      { "marks": 3, "descriptor": "Makes clear or plain why a business needs to ensure implied conditions are met" },
      { "marks": 2, "descriptor": "Sketches in general terms implied conditions" },
      { "marks": 1, "descriptor": "Makes reference to implied conditions" }
    ],
    "keyPoints": "legal requirement, avoid fines, maintain positive relationships with customers, keeps customers purchasing due to trust",
    "sampleAnswer": "Implied conditions are basic legal rights, such as acceptable quality and fitness for purpose, that automatically apply to a good or service regardless of what is stated in a contract. A business needs to ensure these are met because it is a legal requirement under the Australian Consumer Law, and failing to do so can result in fines and legal action. Meeting implied conditions also builds customer trust, encouraging repeat purchases and protecting the business\u0027s reputation."
  },
  {
    "id": "bs-4-branding-strategy",
    "criteriaSource": "official",
    "marks": 4,
    "topic": "Marketing",
    "source": "CSSA 2022 Trial HSC (Q21c)",
    "stimulus": null,
    "question": "Explain the use of branding as a marketing strategy.",
    "criteria": [
      { "marks": 4, "descriptor": "Relates the cause and effect of the use of branding as a marketing strategy" },
      { "marks": 3, "descriptor": "Provides characteristics and features of branding as a marketing strategy" },
      { "marks": 2, "descriptor": "Sketches in general terms branding as a marketing strategy" },
      { "marks": 1, "descriptor": "Makes reference to branding" }
    ],
    "keyPoints": "helps consumers identify products, reduces perceived risk through quality association, encourages repeat sales and brand loyalty, makes introducing new products easier, makes promotion easier",
    "sampleAnswer": "Branding is a marketing strategy involving the creation of a unique name, symbol or design that identifies a business\u0027s products and differentiates them from competitors. Branding helps consumers quickly identify products and assess their likely quality before purchase, reducing the perceived risk of buying, because a trusted brand is associated with a consistent standard. This encourages repeat purchases and builds brand loyalty, as satisfied customers return to brands they trust. Strong branding also makes it easier to introduce new products, since a business can leverage its existing reputation to gain market acceptance and make promotion more effective."
  },
  {
    "id": "bs-2-outsourcing-disadvantage",
    "criteriaSource": "official",
    "marks": 2,
    "topic": "Operations",
    "source": "CSSA 2022 Trial HSC (Q22a)",
    "stimulus": "Due to the large number of less expensive options for customers, an Australian manufacturer and retailer of electronic items has made the decision to outsource production to reduce costs and lower their prices.",
    "question": "Outline ONE disadvantage of outsourcing.",
    "criteria": [
      { "marks": 2, "descriptor": "Sketches in general terms one disadvantage of outsourcing" },
      { "marks": 1, "descriptor": "Recognises and names a disadvantage of outsourcing" }
    ],
    "keyPoints": "loss of control, communication and language barriers, lower quality, job losses, impact on reputation, loss of corporate memory",
    "sampleAnswer": "One disadvantage of this business outsourcing production is a loss of control over quality, as an external supplier rather than the business itself carries out manufacturing. This makes it harder to monitor and enforce consistent quality standards, risking defective products and damage to the business\u0027s reputation."
  },
  {
    "id": "bs-3-warranties-importance",
    "criteriaSource": "official",
    "marks": 3,
    "topic": "Operations",
    "source": "CSSA 2022 Trial HSC (Q22b)",
    "stimulus": "Due to the large number of less expensive options for customers, an Australian manufacturer and retailer of electronic items has made the decision to outsource production to reduce costs and lower their prices.",
    "question": "Explain the importance of warranties in the operations process of this business.",
    "criteria": [
      { "marks": 3, "descriptor": "Relates the cause and effect of the importance of warranties in the operations process of this business" },
      { "marks": 2, "descriptor": "Provides characteristics and features of warranties" },
      { "marks": 1, "descriptor": "Sketches in general terms warranties" }
    ],
    "keyPoints": "warranty is a promise to repair/replace/refund a faulty product, used to assess effectiveness of operations process, can be used as a key performance indicator, number of claims assesses manufacturer effectiveness, can increase customer perception of quality",
    "sampleAnswer": "A warranty is a promise to repair, replace or refund a faulty product within a set period. Warranties are important to this business\u0027s operations process because the number of warranty claims can act as a key performance indicator, revealing problems in production or quality control from outsourced manufacturing that need correcting. Offering strong warranties can also increase customers\u0027 perception of quality, which is important for this business as it competes against cheaper alternatives on price alone."
  },
  {
    "id": "bs-5-outsourcing-csr",
    "criteriaSource": "official",
    "marks": 5,
    "topic": "Operations",
    "source": "CSSA 2022 Trial HSC (Q22c)",
    "stimulus": "Due to the large number of less expensive options for customers, an Australian manufacturer and retailer of electronic items has made the decision to outsource production to reduce costs and lower their prices.",
    "question": "Assess the impact of outsourcing on the business's corporate social responsibility.",
    "criteria": [
      { "marks": 5, "descriptor": "Makes a detailed judgement on the impact of outsourcing on the business's corporate social responsibility" },
      { "marks": 4, "descriptor": "Relates the cause and effect of the impact of outsourcing on the business's corporate social responsibility" },
      { "marks": 3, "descriptor": "Provides characteristics and features of outsourcing and corporate social responsibility" },
      { "marks": 2, "descriptor": "Sketches in general terms outsourcing and corporate social responsibility" },
      { "marks": 1, "descriptor": "Makes reference to outsourcing or corporate social responsibility" }
    ],
    "keyPoints": "negative impact on CSR, worker exploitation in low-wage countries, damages reputation, redundancies for Australian workers, cost savings benefit shareholders",
    "sampleAnswer": "Corporate social responsibility (CSR) refers to a business\u0027s obligations to stakeholders beyond its legal requirements, including its workers, customers and the wider community. Outsourcing production overseas is likely to have an overall negative impact on this business\u0027s CSR. By shifting manufacturing to lower-cost overseas suppliers, the business risks being associated with the exploitation of workers through poor pay and unsafe conditions, which can seriously damage its reputation among ethically-conscious Australian consumers. It also fails to uphold its responsibilities to its existing Australian workforce, many of whom are likely to face redundancy as a direct result. While the resulting cost savings may benefit shareholders and help the business remain price-competitive against cheaper rivals, these financial gains come at a clear social cost to both overseas and domestic stakeholders. On balance, outsourcing undermines this business\u0027s corporate social responsibility, even though it may be commercially justified."
  },
  {
    "id": "bs-2-financial-management-role",
    "criteriaSource": "official",
    "marks": 2,
    "topic": "Finance",
    "source": "CSSA 2022 Trial HSC (Q23a)",
    "stimulus": "A highly successful Australian private company requires $100 million to expand internationally. With economic conditions improving, low interest rates and concerns with access to funds, management are exploring financing options.",
    "question": "Outline the strategic role of financial management for this business.",
    "criteria": [
      { "marks": 2, "descriptor": "Clearly sketches in general terms the strategic role of financial management for this business" },
      { "marks": 1, "descriptor": "Recognises and names the strategic role of financial management" }
    ],
    "keyPoints": "ensures business achieves goals and objectives, setting financial objectives, strategic planning of financial resources",
    "sampleAnswer": "The strategic role of financial management is to ensure a business achieves its overall goals and objectives by setting appropriate financial objectives and planning how funds are raised and used. For this business, effective financial management is essential to successfully raising and allocating the $100 million needed for its international expansion."
  },
  {
    "id": "bs-4-global-market-influence",
    "criteriaSource": "official",
    "marks": 4,
    "topic": "Finance",
    "source": "CSSA 2022 Trial HSC (Q23b)",
    "stimulus": "A highly successful Australian private company requires $100 million to expand internationally. With economic conditions improving, low interest rates and concerns with access to funds, management are exploring financing options.",
    "question": "Explain ONE global market influence on the financial management of this business.",
    "criteria": [
      { "marks": 4, "descriptor": "Relates the cause and effect of ONE global market influence on the financial management of this business" },
      { "marks": 3, "descriptor": "Provides characteristics and features of ONE global market influence on the financial management of this business" },
      { "marks": 2, "descriptor": "Sketches in general terms ONE financial global market influence" },
      { "marks": 1, "descriptor": "Recognises and names ONE financial global market influence" }
    ],
    "keyPoints": "global economic outlook, availability of funds, interest rates",
    "sampleAnswer": "The global economic outlook refers to the projected level of economic growth across world markets, which the business cannot control. With economic conditions currently improving, global demand for the business\u0027s products is likely to rise, supporting the case for international expansion. A positive global outlook also tends to keep interest rates low, reducing the cost of any debt finance used to help fund the $100 million expansion. However, if global conditions weakened, demand could fall and interest rates could rise, making the expansion more expensive and risky to finance."
  },
  {
    "id": "bs-4-equity-finance-justify",
    "criteriaSource": "official",
    "marks": 4,
    "topic": "Finance",
    "source": "CSSA 2022 Trial HSC (Q23c)",
    "stimulus": "A highly successful Australian private company requires $100 million to expand internationally. With economic conditions improving, low interest rates and concerns with access to funds, management are exploring financing options.",
    "question": "Justify the use of equity finance to enable the company expansion.",
    "criteria": [
      { "marks": 4, "descriptor": "Supports an argument or conclusion for the use of equity finance to enable the company expansion" },
      { "marks": 3, "descriptor": "Provides characteristics and features of equity finance to enable the company expansion" },
      { "marks": 2, "descriptor": "Sketches in general terms equity finance" },
      { "marks": 1, "descriptor": "Makes reference to equity finance" }
    ],
    "keyPoints": "new issue/listing on the ASX, does not add to debt levels, no interest payments required, strong track record attracts shareholders and reduces risk of undersubscription",
    "sampleAnswer": "Equity finance involves raising funds by selling ownership shares in the business rather than borrowing. This is a suitable option for funding the $100 million expansion, as the business could undertake a new issue by listing on the ASX for the first time, raising substantial funds without increasing debt levels or requiring ongoing interest repayments that would reduce cash flow. Given the company\u0027s strong track record of success, it is well placed to attract investor confidence and secure the full amount required, reducing the risk of undersubscription. For these reasons, equity finance is a low-risk, appropriate method of funding this large-scale expansion."
  },
  {
    "id": "bs-2-whs-workers-compensation",
    "criteriaSource": "official",
    "marks": 2,
    "topic": "Human Resources",
    "source": "CSSA 2022 Trial HSC (Q24a)",
    "stimulus": "Mill Services is looking to expand their business. They would need to employ more staff and invest in new technology.",
    "question": "Outline the difference between work health and safety and workers compensation.",
    "criteria": [
      { "marks": 2, "descriptor": "Sketches in general terms the difference between work health and safety and workers compensation" },
      { "marks": 1, "descriptor": "Sketches in general terms work health and safety or workers compensation" }
    ],
    "keyPoints": "WHS deals with safety, protection and welfare of employees, workers compensation provides benefits to an employee suffering a work-related injury or disease",
    "sampleAnswer": "Work health and safety deals with the safety, protection and welfare of employees while at work, aiming to prevent injury and illness. Workers compensation, by contrast, provides benefits such as medical costs and income replacement to an employee who has already suffered a work-related injury or disease."
  },
  {
    "id": "bs-4-external-recruitment",
    "criteriaSource": "official",
    "marks": 4,
    "topic": "Human Resources",
    "source": "CSSA 2022 Trial HSC (Q24b)",
    "stimulus": "Mill Services is looking to expand their business. They would need to employ more staff and invest in new technology.",
    "question": "Discuss the use of external recruitment for this business.",
    "criteria": [
      { "marks": 4, "descriptor": "Clearly identifies issues and provides points for and/or against the use of external recruitment for this business" },
      { "marks": 3, "descriptor": "Provides characteristics and features of external recruitment for this business" },
      { "marks": 2, "descriptor": "Sketches in general terms the use of external recruitment" },
      { "marks": 1, "descriptor": "Makes reference to external recruitment" }
    ],
    "keyPoints": "advantages: wider applicant pool, new ideas/perspectives/skills, specific skills for new technology, saves training costs, dilutes internal politics, more diversity; disadvantages: risk of unknown staff, loss of productivity during orientation and induction, takes time and effort",
    "sampleAnswer": "External recruitment involves filling vacancies with people from outside the business, which would help Mill Services as it expands and adopts new technology. It provides access to a wider pool of applicants with new ideas and the specific technical skills needed to operate new equipment, and can dilute internal politics that might arise from promoting existing staff. However, external recruitment carries the risk of hiring unknown staff whose fit with the business is uncertain, and new employees typically experience a loss of productivity during induction. The process is also more time-consuming and costly than filling roles internally. On balance, external recruitment should benefit Mill Services, provided the business invests time in properly inducting new staff."
  },
  {
    "id": "bs-4-training-development",
    "criteriaSource": "official",
    "marks": 4,
    "topic": "Human Resources",
    "source": "CSSA 2022 Trial HSC (Q24c)",
    "stimulus": "Mill Services is looking to expand their business. They would need to employ more staff and invest in new technology.",
    "question": "Assess the importance of training and development as a strategy for this business.",
    "criteria": [
      { "marks": 4, "descriptor": "Provides a clear judgement about the importance of training and development as a strategy for this business" },
      { "marks": 3, "descriptor": "Relates the cause and effect of the importance of training and development as a strategy for this business" },
      { "marks": 2, "descriptor": "Provides characteristics and features of the importance of training and development" },
      { "marks": 1, "descriptor": "Sketches in general terms training and development" }
    ],
    "keyPoints": "training builds current skills for superior work performance, development prepares employees for future responsibilities, cost-effective long term, improves performance/productivity/efficiency, motivating factor when hiring, prepares business for anticipated change",
    "sampleAnswer": "Training builds employees\u0027 current skills to improve performance in their existing roles, while development prepares employees for future responsibilities as the business grows. Both are highly important for Mill Services, as expanding staff numbers and introducing new technology means employees will need training to operate equipment safely and effectively, and development to prepare future supervisors for the responsibilities of a larger business. Although training and development involves an upfront cost, it is likely to be cost-effective long term, as it improves productivity and efficiency and acts as a motivating factor that helps attract and retain staff. Overall, training and development is essential for Mill Services to successfully manage its expansion."
  },
  {
    "id": "bs-2-transformed-resources",
    "criteriaSource": "official",
    "marks": 2,
    "topic": "Operations",
    "source": "Penrith 2021 Trial HSC (Q21a)",
    "stimulus": null,
    "question": "Distinguish between transformed resources and transforming resources.",
    "criteria": [
      { "marks": 2, "descriptor": "Demonstrates a clear understanding of the difference between transformed resources and transforming resources" },
      { "marks": 1, "descriptor": "Provides some relevant information about transformed resources and transforming resources" }
    ],
    "keyPoints": "transformed resources are inputs changed or converted in the operations process (materials, information, customers), transforming resources are inputs that carry out the transformation process (human resources, facilities)",
    "sampleAnswer": "Transformed resources are the inputs that are changed or converted during the operations process, such as materials, information and customers. Transforming resources are the inputs that carry out this change, such as human resources and facilities like equipment and buildings. In short, transformed resources are acted upon, while transforming resources do the acting."
  },
  {
    "id": "bs-3-variation-demand",
    "criteriaSource": "official",
    "marks": 3,
    "topic": "Operations",
    "source": "Penrith 2021 Trial HSC (Q21b)",
    "stimulus": null,
    "question": "Explain the influence of variation in demand on transformation processes.",
    "criteria": [
      { "marks": 3, "descriptor": "Clearly makes the relationship evident between variation in demand and the transformation process" },
      { "marks": 2, "descriptor": "Sketches in general terms how variation in demand influences the transformation process" },
      { "marks": 1, "descriptor": "Makes a general statement about variation in demand or the transformation process" }
    ],
    "keyPoints": "variation in demand is the amount of product desired by a customer, impacts sequencing and scheduling, technology/task design/process layout, monitoring/control/improvement, predicting demand and necessary inputs from suppliers and labour",
    "sampleAnswer": "Variation in demand refers to fluctuations in the amount of a product or service customers want at a given time, for example due to seasonality. Where demand varies significantly, a business must adjust its sequencing and scheduling of production to cope with peaks and troughs, and may need to change its technology, task design or process layout to increase or decrease output. Businesses must also predict demand accurately to ensure sufficient materials, labour and equipment are available when needed, avoiding both understaffing during peaks and wasted capacity during quiet periods."
  },
  {
    "id": "bs-6-cost-quality-balance",
    "criteriaSource": "official",
    "marks": 6,
    "topic": "Operations",
    "source": "Penrith 2021 Trial HSC (Q21c)",
    "stimulus": null,
    "question": "With reference to a business case study/studies, discuss the balance between cost and quality in operations strategy.",
    "criteria": [
      { "marks": 6, "descriptor": "Provides detailed points for and/or against the balance between cost and quality with reference to a business case study/studies" },
      { "marks": 5, "descriptor": "Provides points for and against the balance between cost and quality with reference to a specific business" },
      { "marks": 4, "descriptor": "Provides characteristics and features of cost and quality with reference to a business" },
      { "marks": 3, "descriptor": "Provides characteristics and features of cost and/or quality" },
      { "marks": 2, "descriptor": "Sketches in general terms cost and/or quality" },
      { "marks": 1, "descriptor": "Makes reference to cost/quality" }
    ],
    "keyPoints": "as quality increases, cost of production usually increases, higher costs often passed to consumers through higher prices, businesses must balance cost and quality objectives, case study integration required (e.g. Cochlear)",
    "sampleAnswer": "There is often a trade-off between cost and quality in operations strategy: as quality increases, the cost of production usually rises, because higher-quality inputs, skilled labour and rigorous quality control are more expensive, and these costs are often passed on to consumers through higher prices. This balance is evident at Cochlear Limited, an Australian manufacturer of hearing implant devices. Because Cochlear\u0027s products are safety-critical, it prioritises quality over cost, investing heavily in research and development and strict quality assurance to ensure its implants are reliable and meet strict international medical standards, even though this results in significantly higher production costs. However, Cochlear cannot ignore cost entirely, as excessive costs would make its products unaffordable and less competitive internationally, so it uses strategies such as economies of scale to offset some of these expenses without compromising safety. This shows that cost and quality do not need to be mutually exclusive; the right balance depends on the product\u0027s risk profile and what a business\u0027s target market values most."
  },
  {
    "id": "bs-2-working-capital-change",
    "criteriaSource": "official",
    "marks": 2,
    "topic": "Finance",
    "source": "Penrith 2021 Trial HSC (Q23a)",
    "stimulus": "Balance Sheet of Local Couriers as at 30 June 2021\n                                    2020 ($)        2021 ($)\nCurrent Assets\n  Cash                                4,000          20,000\n  Inventory                           9,000          14,000\n  Accounts Receivable                24,000          20,000\n  Total Current Assets               37,000          54,000\nNon-current Assets\n  Equipment                          54,000          39,000\n  Motor Vehicles                     82,000          88,000\n  Total Non-current Assets          136,000         127,000\nTotal Assets                        173,000         181,000\n\nCurrent Liabilities\n  Bank Overdraft                      3,600           4,000\n  Accounts Payable                   12,400          12,000\n  Total Current Liabilities          16,000          16,000\nNon-current Liabilities\n  Loan                               96,000          96,000\nTotal Liabilities                   112,000         112,000\n\nOwner's Equity\n  Capital                            42,000          48,000\n  Net Profit                         27,000          42,000\n  Less Drawings                     (8,000)        (21,000)\nTotal Owner's Equity                 61,000          69,000\n\nAdditional Information:\nSales: 2020 $156,000; 2021 $186,000\nTrade Credit Policy: 40 days",
    "question": "Calculate the change in Local Couriers' working capital between 2020 and 2021. Show your working.",
    "criteria": [
      { "marks": 2, "descriptor": "Correctly calculates the change in working capital as $17,000 and shows correct working" },
      { "marks": 1, "descriptor": "States correct working for working capital but incorrect final calculation, OR provides correct answer only" }
    ],
    "keyPoints": "working capital = current assets - current liabilities, 2020 = $21,000, 2021 = $38,000, change = increase of $17,000",
    "sampleAnswer": "Working capital = current assets − current liabilities. 2020: $37,000 − $16,000 = $21,000. 2021: $54,000 − $16,000 = $38,000. This represents an increase in working capital of $17,000 between 2020 and 2021."
  },
  {
    "id": "bs-3-accounts-receivable-turnover",
    "criteriaSource": "official",
    "marks": 3,
    "topic": "Finance",
    "source": "Penrith 2021 Trial HSC (Q23b)",
    "stimulus": "Balance Sheet of Local Couriers as at 30 June 2021\n                                    2020 ($)        2021 ($)\nCurrent Assets\n  Cash                                4,000          20,000\n  Inventory                           9,000          14,000\n  Accounts Receivable                24,000          20,000\n  Total Current Assets               37,000          54,000\nNon-current Assets\n  Equipment                          54,000          39,000\n  Motor Vehicles                     82,000          88,000\n  Total Non-current Assets          136,000         127,000\nTotal Assets                        173,000         181,000\n\nCurrent Liabilities\n  Bank Overdraft                      3,600           4,000\n  Accounts Payable                   12,400          12,000\n  Total Current Liabilities          16,000          16,000\nNon-current Liabilities\n  Loan                               96,000          96,000\nTotal Liabilities                   112,000         112,000\n\nOwner's Equity\n  Capital                            42,000          48,000\n  Net Profit                         27,000          42,000\n  Less Drawings                     (8,000)        (21,000)\nTotal Owner's Equity                 61,000          69,000\n\nAdditional Information:\nSales: 2020 $156,000; 2021 $186,000\nTrade Credit Policy: 40 days",
    "question": "Using the accounts receivable turnover ratio (sales ÷ accounts receivable), calculate and comment on the efficiency of Local Couriers between 2020 and 2021.",
    "criteria": [
      { "marks": 3, "descriptor": "Correctly calculates and comments on the efficiency (sales ÷ accounts receivable) of Local Couriers" },
      { "marks": 2, "descriptor": "Correctly calculates the efficiency of Local Couriers and provides a brief comment" },
      { "marks": 1, "descriptor": "Correctly calculates the accounts receivable turnover ratio for Local Couriers" }
    ],
    "keyPoints": "ARTR 2020 = 6.5 times (56.2 days), ARTR 2021 = 9.3 times (39.2 days), efficiency improved, 2021 now within 40-day trade credit policy",
    "sampleAnswer": "Accounts receivable turnover = sales ÷ accounts receivable. 2020: $156,000 ÷ $24,000 = 6.5 times, or 365 ÷ 6.5 ≈ 56.2 days to collect debts. 2021: $186,000 ÷ $20,000 = 9.3 times, or about 39.2 days. This shows Local Couriers\u0027 efficiency in collecting debts improved significantly, and in 2021 it is now collecting payments within its 40-day trade credit policy, whereas in 2020 it was taking longer than the policy allowed."
  },
  {
    "id": "bs-3-return-on-equity",
    "criteriaSource": "official",
    "marks": 3,
    "topic": "Finance",
    "source": "Penrith 2021 Trial HSC (Q23c)",
    "stimulus": "Balance Sheet of Local Couriers as at 30 June 2021\n                                    2020 ($)        2021 ($)\nCurrent Assets\n  Cash                                4,000          20,000\n  Inventory                           9,000          14,000\n  Accounts Receivable                24,000          20,000\n  Total Current Assets               37,000          54,000\nNon-current Assets\n  Equipment                          54,000          39,000\n  Motor Vehicles                     82,000          88,000\n  Total Non-current Assets          136,000         127,000\nTotal Assets                        173,000         181,000\n\nCurrent Liabilities\n  Bank Overdraft                      3,600           4,000\n  Accounts Payable                   12,400          12,000\n  Total Current Liabilities          16,000          16,000\nNon-current Liabilities\n  Loan                               96,000          96,000\nTotal Liabilities                   112,000         112,000\n\nOwner's Equity\n  Capital                            42,000          48,000\n  Net Profit                         27,000          42,000\n  Less Drawings                     (8,000)        (21,000)\nTotal Owner's Equity                 61,000          69,000\n\nAdditional Information:\nSales: 2020 $156,000; 2021 $186,000\nTrade Credit Policy: 40 days",
    "question": "Using the return on equity ratio (net profit ÷ total equity), calculate and comment on the profitability of Local Couriers between 2020 and 2021.",
    "criteria": [
      { "marks": 3, "descriptor": "Correctly calculates and comments on the profitability (net profit ÷ total equity) of Local Couriers" },
      { "marks": 2, "descriptor": "Correctly calculates the profitability of Local Couriers and provides a brief comment" },
      { "marks": 1, "descriptor": "Correctly calculates return on equity for Local Couriers" }
    ],
    "keyPoints": "ROE 2020 = 44.3%, ROE 2021 = 60.9%, profitability improved, favourable compared to alternative investments",
    "sampleAnswer": "Return on equity = net profit ÷ total equity. 2020: $27,000 ÷ $61,000 = 44.3%. 2021: $42,000 ÷ $69,000 = 60.9%. This shows Local Couriers\u0027 profitability improved substantially between 2020 and 2021, generating a much higher return for the owner on their invested equity, which is a favourable outcome compared to many alternative investments."
  },
  {
    "id": "bs-4-normalised-earnings",
    "criteriaSource": "official",
    "marks": 4,
    "topic": "Finance",
    "source": "Penrith 2021 Trial HSC (Q23d)",
    "stimulus": "Balance Sheet of Local Couriers as at 30 June 2021\n                                    2020 ($)        2021 ($)\nCurrent Assets\n  Cash                                4,000          20,000\n  Inventory                           9,000          14,000\n  Accounts Receivable                24,000          20,000\n  Total Current Assets               37,000          54,000\nNon-current Assets\n  Equipment                          54,000          39,000\n  Motor Vehicles                     82,000          88,000\n  Total Non-current Assets          136,000         127,000\nTotal Assets                        173,000         181,000\n\nCurrent Liabilities\n  Bank Overdraft                      3,600           4,000\n  Accounts Payable                   12,400          12,000\n  Total Current Liabilities          16,000          16,000\nNon-current Liabilities\n  Loan                               96,000          96,000\nTotal Liabilities                   112,000         112,000\n\nOwner's Equity\n  Capital                            42,000          48,000\n  Net Profit                         27,000          42,000\n  Less Drawings                     (8,000)        (21,000)\nTotal Owner's Equity                 61,000          69,000\n\nAdditional Information:\nSales: 2020 $156,000; 2021 $186,000\nTrade Credit Policy: 40 days",
    "question": "Explain how 'normalised earnings' AND 'capitalising expenses' could affect the financial statements of Local Couriers.",
    "criteria": [
      { "marks": 4, "descriptor": "Provides how and/or why normalised earnings and capitalising expenses could affect the financial statements for Local Couriers" },
      { "marks": 3, "descriptor": "Provides how and/or why normalised earnings or capitalising expenses could affect the financial statements for Local Couriers and identifies the other" },
      { "marks": 2, "descriptor": "Provides how and/or why normalised earnings or capitalising expenses could affect the financial statements for Local Couriers, OR makes a general statement about normalised earnings and capitalising expenses for Local Couriers" },
      { "marks": 1, "descriptor": "Makes a general statement about normalised earnings or capitalising expenses" }
    ],
    "keyPoints": "normalised earnings adjust for irregular/one-off influences (e.g. COVID-19 downturn), gives more accurate representation of true earnings; capitalising expenses records an expense as an asset rather than an expense, increases non-current assets and reported profit",
    "sampleAnswer": "Normalised earnings adjust reported profit to remove the effect of unusual or one-off events, such as a temporary downturn caused by COVID-19, giving a more accurate picture of Local Couriers\u0027 true, ongoing earning capacity for comparison between years. Capitalising expenses involves recording a cost, such as a large repair or upgrade to a delivery vehicle, as a non-current asset rather than an expense. This spreads the cost over several years through depreciation rather than reducing profit immediately, which increases both reported non-current assets and net profit in the year the expense is capitalised, potentially making the business appear more profitable than it otherwise would."
  },
  {
    "id": "bs-1-merino-strength",
    "criteriaSource": "official",
    "marks": 1,
    "topic": "Marketing",
    "source": "Penrith 2021 Trial HSC (Q24a)",
    "stimulus": "Merino Pty Ltd is a market leader in manufacturing high quality, Australian made woollen garments. Their clothing is popular with overseas tourists and Australians in the 40+ age group. The clothing is sold through specialty stores in tourist hot spots and department stores in major cities and towns. Recently, sales are falling due to a drop in tourism, and they wish to expand their product range to target a younger age group.",
    "question": "Identify ONE strength for this business.",
    "criteria": [
      { "marks": 1, "descriptor": "Correctly names a strength for Merino Pty Ltd" }
    ],
    "keyPoints": "quality perception of products, market leader, Australian-made, established distribution network",
    "sampleAnswer": "One strength of Merino Pty Ltd is its position as a market leader known for high-quality, Australian-made woollen garments."
  },
  {
    "id": "bs-4-market-research-process",
    "criteriaSource": "official",
    "marks": 4,
    "topic": "Marketing",
    "source": "Penrith 2021 Trial HSC (Q24b)",
    "stimulus": "Merino Pty Ltd is a market leader in manufacturing high quality, Australian made woollen garments. Their clothing is popular with overseas tourists and Australians in the 40+ age group. The clothing is sold through specialty stores in tourist hot spots and department stores in major cities and towns. Recently, sales are falling due to a drop in tourism, and they wish to expand their product range to target a younger age group.",
    "question": "Outline a market research process this business could use prior to developing the new product.",
    "criteria": [
      { "marks": 4, "descriptor": "Sketches in general terms a market research process Merino Pty Ltd could use prior to developing the new product" },
      { "marks": 3, "descriptor": "Provides characteristics and features of a market research process Merino Pty Ltd could use for the new product" },
      { "marks": 2, "descriptor": "Provides characteristics and features of market research" },
      { "marks": 1, "descriptor": "Makes a statement about market research" }
    ],
    "keyPoints": "determining information needs, data collection (primary and secondary data), data analysis and interpretation",
    "sampleAnswer": "Merino Pty Ltd could use a three-stage market research process before developing its new product for a younger target market. First, it should determine its information needs, such as what styles, prices and features would appeal to younger customers. Second, it should collect data, using primary methods like surveys or focus groups with younger consumers, and secondary data such as existing industry reports on youth fashion trends. Finally, it should analyse and interpret this data to identify clear patterns, which can then inform decisions about the new product\u0027s design, pricing and promotion."
  },
  {
    "id": "bs-5-promotional-strategy",
    "criteriaSource": "official",
    "marks": 5,
    "topic": "Marketing",
    "source": "Penrith 2021 Trial HSC (Q24c)",
    "stimulus": "Merino Pty Ltd is a market leader in manufacturing high quality, Australian made woollen garments. Their clothing is popular with overseas tourists and Australians in the 40+ age group. The clothing is sold through specialty stores in tourist hot spots and department stores in major cities and towns. Recently, sales are falling due to a drop in tourism, and they wish to expand their product range to target a younger age group.",
    "question": "Recommend ONE promotional strategy this business could use for the new product.",
    "criteria": [
      { "marks": 5, "descriptor": "Clearly identifies and provides reasons in favour of ONE promotional strategy Merino Pty Ltd could use prior to the launch of the new product" },
      { "marks": 4, "descriptor": "Identifies and provides reasons in favour of ONE promotional strategy Merino Pty Ltd could use prior to the launch of the new product" },
      { "marks": 3, "descriptor": "Provides characteristics of ONE promotional strategy Merino Pty Ltd could use prior to the launch of the new product" },
      { "marks": 2, "descriptor": "Sketches in general terms a promotional strategy" },
      { "marks": 1, "descriptor": "Makes reference to promotional strategies" }
    ],
    "keyPoints": "advertising, personal selling, sales promotion, publicity and public relations, communication process/opinion leaders and word of mouth",
    "sampleAnswer": "One promotional strategy Merino Pty Ltd could use to launch its new product to a younger market is social media advertising, using platforms popular with younger consumers such as Instagram and TikTok. This would allow Merino to visually showcase its new range and build awareness of the brand among an age group it has not traditionally targeted, at a lower cost than traditional print or television advertising. Because younger consumers are heavily influenced by word of mouth and opinion leaders, Merino could also partner with relevant influencers to build credibility and trust with this unfamiliar audience. This strategy directly targets the demographic Merino wants to reach, helping to reposition its reputation for quality beyond its established 40+ customer base and generate the awareness needed to offset declining tourist sales."
  }
,
  {
    "id": "bs-2-plc-decline-characteristics",
    "criteriaSource": "official",
    "marks": 2,
    "topic": "Marketing",
    "source": "Barker 2022 Trial HSC (Q21a)",
    "stimulus": "J and K Pty Ltd is a manufacturer and retailer of men's and women's clothing. Management believes their product to be higher quality compared to competitors and have the highest prices in the market.\n\nRecently the business's sales and profitability have declined due to:\n• poor customer feedback related to the quality of the clothing\n• the lack of market research used to understand consumer decision making\n• they are refusing to accept all returns from customers",
    "question": "Identify TWO characteristics of the business's product life cycle position.",
    "criteria": [
      { "marks": 2, "descriptor": "Sketches in general terms TWO characteristics of the decline stage" },
      { "marks": 1, "descriptor": "Sketches in general terms ONE characteristic of the decline stage" }
    ],
    "keyPoints": "declining sales and profitability, decreasing customer satisfaction/loyalty, falling market share, product life cycle stages, situational analysis (SWOT, product life cycle)",
    "sampleAnswer": "Two characteristics of J and K Pty Ltd\u0027s position in the decline stage of the product life cycle are declining sales and profitability, and falling customer satisfaction, evidenced by poor customer feedback about clothing quality and its refusal to accept returns."
  },
  {
    "id": "bs-2-marketing-strategy-declining-performance",
    "criteriaSource": "official",
    "marks": 2,
    "topic": "Marketing",
    "source": "Barker 2022 Trial HSC (Q21b)",
    "stimulus": "J and K Pty Ltd is a manufacturer and retailer of men's and women's clothing. Management believes their product to be higher quality compared to competitors and have the highest prices in the market.\n\nRecently the business's sales and profitability have declined due to:\n• poor customer feedback related to the quality of the clothing\n• the lack of market research used to understand consumer decision making\n• they are refusing to accept all returns from customers",
    "question": "Propose and justify ONE marketing strategy that could be used to improve this business's declining performance.",
    "criteria": [
      { "marks": 2, "descriptor": "Outlines ONE appropriate marketing strategy to improve the business' performance" },
      { "marks": 1, "descriptor": "Identifies ONE appropriate marketing strategy to improve the business' performance OR outlines ONE marketing strategy" }
    ],
    "keyPoints": "market segmentation, product/service differentiation and positioning, branding, packaging, pricing methods and strategies, promotion mix elements, relationship marketing",
    "sampleAnswer": "J and K could use product differentiation by improving the actual quality of its clothing to match its premium pricing. This would directly address the poor customer feedback driving declining sales, rebuilding customer trust and justifying the business\u0027s high prices relative to competitors."
  },
  {
    "id": "bs-3-breach-consumer-laws",
    "criteriaSource": "official",
    "marks": 3,
    "topic": "Marketing",
    "source": "Barker 2022 Trial HSC (Q21c)",
    "stimulus": "J and K Pty Ltd is a manufacturer and retailer of men's and women's clothing. Management believes their product to be higher quality compared to competitors and have the highest prices in the market.\n\nRecently the business's sales and profitability have declined due to:\n• poor customer feedback related to the quality of the clothing\n• the lack of market research used to understand consumer decision making\n• they are refusing to accept all returns from customers",
    "question": "How is this business in breach of consumer laws?",
    "criteria": [
      { "marks": 3, "descriptor": "Relates cause and effect as to how the business has breached consumer law" },
      { "marks": 2, "descriptor": "Sketches in general terms the business' breach of consumer laws" },
      { "marks": 1, "descriptor": "Makes a general statement about consumer laws" }
    ],
    "keyPoints": "consumer laws, statutory guarantees/warranties under the Australian Consumer Law, right to repair/replace/refund for faulty or unacceptable-quality goods",
    "sampleAnswer": "Under the Australian Consumer Law, businesses must provide statutory guarantees, including that goods are of acceptable quality and that customers can obtain a repair, replacement or refund for faulty items. By refusing to accept all returns from customers, J and K Pty Ltd is breaching these statutory guarantees, particularly given that customer feedback indicates the clothing is not of acceptable quality. This exposes the business to potential fines, legal action and further damage to its reputation."
  },
  {
    "id": "bs-3-ethical-behaviour-customer-perception",
    "criteriaSource": "official",
    "marks": 3,
    "topic": "Marketing",
    "source": "Barker 2022 Trial HSC (Q21d)",
    "stimulus": "J and K Pty Ltd is a manufacturer and retailer of men's and women's clothing. Management believes their product to be higher quality compared to competitors and have the highest prices in the market.\n\nRecently the business's sales and profitability have declined due to:\n• poor customer feedback related to the quality of the clothing\n• the lack of market research used to understand consumer decision making\n• they are refusing to accept all returns from customers",
    "question": "How is the business's ethical behaviour affecting customer perception?",
    "criteria": [
      { "marks": 3, "descriptor": "Relates cause and effect as to how the business's poor ethical behaviour negatively affects customer perception" },
      { "marks": 2, "descriptor": "Sketches in general terms the business' ethical behaviour OR the impact on customer perception" },
      { "marks": 1, "descriptor": "Makes a general statement about ethical behaviour OR customer perception" }
    ],
    "keyPoints": "ethical behaviour, truth and accuracy in advertising, customer trust and perception, reputation, word of mouth",
    "sampleAnswer": "J and K\u0027s refusal to accept returns and failure to address poor-quality feedback reflects unethical business behaviour, as it disregards customers\u0027 legitimate concerns and consumer rights. This is likely to damage customer perception of the business, reducing trust and satisfaction, particularly as its high prices create an expectation of high quality and good service. Negative word of mouth resulting from this behaviour is likely to further damage J and K\u0027s reputation and contribute to its declining sales."
  },
  {
    "id": "bs-2-speed-vs-quality-objectives",
    "criteriaSource": "official",
    "marks": 2,
    "topic": "Operations",
    "source": "Barker 2022 Trial HSC (Q22a)",
    "stimulus": "Kramer Constructions specialises in building shopping centres in Australia. The business is being sued for not completing the construction of buildings on time. Issues of speed and quality have contributed to the business's problems. To address the problem, the business is faced with having to hire more workers and purchase more tools to get projects finished.",
    "question": "Distinguish between speed and quality objectives.",
    "criteria": [
      { "marks": 2, "descriptor": "Clearly notes the differences between the operations objectives of speed and quality" },
      { "marks": 1, "descriptor": "Sketches aspects of operations objectives" }
    ],
    "keyPoints": "performance objectives – quality, speed, dependability, flexibility, customisation, cost",
    "sampleAnswer": "Speed refers to how quickly a business can produce and deliver its goods or services, such as completing a shopping centre on schedule. Quality refers to a good or service consistently meeting a required standard or specification. Kramer Constructions has struggled with both, being sued for late completions, a speed issue, linked to problems in construction quality."
  },
  {
    "id": "bs-4-monitoring-controlling-recovery",
    "criteriaSource": "official",
    "marks": 4,
    "topic": "Operations",
    "source": "Barker 2022 Trial HSC (Q22b)",
    "stimulus": "Kramer Constructions specialises in building shopping centres in Australia. The business is being sued for not completing the construction of buildings on time. Issues of speed and quality have contributed to the business's problems. To address the problem, the business is faced with having to hire more workers and purchase more tools to get projects finished.",
    "question": "How could monitoring and controlling of the operations process contribute to this business' recovery?",
    "criteria": [
      { "marks": 4, "descriptor": "Clearly provides HOW monitoring and controlling of operations processes would contribute to the business' recovery" },
      { "marks": 3, "descriptor": "Clearly provides HOW monitoring and controlling of operations processes would contribute to recovery ONLY, OR provides characteristics and features of monitoring and controlling and how they contribute to recovery of the business" },
      { "marks": 2, "descriptor": "Provides characteristics and features of monitoring and controlling and how they contribute to recovery ONLY, OR sketches in general terms monitoring and controlling with reference to business recovery" },
      { "marks": 1, "descriptor": "Identifies aspects of monitoring and/or controlling" }
    ],
    "keyPoints": "transformation processes, monitoring, control and improvement, comparing actual against planned performance, corrective action",
    "sampleAnswer": "Monitoring and controlling involves regularly comparing actual performance against planned targets during the transformation process and taking corrective action where there are gaps. For Kramer Constructions, closely monitoring project timelines and quality checkpoints throughout each build would allow problems, such as delays or substandard work, to be identified and corrected early, before they cause the business to miss deadlines and face legal action. By using this information to adjust schedules, reallocate the newly hired workers and tools, and address quality issues as they arise, Kramer can better ensure projects are completed on time and to standard, helping rebuild its reputation and avoid future disputes."
  },
  {
    "id": "bs-4-resistance-to-change-factor",
    "criteriaSource": "official",
    "marks": 4,
    "topic": "Operations",
    "source": "Barker 2022 Trial HSC (Q22c)",
    "stimulus": "Kramer Constructions specialises in building shopping centres in Australia. The business is being sued for not completing the construction of buildings on time. Issues of speed and quality have contributed to the business's problems. To address the problem, the business is faced with having to hire more workers and purchase more tools to get projects finished.",
    "question": "Explain ONE resistance to change factor that must be overcome by operations management of this business.",
    "criteria": [
      { "marks": 4, "descriptor": "Provides cause and effect of ONE resistance to change factor that needs to be overcome by the business" },
      { "marks": 3, "descriptor": "Provides cause and effect of ONE resistance to change factor that needs to be overcome ONLY, OR provides characteristics and features of ONE resistance to change factor that needs to be overcome by the business" },
      { "marks": 2, "descriptor": "Provides characteristics and features of ONE resistance to change factor that needs to be overcome ONLY, OR sketches in general terms ONE resistance to change factor with reference to the business" },
      { "marks": 1, "descriptor": "Sketches in general terms ONE resistance to change factor ONLY, OR identifies ONE resistance to change factor" }
    ],
    "keyPoints": "overcoming resistance to change – financial costs, purchasing new equipment, redundancy payments, retraining, reorganising plant layout, inertia",
    "sampleAnswer": "One resistance to change factor Kramer Constructions must overcome is the financial cost of change, as hiring more workers and purchasing new tools requires significant upfront investment. Because these costs reduce short-term profitability, management may be reluctant to commit to the change, and existing staff may resist new tools or working methods if they are unfamiliar or require retraining. If Kramer does not clearly communicate the reasons for these changes and their long-term benefits, such as avoiding further legal action and completing projects on time, resistance may slow implementation and undermine the business\u0027s recovery."
  },
  {
    "id": "bs-2-productivity-profitability-relationship",
    "criteriaSource": "official",
    "marks": 2,
    "topic": "Human Resources",
    "source": "Barker 2022 Trial HSC (Q23a)",
    "stimulus": "Prestige Smash Pty Ltd is a motor vehicle smash repairer. They have recently expanded into car detailing to capitalise on the growing detailing market. This has created a need to hire five (5) additional staff and they will each need to detail an average of three (3) cars per day to be profitable.",
    "question": "Outline the relationship between productivity and profitability for this business.",
    "criteria": [
      { "marks": 2, "descriptor": "Sketches in general terms a correct relationship between productivity and profitability for the business" },
      { "marks": 1, "descriptor": "Identifies aspects of a relationship between productivity and profitability" }
    ],
    "keyPoints": "strategic role of human resources, HR objectives – productivity (increase), cost (decrease)",
    "sampleAnswer": "Productivity measures the output produced per unit of input, such as the number of cars detailed per staff member per day. Higher productivity generally increases profitability, as more output is generated from the same costs; for Prestige Smash, each new detailer must complete an average of three cars daily for the expansion to be profitable."
  },
  {
    "id": "bs-4-outsourcing-acquisition-process",
    "criteriaSource": "official",
    "marks": 4,
    "topic": "Human Resources",
    "source": "Barker 2022 Trial HSC (Q23b)",
    "stimulus": "Prestige Smash Pty Ltd is a motor vehicle smash repairer. They have recently expanded into car detailing to capitalise on the growing detailing market. This has created a need to hire five (5) additional staff and they will each need to detail an average of three (3) cars per day to be profitable.",
    "question": "Explain how outsourcing could support the acquisition (recruitment) process for this business.",
    "criteria": [
      { "marks": 4, "descriptor": "Provides clear cause and effect of HOW outsourcing can support the acquisition function for the business" },
      { "marks": 3, "descriptor": "Provides clear cause and effect of HOW outsourcing can support the acquisition function ONLY, OR provides characteristics and features of HOW outsourcing can support the acquisition function for the business" },
      { "marks": 2, "descriptor": "Provides characteristics and features of HOW outsourcing can support the acquisition function ONLY, OR sketches in general terms the use of outsourcing and refers to human resources of the business" },
      { "marks": 1, "descriptor": "Makes a general statement about the use of outsourcing or human resources" }
    ],
    "keyPoints": "outsourcing recruitment, selection and placement; focus on core business, superior specialised service, lower costs, access to improved technology and infrastructure",
    "sampleAnswer": "Outsourcing the acquisition (recruitment) process means using an external agency to source, screen and select new staff rather than doing this in-house. This could benefit Prestige Smash as it expands into car detailing, as recruitment agencies have specialised expertise and networks to quickly find suitably skilled detailing staff, allowing the business to focus on its core smash repair operations. Outsourcing can also be more cost-effective than building an internal recruitment team for a one-off hiring need of five staff, and may give access to better screening technology than Prestige Smash has itself, improving the quality of new hires needed to meet the required productivity of three cars per day."
  },
  {
    "id": "bs-4-corporate-culture-success",
    "criteriaSource": "official",
    "marks": 4,
    "topic": "Human Resources",
    "source": "Barker 2022 Trial HSC (Q23c)",
    "stimulus": null,
    "question": "With reference to a business you have studied, explain how corporate culture has contributed to its success.",
    "criteria": [
      { "marks": 4, "descriptor": "Clearly relates cause and effect of how corporate culture contributes to success AND refers to a business" },
      { "marks": 3, "descriptor": "Clearly relates cause and effect of how corporate culture contributes to success ONLY, OR provides characteristics and features of how corporate culture contributes to success for a business AND refers to a business" },
      { "marks": 2, "descriptor": "Provides characteristics and features of how corporate culture contributes to success for a business ONLY, OR sketches in general terms how corporate culture contributes to success AND refers to a business" },
      { "marks": 1, "descriptor": "Makes a general statement about corporate culture and/or a business" }
    ],
    "keyPoints": "corporate culture, shared values and beliefs, productivity, legal compliance, ethical and social responsibility, indicators of effectiveness",
    "sampleAnswer": "Corporate culture refers to the shared values, beliefs and behaviours that shape how a business operates. At Atlassian, an Australian software company, a culture built around openness, collaboration and giving employees autonomy over how they work has contributed strongly to its success. This culture increases employee motivation and engagement, which drives higher productivity and innovation, helping the business continually develop new products. It has also helped Atlassian attract and retain talented staff in a competitive industry, as employees value working in a culture aligned with their own values, contributing directly to the company\u0027s long-term growth and profitability."
  },
  {
    "id": "bs-2-liquidity-ratio-interpret",
    "criteriaSource": "official",
    "marks": 2,
    "topic": "Finance",
    "source": "Barker 2022 Trial HSC (Q24a)",
    "stimulus": "Bubs Australia Ltd have developed a trusted reputation in the domestic market for their high-quality baby formula. Global shortages have led to a significant increase in demand from the United States. To increase production and business growth, they need to acquire a larger production facility.\n\nSelected financial data for Bubs Australia Ltd:\nRatio | 2020 | 2021\nLiquidity (current assets ÷ current liabilities) | 3.00 : 1 | 4.2 : 1\nSolvency (total liabilities ÷ total equity) | 190% | 330%\nNet profitability (net profit ÷ sales) | 87% | 54%\nExpense ratio (expenses ÷ sales) | 32% | 46%\n\n2021 Industry Averages: Liquidity 350%; Solvency 200%",
    "question": "Interpret and comment on this business's liquidity ratio in 2021.",
    "criteria": [
      { "marks": 2, "descriptor": "Correctly interprets and comments on the business' liquidity ratio in 2021" },
      { "marks": 1, "descriptor": "Correctly interprets or comments on the business' liquidity ratio in 2021" }
    ],
    "keyPoints": "financial ratios, liquidity – current ratio (current assets ÷ current liabilities), comparison to industry average and prior year",
    "sampleAnswer": "Bubs Australia\u0027s liquidity ratio rose to 4.2:1 in 2021, up from 3.00:1 in 2020, and above the industry average of 3.5:1. This shows the business has more than enough current assets to cover its short-term debts, indicating strong liquidity, though it may also suggest an excessive amount of idle current assets."
  },
  {
    "id": "bs-2-currency-fluctuation-protection",
    "criteriaSource": "official",
    "marks": 2,
    "topic": "Finance",
    "source": "Barker 2022 Trial HSC (Q24b)",
    "stimulus": "Bubs Australia Ltd have developed a trusted reputation in the domestic market for their high-quality baby formula. Global shortages have led to a significant increase in demand from the United States. To increase production and business growth, they need to acquire a larger production facility.\n\nSelected financial data for Bubs Australia Ltd:\nRatio | 2020 | 2021\nLiquidity (current assets ÷ current liabilities) | 3.00 : 1 | 4.2 : 1\nSolvency (total liabilities ÷ total equity) | 190% | 330%\nNet profitability (net profit ÷ sales) | 87% | 54%\nExpense ratio (expenses ÷ sales) | 32% | 46%\n\n2021 Industry Averages: Liquidity 350%; Solvency 200%",
    "question": "Outline ONE way this business could protect itself from currency fluctuations when exporting its products to the United States.",
    "criteria": [
      { "marks": 2, "descriptor": "Sketches in general terms ONE method the business could use to protect itself from currency fluctuations when exporting its products to the United States" },
      { "marks": 1, "descriptor": "Identifies aspects of ONE method the business could use to protect itself from currency fluctuations" }
    ],
    "keyPoints": "global financial management, exchange rates, hedging (natural hedging), derivatives (forward exchange contracts, options contracts, swap contracts)",
    "sampleAnswer": "Bubs Australia could use a forward exchange contract, which locks in a fixed exchange rate for a future transaction. This protects the business from adverse movements in the AUD/USD exchange rate when it converts its US sales revenue back into Australian dollars, providing certainty over expected earnings."
  },
  {
    "id": "bs-6-mortgage-vs-lease",
    "criteriaSource": "official",
    "marks": 6,
    "topic": "Finance",
    "source": "Barker 2022 Trial HSC (Q24c)",
    "stimulus": "Bubs Australia Ltd have developed a trusted reputation in the domestic market for their high-quality baby formula. Global shortages have led to a significant increase in demand from the United States. To increase production and business growth, they need to acquire a larger production facility.\n\nSelected financial data for Bubs Australia Ltd:\nRatio | 2020 | 2021\nLiquidity (current assets ÷ current liabilities) | 3.00 : 1 | 4.2 : 1\nSolvency (total liabilities ÷ total equity) | 190% | 330%\nNet profitability (net profit ÷ sales) | 87% | 54%\nExpense ratio (expenses ÷ sales) | 32% | 46%\n\n2021 Industry Averages: Liquidity 350%; Solvency 200%",
    "question": "With reference to the stimulus, compare the use of a mortgage to a lease in order to finance the new production facility for Bubs Australia.",
    "criteria": [
      { "marks": 6, "descriptor": "Provides detailed similarities and differences between a mortgage and a lease to fund the new production facility" },
      { "marks": 5, "descriptor": "Provides similarities and differences between a mortgage and a lease to fund the new production facility" },
      { "marks": 4, "descriptor": "Provides some similarities and differences between a lease and a mortgage in relation to funding a new production facility" },
      { "marks": 3, "descriptor": "Sketches in general terms a mortgage and a lease" },
      { "marks": 2, "descriptor": "Sketches aspects of a mortgage or a lease" },
      { "marks": 1, "descriptor": "Identifies an aspect of a mortgage or lease" }
    ],
    "keyPoints": "external sources of finance, long-term debt – mortgage, debentures, unsecured notes, leasing; impact on gearing and solvency",
    "sampleAnswer": "A mortgage is a long-term loan secured against a specific asset, such as property, where the borrower makes regular principal and interest repayments until the debt is repaid, after which the business owns the asset outright. A lease is an agreement to pay for the use of an asset over time without necessarily owning it at the end of the term. Both provide Bubs Australia with a way to access the large production facility needed for growth without paying the full purchase price upfront, preserving cash flow. However, a mortgage adds to Bubs\u0027 liabilities and would further increase its already-rising gearing (330% in 2021, well above the 200% industry average), whereas leasing may have a smaller impact on the balance sheet and gearing, as ownership - and often the associated debt - remains with the lessor. A mortgage, however, builds equity in an asset for Bubs over time, which a lease does not."
  },
  {
    "id": "bs-1-common-law-stakeholder",
    "criteriaSource": "official",
    "marks": 1,
    "topic": "Human Resources",
    "source": "Cherrybrook Tech 2014 Trial HSC (Q21a)",
    "stimulus": "There are a number of legal influences that impact upon employment relations.",
    "question": "Identify ONE stakeholder that common law attempts to protect.",
    "criteria": [
      { "marks": 1, "descriptor": "Correctly identifies either the employee or employer" }
    ],
    "keyPoints": "common law, stakeholders – employee, employer",
    "sampleAnswer": "One stakeholder that common law attempts to protect is the employee, through obligations owed to them by their employer."
  },
  {
    "id": "bs-2-common-law-employee-obligations",
    "criteriaSource": "official",
    "marks": 2,
    "topic": "Human Resources",
    "source": "Cherrybrook Tech 2014 Trial HSC (Q21b)",
    "stimulus": "There are a number of legal influences that impact upon employment relations.",
    "question": "Outline TWO common law obligations of an employee.",
    "criteria": [
      { "marks": 2, "descriptor": "Outlines two employee obligations" },
      { "marks": 1, "descriptor": "Outlines one employee obligation" }
    ],
    "keyPoints": "employees must obey lawful and reasonable commands, use care and skill in the performance of work activities, act in good faith and in the interests of the employer",
    "sampleAnswer": "Under common law, employees have an obligation to obey their employer\u0027s lawful and reasonable commands, and to use reasonable care and skill in carrying out their work duties. Employees must also act in good faith, acting in their employer\u0027s best interests."
  },
  {
    "id": "bs-6-workplace-dispute-analysis",
    "criteriaSource": "derived",
    "marks": 6,
    "topic": "Human Resources",
    "source": "Cherrybrook Tech 2014 Trial HSC (Q21c)",
    "stimulus": "There are a number of legal influences that impact upon employment relations.",
    "question": "Analyse the cause of ONE workplace dispute and the strategy/ies used to resolve it. Use a specific example in your answer.",
    "criteria": [
      { "marks": 5, "descriptor": "Clearly identifies the components of ONE workplace dispute, the cause and the strategy used to resolve it. Shows the relationship between these components and relates implications for the business. Uses a specific example (5–6 marks)" },
      { "marks": 3, "descriptor": "Identifies ONE workplace dispute, the cause and the strategy used to resolve it. Makes the relationship evident between the components (3–4 marks)" },
      { "marks": 1, "descriptor": "Identifies a dispute, may state the cause and the strategy. Outlines some component of the dispute (1–2 marks)" }
    ],
    "keyPoints": "workplace disputes, resolution methods – negotiation, mediation, grievance procedures, involvement of courts and tribunals; must use a specific case study example",
    "sampleAnswer": "One example of a workplace dispute occurred in 2011, when Qantas grounded its entire fleet after prolonged negotiations with unions representing engineers, pilots and ground staff broke down over job security, wages and the outsourcing of jobs overseas. The underlying cause was disagreement over enterprise bargaining conditions, with employees taking protected industrial action such as work bans, which management viewed as damaging to the business, prompting the extreme step of a total lockout and grounding. The dispute was ultimately resolved through arbitration by Fair Work Australia (now the Fair Work Commission), which ended the industrial action and ordered both parties into compulsory conciliation and arbitration to negotiate a new enterprise agreement. This shows that when internal negotiation and industrial action fail, external intervention through the Fair Work Commission can force parties back to the table and impose a binding resolution, restoring normal operations, though it can cause significant short-term reputational and financial damage in the process."
  },
  {
    "id": "bs-2-operations-hr-interdependence",
    "criteriaSource": "derived",
    "marks": 2,
    "topic": "Operations",
    "source": "Cherrybrook Tech 2014 Trial HSC (Q22a)",
    "stimulus": null,
    "question": "Outline the interdependence of operations with ONE other key business function.",
    "criteria": [
      { "marks": 2, "descriptor": "Accurately outlines the interdependence with one key function" },
      { "marks": 1, "descriptor": "Partly outlines interdependence" }
    ],
    "keyPoints": "interdependence between operations and human resources (or marketing/finance)",
    "sampleAnswer": "Operations and human resources are interdependent because operations relies on HR to recruit, train and roster staff with the right skills to run production processes efficiently. In turn, HR relies on operations to determine staffing levels and skill requirements needed to meet output and quality targets."
  },
  {
    "id": "bs-1-critical-path-length-calc",
    "criteriaSource": "official",
    "marks": 1,
    "topic": "Operations",
    "source": "Cherrybrook Tech 2014 Trial HSC (Q22b-I)",
    "stimulus": "'You Won't Whine' is a business that grows grapes and makes wines using the following scheduling (network) method. The network diagram shows three parallel routes of activities running between a start node and a merge node: Route 1 = A then D; Route 2 = B running directly between the same two nodes; Route 3 = C then E. From the merge node, the diagram continues with F then G to project completion.\n\nKEY\nA = Prepare soil (8 weeks)\nB = Build casks and oil them (10 weeks)\nC = Contact retailers re: new season flavours (2 weeks)\nD = Tie and spray new growth (3 weeks)\nE = Recruit casual labour ('pickers') (4 weeks)\nF = Label red and green grapes (1 week)\nG = Harvest new crop (3 weeks)",
    "question": "Calculate the length in weeks for the critical path.",
    "criteria": [
      { "marks": 1, "descriptor": "Correctly calculates the critical path length" }
    ],
    "keyPoints": "critical path analysis, longest path through the network determines minimum project duration",
    "sampleAnswer": "The critical path is A–D–F–G, giving a total project length of 8 + 3 + 1 + 3 = 15 weeks."
  },
  {
    "id": "bs-3-critical-path-tool-usefulness",
    "criteriaSource": "official",
    "marks": 3,
    "topic": "Operations",
    "source": "Cherrybrook Tech 2014 Trial HSC (Q22b-II)",
    "stimulus": "'You Won't Whine' is a business that grows grapes and makes wines using the following scheduling (network) method. The network diagram shows three parallel routes of activities running between a start node and a merge node: Route 1 = A then D; Route 2 = B running directly between the same two nodes; Route 3 = C then E. From the merge node, the diagram continues with F then G to project completion.\n\nKEY\nA = Prepare soil (8 weeks)\nB = Build casks and oil them (10 weeks)\nC = Contact retailers re: new season flavours (2 weeks)\nD = Tie and spray new growth (3 weeks)\nE = Recruit casual labour ('pickers') (4 weeks)\nF = Label red and green grapes (1 week)\nG = Harvest new crop (3 weeks)",
    "question": "Why would the tool used above be useful for managers?",
    "criteria": [
      { "marks": 3, "descriptor": "Clearly and substantially explains why the tool would be useful" },
      { "marks": 2, "descriptor": "Partially explains usefulness" },
      { "marks": 1, "descriptor": "Outlines the tool" }
    ],
    "keyPoints": "critical path analysis, sequencing and scheduling, identifying the critical path and float, efficient allocation of resources, meeting deadlines, reducing costs",
    "sampleAnswer": "Critical path analysis is a scheduling tool that maps out the sequence of activities needed to complete a project and identifies the longest path, which determines the minimum time required for completion. This tool is useful for managers because it identifies which activities have no spare time (float) and must be completed on schedule to avoid delaying the whole project, such as preparing the soil and tying and spraying new growth in \u0027You Won\u0027t Whine\u0027s\u0027 network. This allows managers to prioritise resources and monitor these critical activities closely, helping the business meet deadlines and control costs."
  },
  {
    "id": "bs-4-technology-operations-process",
    "criteriaSource": "derived",
    "marks": 4,
    "topic": "Operations",
    "source": "Cherrybrook Tech 2014 Trial HSC (Q22c)",
    "stimulus": null,
    "question": "Explain how ONE operations process other than sequencing and scheduling contributes to the success of a business.",
    "criteria": [
      { "marks": 4, "descriptor": "Provides a well-structured response using correct business terms and examples that comprehensively explains how one operations process contributes to the success of a business" },
      { "marks": 3, "descriptor": "Partially explains using business terms and examples" },
      { "marks": 2, "descriptor": "Describes the process using business terms and examples" },
      { "marks": 1, "descriptor": "Outlines/refers to the business process" }
    ],
    "keyPoints": "operations processes – inputs, volume/variety/variation/visibility, technology, monitoring and control, task design, plant design, output",
    "sampleAnswer": "Technology refers to the equipment, machinery and systems a business uses in its transformation process. Investing in appropriate technology, such as automated machinery or software for tracking inventory, can contribute to a business\u0027s success by increasing the speed and consistency of production, reducing labour costs and human error, and improving overall product quality. For example, a manufacturer using computer-aided design and automated cutting technology can produce goods faster and to a more consistent standard than manual methods, helping it meet customer demand for both quality and reliable delivery, strengthening its competitiveness and profitability."
  },
  {
    "id": "bs-2-market-orientation-features",
    "criteriaSource": "official",
    "marks": 2,
    "topic": "Marketing",
    "source": "Cherrybrook Tech 2014 Trial HSC (Q23a)",
    "stimulus": "A large Melbourne-based beauty and hair supplier is expanding its operations by establishing another warehouse in Sydney. The company wants to adopt a marketing approach that will allow them to achieve marketing goals by focusing on customer needs and wants. Management have decided to use pricing strategies that will allow them to attract customers and increase sales.",
    "question": "Identify TWO features of the marketing approach.",
    "criteria": [
      { "marks": 2, "descriptor": "Identifies TWO features" },
      { "marks": 1, "descriptor": "Identifies ONE feature" }
    ],
    "keyPoints": "market orientation, market research, customer orientation, corporate social responsibility, relationship marketing",
    "sampleAnswer": "Two features of this business\u0027s market-oriented approach are conducting market research to understand its customers\u0027 needs and wants, and using pricing strategies specifically designed to attract customers and increase sales in its expanding Sydney market."
  },
  {
    "id": "bs-4-marketing-objectives-expansion",
    "criteriaSource": "official",
    "marks": 4,
    "topic": "Marketing",
    "source": "Cherrybrook Tech 2014 Trial HSC (Q23b)",
    "stimulus": "A large Melbourne-based beauty and hair supplier is expanding its operations by establishing another warehouse in Sydney. The company wants to adopt a marketing approach that will allow them to achieve marketing goals by focusing on customer needs and wants. Management have decided to use pricing strategies that will allow them to attract customers and increase sales.",
    "question": "Outline TWO marketing objectives that this business may aim to achieve.",
    "criteria": [
      { "marks": 4, "descriptor": "Outlines TWO marketing objectives relevant to this business; objectives are specific and measurable" },
      { "marks": 3, "descriptor": "Outlines TWO marketing objectives relevant to this business" },
      { "marks": 2, "descriptor": "Outlines ONE marketing objective relevant to this business" },
      { "marks": 1, "descriptor": "Identifies an aspect of a marketing objective" }
    ],
    "keyPoints": "increasing market share, expanding the product mix, maximising customer service; objectives should be specific and measurable, not financial objectives",
    "sampleAnswer": "One marketing objective this business may pursue is increasing market share, aiming to capture a greater proportion of the beauty and hair supply market in Sydney as it establishes its new warehouse there. A second objective is expanding its customer base, aiming to attract a specific number of new customers in the Sydney region within a set timeframe by using pricing strategies that appeal to price-conscious buyers. Both objectives are specific and measurable, allowing the business to track progress as it enters this new market."
  },
  {
    "id": "bs-4-pricing-strategies-recommend",
    "criteriaSource": "official",
    "marks": 4,
    "topic": "Marketing",
    "source": "Cherrybrook Tech 2014 Trial HSC (Q23c)",
    "stimulus": "A large Melbourne-based beauty and hair supplier is expanding its operations by establishing another warehouse in Sydney. The company wants to adopt a marketing approach that will allow them to achieve marketing goals by focusing on customer needs and wants. Management have decided to use pricing strategies that will allow them to attract customers and increase sales.",
    "question": "Recommend TWO appropriate pricing strategies that this business may use to attract customers and increase sales.",
    "criteria": [
      { "marks": 4, "descriptor": "Recommends TWO appropriate pricing strategies giving reasons in favour of these strategies; makes effective use of the information provided in determining appropriate strategies" },
      { "marks": 3, "descriptor": "Recommends TWO appropriate pricing strategies giving reasons in favour of these strategies, describing TWO strategies in detail" },
      { "marks": 2, "descriptor": "Recommends ONE appropriate pricing strategy giving reasons in favour of this strategy, OR outlines TWO pricing strategies" },
      { "marks": 1, "descriptor": "Outlines/identifies pricing strategy/ies" }
    ],
    "keyPoints": "price penetration, loss leader pricing; strategies must be justified by how they attract customers and increase sales (price skimming is generally not appropriate here)",
    "sampleAnswer": "This business could use price penetration when entering the Sydney market, setting prices lower than competitors to quickly attract price-sensitive customers and build market share in a new location. It could also use loss leader pricing, selling a small number of popular products below cost to draw customers into its range, who are then likely to purchase other, more profitable items. Both strategies directly support the business\u0027s goal of attracting customers and increasing sales, as they lower the barrier for new customers to try the business rather than established competitors."
  },
  {
    "id": "bs-2-gearing-change-comment",
    "criteriaSource": "official",
    "marks": 2,
    "topic": "Finance",
    "source": "Cherrybrook Tech 2014 Trial HSC (Q24a)",
    "stimulus": "Capex Ltd is an Australian medical supplies manufacturing company that is considering the purchase of new Hepa Filtration equipment from America to use in their manufacturing plant at a cost of $10 million. Management at Capex want to use this specialised equipment in order to improve the sterile conditions in which their products are produced and help their products to compete more effectively in the American market.\n\n'Capex Ltd' as at 30 June 2013 ($):\nCurrent assets – Cash $400,000; Accounts Receivable $2,500,000; Inventory $3,600,000\nCurrent liabilities – Overdraft $1,000,000; Accounts payable $9,600,000\nNon-current assets – Equipment $10,550,000; Property $26,000,000\nNon-current liability – Mortgage $15,000,000\nOwner's Equity – Capital $16,500,000; Net profit $950,000\nTotal assets = Total liabilities and equity = $43,050,000\n\nAdditional information: 2012 debt to equity ratio = 0.8:1; Industry average debt to equity ratio = 1.5:1",
    "question": "Comment on the change in gearing (Total liabilities ÷ Total Equity) between 2012 and 2013.",
    "criteria": [
      { "marks": 2, "descriptor": "Comments on the change of gearing between 2012 and 2013 and calculates the gearing in 2013" },
      { "marks": 1, "descriptor": "Either comments on the gearing in 2013 without using figures, or calculates the gearing in 2013 without commenting on the change in gearing" }
    ],
    "keyPoints": "gearing/debt to equity ratio (total liabilities ÷ owner's equity), financial risk, solvency",
    "sampleAnswer": "Gearing = total liabilities ÷ total equity = $25,600,000 ÷ $17,450,000 ≈ 1.47:1 in 2013, up sharply from 0.8:1 in 2012. This shows Capex Ltd has become significantly more reliant on debt, though the 2013 ratio is now close to the industry average of 1.5:1."
  },
  {
    "id": "bs-1-working-capital-calc",
    "criteriaSource": "derived",
    "marks": 1,
    "topic": "Finance",
    "source": "Cherrybrook Tech 2014 Trial HSC (Q24b)",
    "stimulus": "Capex Ltd is an Australian medical supplies manufacturing company that is considering the purchase of new Hepa Filtration equipment from America to use in their manufacturing plant at a cost of $10 million.\n\n'Capex Ltd' as at 30 June 2013 ($):\nCurrent assets – Cash $400,000; Accounts Receivable $2,500,000; Inventory $3,600,000\nCurrent liabilities – Overdraft $1,000,000; Accounts payable $9,600,000\nNon-current assets – Equipment $10,550,000; Property $26,000,000\nNon-current liability – Mortgage $15,000,000\nOwner's Equity – Capital $16,500,000; Net profit $950,000",
    "question": "Calculate the working capital for Capex Ltd in 2013.",
    "criteria": [
      { "marks": 1, "descriptor": "Correctly calculates the working capital" }
    ],
    "keyPoints": "working capital = current assets − current liabilities",
    "sampleAnswer": "Working capital = current assets − current liabilities = $6,500,000 − $10,600,000 = −$4,100,000."
  },
  {
    "id": "bs-2-debt-finance-definition",
    "criteriaSource": "official",
    "marks": 2,
    "topic": "Finance",
    "source": "Cherrybrook Tech 2014 Trial HSC (Q24c)",
    "stimulus": "Capex Ltd is an Australian medical supplies manufacturing company that is considering the purchase of new Hepa Filtration equipment from America to use in their manufacturing plant at a cost of $10 million.",
    "question": "What is debt finance?",
    "criteria": [
      { "marks": 2, "descriptor": "Accurately defines debt finance using terms such as 'external sources', 'borrowing', 'interest', etc." },
      { "marks": 1, "descriptor": "May refer to an aspect of debt finance" }
    ],
    "keyPoints": "external sources of finance, borrowing, principal and interest repayments, short-term/long-term debt, no loss of ownership",
    "sampleAnswer": "Debt finance is money borrowed by a business from an external source, such as a bank, which must be repaid along with interest over an agreed period. Unlike equity finance, it does not involve giving up any ownership of the business, but it does create an ongoing legal obligation to repay the debt."
  },
  {
    "id": "bs-3-finance-option-equipment-purchase",
    "criteriaSource": "official",
    "marks": 3,
    "topic": "Finance",
    "source": "Cherrybrook Tech 2014 Trial HSC (Q24d)",
    "stimulus": "Capex Ltd is an Australian medical supplies manufacturing company that is considering the purchase of new Hepa Filtration equipment from America to use in their manufacturing plant at a cost of $10 million. Management at Capex want to use this specialised equipment in order to improve the sterile conditions in which their products are produced and help their products to compete more effectively in the American market.\n\n'Capex Ltd' as at 30 June 2013 ($):\nCurrent assets – Cash $400,000; Accounts Receivable $2,500,000; Inventory $3,600,000\nCurrent liabilities – Overdraft $1,000,000; Accounts payable $9,600,000\nNon-current assets – Equipment $10,550,000; Property $26,000,000\nNon-current liability – Mortgage $15,000,000\nOwner's Equity – Capital $16,500,000; Net profit $950,000\n\nAdditional information: 2012 debt to equity ratio = 0.8:1; Industry average debt to equity ratio = 1.5:1",
    "question": "Propose and justify ONE type of finance option that would be appropriate for the purchase of the new equipment.",
    "criteria": [
      { "marks": 3, "descriptor": "Puts forward detailed reasons in favour of ONE appropriate type of finance for Capex Ltd, relating to information in the scenario" },
      { "marks": 2, "descriptor": "Puts forward reason(s) in favour of ONE appropriate type of finance for Capex Ltd" },
      { "marks": 1, "descriptor": "Sketches in general a source of finance" }
    ],
    "keyPoints": "equity finance (new share issue) is appropriate for large sums and avoids worsening gearing; short-term debt instruments would be insufficient; a mortgage would not suit equipment purchase and would worsen gearing further",
    "sampleAnswer": "Capex Ltd should use equity finance, such as a new share issue, to fund the $10 million equipment purchase. Given its 2012 debt-to-equity ratio of 0.8:1 was already below the industry average of 1.5:1 but its gearing rose sharply once the mortgage and overdraft are included, taking on further large-scale debt would push gearing well above the industry benchmark and increase financial risk. Equity finance avoids this, raising the substantial funds needed without adding to liabilities or requiring ongoing interest repayments."
  },
  {
    "id": "bs-3-global-financial-strategy-letter-of-credit",
    "criteriaSource": "official",
    "marks": 3,
    "topic": "Finance",
    "source": "Cherrybrook Tech 2014 Trial HSC (Q24e)",
    "stimulus": "Capex Ltd is an Australian medical supplies manufacturing company that is considering the purchase of new Hepa Filtration equipment from America to use in their manufacturing plant at a cost of $10 million. Management at Capex want to use this specialised equipment in order to improve the sterile conditions in which their products are produced and help their products to compete more effectively in the American market.",
    "question": "Explain ONE global financial management strategy that the management of Capex Ltd would need to consider in order to help them compete more effectively in the global market.",
    "criteria": [
      { "marks": 3, "descriptor": "Relates cause and effect of ONE appropriate global financial strategy that Capex could clearly use to compete more effectively globally" },
      { "marks": 2, "descriptor": "Sketches in general ONE appropriate global financial strategy that may help Capex compete more effectively" },
      { "marks": 1, "descriptor": "May refer to a global financial strategy" }
    ],
    "keyPoints": "exchange rates, hedging, derivatives, methods of international payment (letter of credit, payment in advance, clean payment, bill of exchange), interest rates",
    "sampleAnswer": "One global financial management strategy Capex Ltd should consider is using a letter of credit when trading with its American customers. This is a guarantee issued by the buyer\u0027s bank promising payment to Capex once the agreed conditions of the sale are met. This reduces the risk of non-payment when dealing with new or overseas customers, giving Capex greater confidence and security as it expands its competitiveness in the American market."
  }
,
  {
    "id": "bs-2-operations-influences",
    "criteriaSource": "official",
    "marks": 2,
    "topic": "Operations",
    "source": "Cherrybrook Tech 2015 Trial HSC (Q21a)",
    "stimulus": null,
    "question": "Identify TWO influences on the operations function of a business.",
    "criteria": [
      { "marks": 2, "descriptor": "Identifies TWO influences on a business's operations function" },
      { "marks": 1, "descriptor": "Identifies ONE influence on a business's operations function" }
    ],
    "keyPoints": "Globalisation, technology, quality expectations, cost-based competition, government policies, legal regulation, environmental sustainability",
    "sampleAnswer": "Two influences on the operations function of a business are globalisation, which increases access to overseas suppliers and markets, and technology, which can improve the efficiency and quality of the production process."
  },
  {
    "id": "bs-2-jit-advantage",
    "criteriaSource": "official",
    "marks": 2,
    "topic": "Operations",
    "source": "Cherrybrook Tech 2015 Trial HSC (Q21b)",
    "stimulus": null,
    "question": "Outline an advantage of using a just-in-time (JIT) approach to inventory management.",
    "criteria": [
      { "marks": 2, "descriptor": "Outlines an advantage of using a JIT approach to inventory management" },
      { "marks": 1, "descriptor": "Identifies an advantage of using a JIT approach to inventory management" }
    ],
    "keyPoints": "Allows retailers to display a wider range of products; saves money on holding and insurance costs; shrinkage and obsolescence costs are minimised",
    "sampleAnswer": "Just-in-time (JIT) is an inventory management approach where materials or stock arrive only as they are needed for production or sale. One advantage of JIT is that it minimises the amount of capital tied up in holding stock, reducing storage, insurance and obsolescence costs for the business."
  },
  {
    "id": "bs-2-customer-service-success",
    "criteriaSource": "official",
    "marks": 2,
    "topic": "Marketing",
    "source": "Cherrybrook Tech 2015 Trial HSC (Q21c)",
    "stimulus": null,
    "question": "Describe how customer service contributes to the success of a business.",
    "criteria": [
      { "marks": 2, "descriptor": "Describes how customer service contributes to the success of a business" },
      { "marks": 1, "descriptor": "Identifies how customer service contributes to the success of a business" }
    ],
    "keyPoints": "Meeting/exceeding customer expectations builds loyalty and repeat business; positive reputation attracts new customers; long-term customer relationships support long-run success",
    "sampleAnswer": "Providing high-quality customer service helps a business meet or exceed customer expectations, which builds satisfaction and encourages repeat purchases. This creates customer loyalty and positive word of mouth, attracting new customers and supporting the business\u0027s long-term reputation and sales."
  },
  {
    "id": "bs-4-improve-quality-approaches",
    "criteriaSource": "derived",
    "marks": 4,
    "topic": "Operations",
    "source": "Cherrybrook Tech 2015 Trial HSC (Q21d)",
    "stimulus": null,
    "question": "Recommend TWO approaches that an operations manager can use to improve quality within a business.",
    "criteria": [
      { "marks": "3-4", "descriptor": "Recommends TWO approaches an operations manager can use to achieve quality in the business" },
      { "marks": 2, "descriptor": "Recommends ONE approach an operations manager can use to achieve quality in the business" },
      { "marks": 1, "descriptor": "Identifies ONE approach an operations manager can use to achieve quality in the business" }
    ],
    "keyPoints": "Quality control, quality assurance, quality improvement (e.g. ISO 9000, TQM)",
    "sampleAnswer": "An operations manager could use quality control, which involves inspecting finished goods against set standards and removing or fixing any that don\u0027t meet them, to catch defects before they reach customers. They could also implement quality assurance, which sets standardised methods and procedures throughout the production process to prevent defects from occurring in the first place, such as through accreditation like ISO 9000. Using both approaches together helps ensure consistent, high-quality output while reducing the cost of reworking or discarding faulty goods."
  },
  {
    "id": "bs-1-non-monetary-benefit-psl",
    "criteriaSource": "official",
    "marks": 1,
    "topic": "Human Resources",
    "source": "Cherrybrook Tech 2015 Trial HSC (Q22a)",
    "stimulus": "Performance Sports Ltd (PSL) is a retailer of sports clothing, sunglasses and footwear. They are developing a new maintenance process with a focus on staff retention and wellbeing.",
    "question": "Identify one non-monetary benefit that PSL could offer staff to help retention in the workplace.",
    "criteria": [
      { "marks": 1, "descriptor": "Identifies a non-monetary benefit" }
    ],
    "keyPoints": "Must reflect a non-financial value such as social activities, safe work environment, holidays, child care, flexible work arrangements",
    "sampleAnswer": "One non-monetary benefit PSL could offer is flexible working arrangements, allowing staff to better balance work and personal commitments."
  },
  {
    "id": "bs-3-employee-participation-psl",
    "criteriaSource": "official",
    "marks": 3,
    "topic": "Human Resources",
    "source": "Cherrybrook Tech 2015 Trial HSC (Q22b)",
    "stimulus": "Performance Sports Ltd (PSL) is a retailer of sports clothing, sunglasses and footwear. They are developing a new maintenance process with a focus on staff retention and wellbeing.",
    "question": "Explain one employee participation strategy that may help maximise staff well-being for PSL.",
    "criteria": [
      { "marks": 3, "descriptor": "Shows the cause and effect of one employee participation strategy, linked to staff well-being" },
      { "marks": 2, "descriptor": "Gives characteristics and features of one employee participation strategy" },
      { "marks": 1, "descriptor": "Sketches in general terms one employee participation strategy" }
    ],
    "keyPoints": "Team briefings, joint consultative committees, employee surveys and feedback, participation through ownership, participation in collective bargaining",
    "sampleAnswer": "Employee participation involves involving staff in workplace decision-making. PSL could introduce regular team briefings, where management shares information and staff can raise concerns or suggestions about their roles. This gives employees a sense of ownership and involvement in the business, increasing job satisfaction and a feeling of being valued. As a result, staff are likely to feel more engaged and supported, improving their overall wellbeing and encouraging them to remain with PSL."
  },
  {
    "id": "bs-6-family-friendly-arrangements-psl",
    "criteriaSource": "derived",
    "marks": 6,
    "topic": "Human Resources",
    "source": "Cherrybrook Tech 2015 Trial HSC (Q22c)",
    "stimulus": "Performance Sports Ltd (PSL) is a retailer of sports clothing, sunglasses and footwear. They are developing a new maintenance process with a focus on staff retention and wellbeing.",
    "question": "Analyse the implementation of family friendly work arrangements for the employees of PSL and the business itself.",
    "criteria": [
      { "marks": "5-6", "descriptor": "Identifies the components and the relationship between family friendly arrangements for employees and business and relates the implications" },
      { "marks": "3-4", "descriptor": "Shows the cause and effect of family friendly work arrangements for employees and the business" },
      { "marks": "1-2", "descriptor": "Gives characteristics and features of family friendly work arrangements" }
    ],
    "keyPoints": "Home-based work, flexible hours, child care, part-time work, job sharing, career breaks; benefits to staff (morale, reduced absenteeism, retention); benefits to business (lower separation/recruitment/training costs, reduced absenteeism costs, positive image)",
    "sampleAnswer": "Family friendly work arrangements are policies that help employees balance work responsibilities with family and personal commitments, such as flexible hours, part-time work, job sharing or access to childcare support. For PSL\u0027s employees, these arrangements would reduce stress and improve work-life balance, increasing job satisfaction and morale, particularly for staff with caring responsibilities. This is likely to reduce absenteeism, as employees have more flexibility to manage personal obligations without needing to take unplanned leave, and encourages staff to remain with the business rather than seeking more flexible employment elsewhere. For PSL as a business, these benefits translate into lower staff turnover, reducing the recruitment, selection and training costs associated with constantly replacing staff, and reduced costs linked to absenteeism. Implementing family friendly arrangements also builds a positive employer image, helping PSL attract quality candidates in a competitive retail labour market. Overall, family friendly arrangements create a mutually beneficial relationship: improved employee wellbeing directly drives the retention and productivity outcomes PSL is seeking through its new maintenance process."
  },
  {
    "id": "bs-2-consumer-law-purpose",
    "criteriaSource": "official",
    "marks": 2,
    "topic": "Marketing",
    "source": "Cherrybrook Tech 2015 Trial HSC (Q23a)",
    "stimulus": null,
    "question": "Identify one consumer law and outline one purpose of this legislation.",
    "criteria": [
      { "marks": 2, "descriptor": "Identifies one law and sketches in general terms the purpose of the law" },
      { "marks": 1, "descriptor": "Identifies one law OR sketches in general terms the purpose of a law" }
    ],
    "keyPoints": "Competition and Consumer Act 2010; Trade Practices Act 1974",
    "sampleAnswer": "One consumer law is the Competition and Consumer Act 2010. One purpose of this legislation is to protect consumers from unfair trading practices, such as misleading advertising and unsafe products, ensuring businesses compete fairly and consumers can trust the goods and services they purchase."
  },
  {
    "id": "bs-2-measuring-marketing-plan-success",
    "criteriaSource": "official",
    "marks": 2,
    "topic": "Marketing",
    "source": "Cherrybrook Tech 2015 Trial HSC (Q23b)",
    "stimulus": null,
    "question": "Describe one method of measuring the success of a marketing plan.",
    "criteria": [
      { "marks": 2, "descriptor": "Gives characteristics and features of one method of measuring the success of the marketing plan" },
      { "marks": 1, "descriptor": "Sketches in general terms one method of measuring the success of the marketing plan" }
    ],
    "keyPoints": "Sales analysis, market share analysis, marketing profitability analysis",
    "sampleAnswer": "One method of measuring the success of a marketing plan is sales analysis, which compares actual sales figures against the targets set in the plan. This allows a business to determine whether its marketing strategies are effectively driving sales growth and to identify areas requiring adjustment."
  },
  {
    "id": "bs-6-communication-process-target-market",
    "criteriaSource": "derived",
    "marks": 6,
    "topic": "Marketing",
    "source": "Cherrybrook Tech 2015 Trial HSC (Q23c)",
    "stimulus": null,
    "question": "Using specific example/s, evaluate one communication process that a business/es uses to get their message to the target market.",
    "criteria": [
      { "marks": "5-6", "descriptor": "Makes a judgement based on criteria of the value of one communication process reaching the target market, using specific examples" },
      { "marks": "3-4", "descriptor": "Makes a judgement based on criteria of the value of one communication process reaching the target market with no specific examples, OR shows the relationship between one communication process and the target market including specific examples" },
      { "marks": "1-2", "descriptor": "May refer to a marketing strategy, may include specific examples" }
    ],
    "keyPoints": "Opinion leaders, word of mouth",
    "sampleAnswer": "Word of mouth is a communication process in which consumers share opinions and recommendations about a product informally with others, often influenced by opinion leaders whose views are respected within a social group. This can be a highly valuable way for a business to reach its target market, as recommendations from friends, family or trusted figures are generally seen as more credible and persuasive than paid advertising, building trust quickly at little to no direct cost. For example, businesses such as Lorna Jane have used social media influencers as opinion leaders to generate word-of-mouth recommendations among their target market of young, health-conscious consumers, driving strong brand awareness and sales. However, word of mouth is difficult for a business to fully control, meaning negative experiences can also spread quickly and damage a brand\u0027s reputation. Overall, word of mouth is a valuable and cost-effective communication process when a business actively cultivates positive relationships with opinion leaders and satisfied customers, though the lack of control over the message is a genuine limitation."
  },
  {
    "id": "bs-2-house-party-liquidity",
    "criteriaSource": "official",
    "marks": 2,
    "topic": "Finance",
    "source": "Cherrybrook Tech 2015 Trial HSC (Q24a)",
    "stimulus": "Balance Sheet as at 30 June 2015 - House Party Pty Ltd\nCurrent Assets: Cash $55,000; Inventories $20,000; Accounts Receivable $45,000\nCurrent Liabilities: Accounts Payable $89,000; Overdraft $35,000\nNon-current Assets: Plant and Equipment $75,000; Land and Buildings $160,000\nNon-current Liability: Mortgage $550,000\nOwner's Equity: Capital $100,000; Net Profit $45,000\nAdditional Information: Liquidity industry average 2:1; Sales $300,000; Accounts receivable turnover ratio industry average 26 days",
    "question": "Calculate and comment on House Party's liquidity (current assets/current liability).",
    "criteria": [
      { "marks": 2, "descriptor": "Calculates and comments on House Party's liquidity" },
      { "marks": 1, "descriptor": "Calculates House Party's liquidity" }
    ],
    "keyPoints": "Current assets $120,000 ÷ current liabilities $124,000 = 0.97:1; below industry average of 2:1, indicating poor liquidity",
    "sampleAnswer": "Liquidity = current assets ÷ current liabilities = $120,000 ÷ $124,000 = 0.97:1. This is well below the industry average of 2:1, indicating House Party has poor liquidity and may struggle to meet its short-term debts as they fall due."
  },
  {
    "id": "bs-2-house-party-efficiency",
    "criteriaSource": "official",
    "marks": 2,
    "topic": "Finance",
    "source": "Cherrybrook Tech 2015 Trial HSC (Q24b)",
    "stimulus": "Balance Sheet as at 30 June 2015 - House Party Pty Ltd\nCurrent Assets: Cash $55,000; Inventories $20,000; Accounts Receivable $45,000\nCurrent Liabilities: Accounts Payable $89,000; Overdraft $35,000\nNon-current Assets: Plant and Equipment $75,000; Land and Buildings $160,000\nNon-current Liability: Mortgage $550,000\nOwner's Equity: Capital $100,000; Net Profit $45,000\nAdditional Information: Liquidity industry average 2:1; Sales $300,000; Accounts receivable turnover ratio industry average 26 days",
    "question": "Calculate and comment on House Party's efficiency (sales/accounts receivables).",
    "criteria": [
      { "marks": 2, "descriptor": "Calculates and comments on House Party's efficiency" },
      { "marks": 1, "descriptor": "Calculates House Party's efficiency" }
    ],
    "keyPoints": "Accounts receivable turnover = (accounts receivable ÷ sales) × 365 ≈ 54.75 or 55 days; well above the industry average of 26 days, indicating poor efficiency in collecting debts",
    "sampleAnswer": "Accounts receivable turnover = (accounts receivable ÷ sales) × 365 = ($45,000 ÷ $300,000) × 365 ≈ 55 days. This is well above the industry average of 26 days, showing House Party is inefficient at collecting payments from its debtors."
  },
  {
    "id": "bs-2-house-party-improve-liquidity",
    "criteriaSource": "official",
    "marks": 2,
    "topic": "Finance",
    "source": "Cherrybrook Tech 2015 Trial HSC (Q24c)",
    "stimulus": "Balance Sheet as at 30 June 2015 - House Party Pty Ltd\nCurrent Assets: Cash $55,000; Inventories $20,000; Accounts Receivable $45,000\nCurrent Liabilities: Accounts Payable $89,000; Overdraft $35,000\nNon-current Assets: Plant and Equipment $75,000; Land and Buildings $160,000\nNon-current Liability: Mortgage $550,000\nOwner's Equity: Capital $100,000; Net Profit $45,000\nAdditional Information: Liquidity industry average 2:1; Sales $300,000; Accounts receivable turnover ratio industry average 26 days",
    "question": "Recommend ONE strategy that management at House Party can implement to improve liquidity.",
    "criteria": [
      { "marks": 2, "descriptor": "Recommends ONE strategy management at House Party can implement to improve liquidity" },
      { "marks": 1, "descriptor": "Identifies ONE strategy management at House Party can implement to improve liquidity" }
    ],
    "keyPoints": "Adopting JIT, tightening credit policy, factoring, timing of accounts payable, obtaining cheaper finance, leasing, sale and leaseback, taking advantage of discounts/interest-free periods, obtaining an overdraft as a temporary solution",
    "sampleAnswer": "House Party could negotiate longer payment terms with its suppliers, delaying when accounts payable must be paid. This would free up cash in the short term, giving the business more time to convert its current assets, such as inventory and receivables, into cash before its bills fall due, directly improving its liquidity position."
  },
  {
    "id": "bs-4-house-party-improve-efficiency",
    "criteriaSource": "derived",
    "marks": 4,
    "topic": "Finance",
    "source": "Cherrybrook Tech 2015 Trial HSC (Q24d)",
    "stimulus": "Balance Sheet as at 30 June 2015 - House Party Pty Ltd\nCurrent Assets: Cash $55,000; Inventories $20,000; Accounts Receivable $45,000\nCurrent Liabilities: Accounts Payable $89,000; Overdraft $35,000\nNon-current Assets: Plant and Equipment $75,000; Land and Buildings $160,000\nNon-current Liability: Mortgage $550,000\nOwner's Equity: Capital $100,000; Net Profit $45,000\nAdditional Information: Liquidity industry average 2:1; Sales $300,000; Accounts receivable turnover ratio industry average 26 days",
    "question": "Justify TWO strategies that management at House Party should implement to improve efficiency.",
    "criteria": [
      { "marks": "3-4", "descriptor": "Recommends TWO strategies management at House Party can implement to improve efficiency" },
      { "marks": 2, "descriptor": "Recommends ONE strategy management at House Party can implement to improve efficiency" },
      { "marks": 1, "descriptor": "Identifies ONE strategy management at House Party can implement to improve efficiency" }
    ],
    "keyPoints": "Tighten credit policy, discounts for early payment, increase cash sales, factoring, changing the sales mix, decrease expenses",
    "sampleAnswer": "House Party could tighten its credit policy, reducing the 55-day average collection period closer to the 26-day industry benchmark by setting stricter payment terms for customers, which would speed up cash collection and reduce the risk of bad debts. It could also offer discounts for early payment, giving customers a financial incentive to pay sooner, which similarly reduces the accounts receivable turnover period. Both strategies directly target House Party\u0027s poor efficiency by encouraging faster conversion of credit sales into cash, improving the business\u0027s overall cash position without needing to change its underlying sales strategy."
  },
  {
    "id": "bs-4-naturally-wild-sociocultural-psychological",
    "criteriaSource": "official",
    "marks": 4,
    "topic": "Marketing",
    "source": "Knox 2021 Trial HSC (Q21a)",
    "stimulus": "\"Naturally Wild\" is an Australian producer of kangaroo and crocodile meat that is considering exporting into Asia.",
    "question": "Examine ONE sociocultural and ONE psychological influence that marketing management need to consider in this business.",
    "criteria": [
      { "marks": 4, "descriptor": "Comprehensively inquires into ONE sociocultural and ONE psychological influence that marketing management need to consider in Naturally Wild" },
      { "marks": 3, "descriptor": "Comprehensive inquiry into ONE influence and less detail into the other" },
      { "marks": 2, "descriptor": "Sketches in general terms sociocultural and psychological influences" },
      { "marks": 1, "descriptor": "Limited information" }
    ],
    "keyPoints": "Sociocultural: cultural/religious attitudes to eating kangaroo/crocodile meat in Asian markets; Psychological: consumer perceptions, motivation and attitudes towards trying novel/exotic meats",
    "sampleAnswer": "One sociocultural influence Naturally Wild must consider is that in many Asian markets, there are strong cultural and religious attitudes towards food, and kangaroo and crocodile meat may be viewed as unusual or unacceptable by consumers unfamiliar with these products, requiring careful market entry strategies. One psychological influence is consumer perception and attitude towards trying novel or exotic meats; potential customers may associate these products with risk or unfamiliarity, creating hesitation to purchase. Naturally Wild would need to use marketing, such as targeted education and sampling, to shift these perceptions and build trust in its products among Asian consumers."
  },
  {
    "id": "bs-6-naturally-wild-globalisation-marketing",
    "criteriaSource": "derived",
    "marks": 6,
    "topic": "Marketing",
    "source": "Knox 2021 Trial HSC (Q21b)",
    "stimulus": "\"Naturally Wild\" is an Australian producer of kangaroo and crocodile meat that is considering exporting into Asia.",
    "question": "How does globalisation affect marketing management at Naturally Wild?",
    "criteria": [
      { "marks": 6, "descriptor": "Comprehensively details how globalisation affects marketing management at Naturally Wild" },
      { "marks": "4-5", "descriptor": "Provides how globalisation affects marketing management at Naturally Wild" },
      { "marks": 3, "descriptor": "Relates cause and effect of globalisation and marketing management, with superficial engagement with the stimulus" },
      { "marks": 2, "descriptor": "Sketches in general terms globalisation/marketing management" },
      { "marks": 1, "descriptor": "Limited information" }
    ],
    "keyPoints": "Global marketing management: standardisation, customisation, global pricing, global branding, competitive positioning",
    "sampleAnswer": "Globalisation refers to the increasing integration and interdependence of national economies, allowing businesses to access international markets more easily. For Naturally Wild, globalisation creates the opportunity to export kangaroo and crocodile meat into Asian markets, significantly expanding its potential customer base beyond Australia. However, globalisation also means Naturally Wild\u0027s marketing management must decide between standardisation, using the same marketing approach across markets to reduce costs, and customisation, adapting its product, promotion and packaging to suit local Asian tastes, cultural attitudes and consumption habits, which are likely to differ significantly from the Australian market. Given the sensitivity around unfamiliar meats, some degree of customisation - such as adapting recipes, packaging and advertising messages to local preferences - is likely necessary to gain acceptance. Globalisation also exposes Naturally Wild to increased international competition and the need to consider global pricing and positioning strategies to remain competitive against local and other international meat suppliers in these new markets."
  },
  {
    "id": "bs-2-eucalife-legal-regulation",
    "criteriaSource": "official",
    "marks": 2,
    "topic": "Operations",
    "source": "Knox 2021 Trial HSC (Q22a)",
    "stimulus": "EucaLife, an Australian-based manufacturer of wood furniture has recently experienced an increase in demand for desks and cabinetry. This has resulted in the purchasing of new machinery to manufacture the furniture and a larger warehouse to store their products before delivery. However, sourcing high quality timber within Australia has become a challenge due to recent Australian bushfires.",
    "question": "How can EucaLife's operations be influenced by ONE legal regulation?",
    "criteria": [
      { "marks": 2, "descriptor": "Comprehensively details how EucaLife's operations can be influenced by ONE legal regulation, naming the legislation and integrating the stimulus" },
      { "marks": 1, "descriptor": "Sketches in general terms/limited information" }
    ],
    "keyPoints": "Work Health and Safety Act, Fair Work Act, Competition and Consumer Act",
    "sampleAnswer": "EucaLife\u0027s operations would be influenced by the Work Health and Safety Act, which requires the business to provide a safe working environment for staff operating its new machinery and working in its larger warehouse. Compliance requires proper staff training and safety procedures, adding to operational costs but reducing the risk of injury and legal liability."
  },
  {
    "id": "bs-4-eucalife-holding-stock",
    "criteriaSource": "official",
    "marks": 4,
    "topic": "Operations",
    "source": "Knox 2021 Trial HSC (Q22b)",
    "stimulus": "EucaLife, an Australian-based manufacturer of wood furniture has recently experienced an increase in demand for desks and cabinetry. This has resulted in the purchasing of new machinery to manufacture the furniture and a larger warehouse to store their products before delivery. However, sourcing high quality timber within Australia has become a challenge due to recent Australian bushfires.",
    "question": "Outline the advantages and disadvantages of holding stock at EucaLife.",
    "criteria": [
      { "marks": 4, "descriptor": "Details advantages and disadvantages of holding stock at EucaLife (at least two of each) with stimulus examples" },
      { "marks": 3, "descriptor": "Some detail on advantages and disadvantages of holding stock at EucaLife (three in total)" },
      { "marks": 2, "descriptor": "Sketches in general terms on holding stock" },
      { "marks": 1, "descriptor": "Limited information on stock" }
    ],
    "keyPoints": "Advantages: mitigates risk of supply shortages (e.g. bushfire-affected timber), meets unexpected demand, bulk-buy discounts; Disadvantages: storage/insurance/handling costs in larger warehouse, capital tied up, risk of obsolescence",
    "sampleAnswer": "Holding stock has advantages for EucaLife, such as protecting against the current shortage of high-quality Australian timber caused by bushfires, ensuring the business can still meet increased demand for desks and cabinetry even when supply is disrupted. It also allows EucaLife to take advantage of bulk-buying discounts when good quality timber is available. However, holding stock also has disadvantages, including the storage, insurance and handling costs associated with its new, larger warehouse, and the risk that capital tied up in stock could be used elsewhere in the business. There is also a risk of stock becoming obsolete or damaged while held in storage."
  },
  {
    "id": "bs-4-eucalife-global-sourcing",
    "criteriaSource": "official",
    "marks": 4,
    "topic": "Operations",
    "source": "Knox 2021 Trial HSC (Q22c)",
    "stimulus": "EucaLife, an Australian-based manufacturer of wood furniture has recently experienced an increase in demand for desks and cabinetry. This has resulted in the purchasing of new machinery to manufacture the furniture and a larger warehouse to store their products before delivery. However, sourcing high quality timber within Australia has become a challenge due to recent Australian bushfires.",
    "question": "Assess the use of global sourcing as an operations strategy for this business.",
    "criteria": [
      { "marks": 4, "descriptor": "Comprehensive judgement on the use of global sourcing as an operations strategy at EucaLife, with stimulus integration and at least two detailed judgement points" },
      { "marks": 3, "descriptor": "Some judgement on the use of global sourcing as an operations strategy at EucaLife, with stimulus integration" },
      { "marks": 2, "descriptor": "Sketches in general terms on the use of global sourcing" },
      { "marks": 1, "descriptor": "Limited information on global sourcing" }
    ],
    "keyPoints": "Access to inputs when domestic supply is constrained (e.g. bushfire-affected timber), potential cost/quality trade-offs, flexibility vs. loss of Australian-made positioning",
    "sampleAnswer": "Global sourcing would allow EucaLife to purchase timber from international suppliers, addressing the current shortage of high-quality Australian timber caused by bushfires and ensuring it can continue to meet rising demand for its furniture, and could reduce input costs if overseas timber is cheaper than local supply. However, global sourcing may compromise the consistency and quality EucaLife requires for its furniture, and longer international supply chains introduce risks of delay and additional shipping costs. It may also undermine EucaLife\u0027s positioning as an Australian-made business if customers value locally sourced materials. Overall, global sourcing is a reasonable short-term solution to the timber shortage, but EucaLife should weigh this against the risk of compromising its quality standards and Australian-made brand identity."
  },
  {
    "id": "bs-2-lobe-financial-report-limitation",
    "criteriaSource": "official",
    "marks": 2,
    "topic": "Finance",
    "source": "Knox 2021 Trial HSC (Q23a)",
    "stimulus": "Lobe Ltd. is a leading Australian retailer of shoes. As part of Lobe's expansion plans, it is looking to acquire Vibe Shoes. Lobe has a debt-to-equity ratio (total liabilities/total equity) of 2.73:1. An excerpt of the balance sheet for Vibe Shoes:\nVibe Shoes Balance Sheet\nCurrent Assets: Cash $10,000; Inventory $15,000\nNon-current Assets: Building $120,000; Vehicles $40,000; Research and Development $20,000\nTotal Assets: $205,000\nCurrent Liabilities: Accounts Payable $20,000\nNon-current Liabilities: Mortgage $60,000\nOwners' Equity: Retained profits $125,000\nTotal liabilities + Owners' Equity: $205,000\nAdditional information: Industry average (debt to equity ratio): 1:1",
    "question": "Explain ONE limitation of financial reports that Lobe must consider as part of its acquisition of Vibe Shoes.",
    "criteria": [
      { "marks": 2, "descriptor": "Relates cause and effect of ONE limitation of financial reports that Lobe must consider, referencing the stimulus from the balance sheet" },
      { "marks": 1, "descriptor": "Limited information" }
    ],
    "keyPoints": "Valuing assets such as the $120,000 building (market value vs historical cost, depreciation, appreciation); capitalising expenses such as $20,000 Research and Development",
    "sampleAnswer": "One limitation is the valuation of assets, as Vibe Shoes\u0027 $120,000 building is likely recorded at historical cost rather than current market value, meaning it may be worth more or less than shown on the balance sheet. This could cause Lobe to overpay or underpay for the business based on inaccurate figures."
  },
  {
    "id": "bs-2-lobe-government-influence-finance",
    "criteriaSource": "official",
    "marks": 2,
    "topic": "Finance",
    "source": "Knox 2021 Trial HSC (Q23b)",
    "stimulus": "Lobe Ltd. is a leading Australian retailer of shoes. As part of Lobe's expansion plans, it is looking to acquire Vibe Shoes. Lobe has a debt-to-equity ratio (total liabilities/total equity) of 2.73:1.",
    "question": "How does the influence of government impact the financial management of Lobe?",
    "criteria": [
      { "marks": 2, "descriptor": "Details how the influence of government impacts the financial management of Lobe" },
      { "marks": 1, "descriptor": "Limited information" }
    ],
    "keyPoints": "ASIC (Corporations Act compliance, financial reporting obligations); company taxation (direct tax on profits)",
    "sampleAnswer": "The government influences Lobe\u0027s financial management through the Australian Securities and Investments Commission (ASIC), which requires companies to comply with the Corporations Act by preparing and lodging accurate financial reports. Company taxation also directly reduces Lobe\u0027s after-tax profits, affecting the funds available for its planned acquisition of Vibe Shoes."
  },
  {
    "id": "bs-6-lobe-source-of-finance",
    "criteriaSource": "derived",
    "marks": 6,
    "topic": "Finance",
    "source": "Knox 2021 Trial HSC (Q23c)",
    "stimulus": "Lobe Ltd. is a leading Australian retailer of shoes. As part of Lobe's expansion plans, it is looking to acquire Vibe Shoes. Lobe has a debt-to-equity ratio (total liabilities/total equity) of 2.73:1. An excerpt of the balance sheet for Vibe Shoes:\nVibe Shoes Balance Sheet\nCurrent Assets: Cash $10,000; Inventory $15,000\nNon-current Assets: Building $120,000; Vehicles $40,000; Research and Development $20,000\nTotal Assets: $205,000\nCurrent Liabilities: Accounts Payable $20,000\nNon-current Liabilities: Mortgage $60,000\nOwners' Equity: Retained profits $125,000\nTotal liabilities + Owners' Equity: $205,000\nAdditional information: Industry average (debt to equity ratio): 1:1",
    "question": "Discuss ONE appropriate source of finance that Lobe could use to fund the acquisition of Vibe Shoes.",
    "criteria": [
      { "marks": 6, "descriptor": "Comprehensively provides advantages and disadvantages of an appropriate source of finance that Lobe could use to fund the acquisition of Vibe Shoes" },
      { "marks": "4-5", "descriptor": "Provides some advantages and disadvantages of an appropriate source of finance that Lobe could use to fund the acquisition of Vibe Shoes" },
      { "marks": 3, "descriptor": "Relates cause and effect or describes a source of finance, appropriate to the stimulus" },
      { "marks": "1-2", "descriptor": "Sketches/limited information" }
    ],
    "keyPoints": "Equity is most appropriate given Lobe's already-high debt-to-equity ratio of 2.73:1 (well above industry average 1:1); e.g. rights issue, share purchase plan, placement, new share issue",
    "sampleAnswer": "Given Lobe\u0027s debt-to-equity ratio of 2.73:1 is already well above the industry average of 1:1, equity finance, such as a rights issue or share purchase plan, would be an appropriate source of finance to fund the acquisition of Vibe Shoes. A rights issue would allow Lobe to raise funds by offering new shares to its existing shareholders in proportion to their current holdings, without diluting their ownership if they take up their entitlement. A key advantage of using equity rather than further debt is that it would not worsen Lobe\u0027s already high gearing, reducing its financial risk and the burden of additional interest repayments that could strain cash flow. However, issuing new shares does dilute the ownership and control of any shareholders who do not participate, and it can reduce earnings per share in the short term by increasing the number of shares on issue. Despite this, given Lobe\u0027s current financial risk, equity finance is more appropriate than taking on additional debt to fund the acquisition."
  },
  {
    "id": "bs-2-mara-enterprise-agreement",
    "criteriaSource": "official",
    "marks": 2,
    "topic": "Human Resources",
    "source": "Knox 2021 Trial HSC (Q24a)",
    "stimulus": "Mara Clothing has 1000 staff employed in their retail stores in Australia. The business had previously used awards as the basis of employment contracts for pay and conditions. Staff and management are considering the use of a single enterprise agreement.\nStaff turnover has increased from 10% to 18%, decreased productivity due to increased number of disputes between employees.",
    "question": "Justify the use of an enterprise agreement at Mara Clothing.",
    "criteria": [
      { "marks": 2, "descriptor": "Provides information that justifies the use of an enterprise agreement, with reference to the stimulus" },
      { "marks": 1, "descriptor": "Limited information, or correct justification with no stimulus" }
    ],
    "keyPoints": "Tailored pay/conditions above award minimums, consultative process, addresses high staff turnover (18%), includes dispute resolution methods",
    "sampleAnswer": "An enterprise agreement would allow Mara Clothing to negotiate pay and conditions directly with its 1,000 staff, tailored above the award minimums it currently uses. This consultative process could help address the rise in staff turnover from 10% to 18% and reduce disputes, as staff who help shape their own conditions are likely to be more satisfied and engaged."
  },
  {
    "id": "bs-3-mara-grievance-procedures",
    "criteriaSource": "official",
    "marks": 3,
    "topic": "Human Resources",
    "source": "Knox 2021 Trial HSC (Q24b)",
    "stimulus": "Mara Clothing has 1000 staff employed in their retail stores in Australia. Staff turnover has increased from 10% to 18%, decreased productivity due to increased number of disputes between employees.",
    "question": "Why should Mara use grievance procedures as part of its workplace dispute processes?",
    "criteria": [
      { "marks": 3, "descriptor": "Relates cause and effect of the use of grievance procedures at Mara" },
      { "marks": 2, "descriptor": "Description of grievance procedure" },
      { "marks": 1, "descriptor": "Limited information" }
    ],
    "keyPoints": "Handles disputes before they escalate to costly/formal methods; gives staff visibility/transparency; addresses rising staff turnover and disputes",
    "sampleAnswer": "A grievance procedure is a formal process that allows employees to raise workplace concerns with management in a structured, transparent way. Mara should use grievance procedures because they allow disputes to be identified and addressed early, before they escalate into more costly and disruptive formal processes such as arbitration. Given Mara\u0027s rising staff turnover and increasing number of disputes between employees, a clear grievance procedure would give staff confidence their concerns are heard, helping to reduce conflict and improve retention."
  },
  {
    "id": "bs-5-mara-hr-strategies-effectiveness",
    "criteriaSource": "derived",
    "marks": 5,
    "topic": "Human Resources",
    "source": "Knox 2021 Trial HSC (Q24c)",
    "stimulus": "Mara Clothing has 1000 staff employed in their retail stores in Australia. Staff turnover has increased from 10% to 18%, decreased productivity due to increased number of disputes between employees.",
    "question": "Recommend TWO appropriate human resource strategies that could be used by Mara Clothing to improve effectiveness measures.",
    "criteria": [
      { "marks": 5, "descriptor": "Comprehensively provides reasons in favour of TWO appropriate HR strategies and links them to effectiveness measures with stimulus examples" },
      { "marks": "3-4", "descriptor": "Provides reasons in favour of TWO appropriate HR strategies and links them to effectiveness measures" },
      { "marks": 2, "descriptor": "Sketches in general terms human resource strategies" },
      { "marks": 1, "descriptor": "Limited information" }
    ],
    "keyPoints": "Leadership style, recruitment, rewards, training and development, performance management, workplace disputes",
    "sampleAnswer": "Mara Clothing could improve its effectiveness measures by implementing improved training and development, giving staff clearer skill development and career progression opportunities. This would likely increase job satisfaction and productivity while reducing the staff turnover rate, which has risen from 10% to 18%, as employees who feel invested in are more likely to stay. Secondly, Mara could introduce a formal workplace dispute resolution strategy, such as grievance procedures or mediation, to address the increased number of disputes between employees more effectively. Resolving conflicts quickly and fairly would reduce the disruption disputes cause to productivity and prevent minor issues escalating into larger conflicts that damage morale. Together, these two strategies target the root causes of Mara\u0027s declining effectiveness - a demotivated, high-turnover workforce experiencing unresolved conflict - and should help lower turnover, reduce recruitment costs and restore productivity."
  },
  {
    "id": "bs-2-qtc-debt-to-equity",
    "criteriaSource": "official",
    "marks": 2,
    "topic": "Finance",
    "source": "Knox 2022 Trial HSC (Q21a)",
    "stimulus": "QTC Ltd. company Balance sheet\nCurrent assets: Cash $5,000; Accounts receivable $5,000; Inventory $150,000\nCurrent liabilities: Overdraft $100,000; Short term loans $50,000; Account payable $540,000\nNon-current assets: Buildings $5,000,000; Motor vehicles $250,000\nTotal assets: $5,410,000\nNon-current liabilities: Mortgage $2,000,000\nOwner's equity: Capital $2,720,000\nTotal Liabilities + OE: $5,410,000\nDebt to equity industry average 0.3:1 (Debt to equity = total liabilities ÷ total equity)",
    "question": "Calculate and comment on the debt-to-equity ratio for QTC Ltd. (show all working).",
    "criteria": [
      { "marks": 2, "descriptor": "Correct calculation with working and appropriate comment referencing the industry benchmark" },
      { "marks": 1, "descriptor": "Correct calculation with working only, or some relevant information" }
    ],
    "keyPoints": "Total debt = $100,000+$50,000+$540,000+$2,000,000 = $2,690,000; OE = $2,720,000; ratio = 0.99:1; well above industry average 0.3:1, indicating high risk of insolvency",
    "sampleAnswer": "Debt to equity = total liabilities ÷ total equity = $2,690,000 ÷ $2,720,000 = 0.99:1. This is well above the industry average of 0.3:1, indicating QTC Ltd relies heavily on debt and faces a high risk of insolvency."
  },
  {
    "id": "bs-3-qtc-solvency-strategy",
    "criteriaSource": "official",
    "marks": 3,
    "topic": "Finance",
    "source": "Knox 2022 Trial HSC (Q21b)",
    "stimulus": "QTC Ltd. company Balance sheet\nCurrent assets: Cash $5,000; Accounts receivable $5,000; Inventory $150,000\nCurrent liabilities: Overdraft $100,000; Short term loans $50,000; Account payable $540,000\nNon-current assets: Buildings $5,000,000; Motor vehicles $250,000\nTotal assets: $5,410,000\nNon-current liabilities: Mortgage $2,000,000\nOwner's equity: Capital $2,720,000\nDebt to equity industry average 0.3:1",
    "question": "Recommend ONE appropriate financial strategy that could be used to address solvency.",
    "criteria": [
      { "marks": 3, "descriptor": "Comprehensive reasons in favour of an appropriate financial strategy that could be used to assist solvency" },
      { "marks": 2, "descriptor": "Provides reasons in favour of a financial strategy that could be used to assist solvency" },
      { "marks": 1, "descriptor": "Limited information on a financial strategy" }
    ],
    "keyPoints": "Sale and leaseback of buildings to pay off the mortgage and reduce gearing towards the industry average",
    "sampleAnswer": "QTC Ltd could use a sale and leaseback strategy, selling its $5,000,000 buildings to a financial institution and then leasing them back for continued use. The cash raised could be used to pay down the $2,000,000 mortgage, directly reducing total liabilities and improving the debt-to-equity ratio towards the industry average of 0.3:1, without disrupting the business\u0027s ongoing operations."
  },
  {
    "id": "bs-5-qtc-rights-issue",
    "criteriaSource": "official",
    "marks": 5,
    "topic": "Finance",
    "source": "Knox 2022 Trial HSC (Q21c)",
    "stimulus": "QTC Ltd. has a debt-to-equity ratio of 0.99:1 (total liabilities $2,690,000 ÷ owner's equity $2,720,000), well above the industry average of 0.3:1.",
    "question": "Discuss the use of a rights issue as a source of finance for QTC Ltd.",
    "criteria": [
      { "marks": 5, "descriptor": "Comprehensively provides advantages and disadvantages of the use of a rights issue as a source of finance for QTC Ltd." },
      { "marks": 4, "descriptor": "Provides advantages and disadvantages of the use of a rights issue as a source of finance for QTC Ltd." },
      { "marks": 3, "descriptor": "Provides some advantages and/or disadvantages of the use of a rights issue as a source of finance" },
      { "marks": 2, "descriptor": "Sketches in general terms the use of a rights issue" },
      { "marks": 1, "descriptor": "Limited information" }
    ],
    "keyPoints": "Offered to existing shareholders in proportion to current holdings; advantages: no shareholder approval typically required, easier to raise from existing informed shareholders, does not increase gearing; disadvantages: dilutes share value, risk of undersubscription",
    "sampleAnswer": "A rights issue involves offering new shares to existing shareholders in proportion to the shares they already hold, usually at a discount to the current market price. This would be appropriate for QTC Ltd, as it would allow the business to raise funds and reduce its reliance on debt without needing shareholder approval typically required for other issues, and because it targets existing, informed shareholders, it is often easier to raise funds successfully than through the general public. Crucially, unlike further borrowing, a rights issue would not add to QTC\u0027s liabilities, helping reduce its debt-to-equity ratio of 0.99:1 back towards the industry average of 0.3:1 and lowering its risk of insolvency. However, a rights issue does have disadvantages: it can dilute the value of each share if not fully taken up, and there remains a risk of undersubscription if existing shareholders lack confidence in the business or the funds to participate. Overall, given QTC\u0027s urgent need to reduce gearing, a rights issue is a suitable strategy despite these risks."
  },
  {
    "id": "bs-1-vq-transforming-resource",
    "criteriaSource": "official",
    "marks": 1,
    "topic": "Operations",
    "source": "Knox 2022 Trial HSC (Q22a)",
    "stimulus": "VQ is a leading boutique hotel providing high quality accommodation including rooms, restaurants and spa services.",
    "question": "Identify ONE transforming resource used in this business.",
    "criteria": [
      { "marks": 1, "descriptor": "Correctly identifies one transforming resource used in this business" }
    ],
    "keyPoints": "Human resources (e.g. chefs, spa staff, reception staff); facilities (e.g. the spa room, restaurant)",
    "sampleAnswer": "One transforming resource used by VQ is its human resources, such as chefs, spa therapists and reception staff who deliver its services."
  },
  {
    "id": "bs-3-vq-legal-regulation-operations",
    "criteriaSource": "official",
    "marks": 3,
    "topic": "Operations",
    "source": "Knox 2022 Trial HSC (Q22b)",
    "stimulus": "VQ is a leading boutique hotel providing high quality accommodation including rooms, restaurants and spa services.",
    "question": "How does ONE legal regulation influence operations management for this business?",
    "criteria": [
      { "marks": 3, "descriptor": "Comprehensively details one legal regulation's influence on operations management for this business" },
      { "marks": 2, "descriptor": "Details one legal regulation's influence on operations management" },
      { "marks": 1, "descriptor": "Limited information/describes legislation" }
    ],
    "keyPoints": "Work Health and Safety Act; Fair Work Act 2009; Competition and Consumer Act 2010; Food Act/Public Health Order",
    "sampleAnswer": "The Work Health and Safety Act influences VQ\u0027s operations management by requiring the business to provide a safe environment for both staff and guests across its rooms, restaurants and spa. This means VQ must implement safety procedures, staff training and regular risk assessments in areas such as food preparation and spa treatments, which adds to operating costs but reduces the risk of injury, legal penalties and reputational damage from non-compliance."
  },
  {
    "id": "bs-6-vq-quality-management-strategies",
    "criteriaSource": "derived",
    "marks": 6,
    "topic": "Operations",
    "source": "Knox 2022 Trial HSC (Q22c)",
    "stimulus": "VQ is a leading boutique hotel providing high quality accommodation including rooms, restaurants and spa services.",
    "question": "Examine the use of TWO quality management strategies that could be used by VQ to achieve operations objectives.",
    "criteria": [
      { "marks": 6, "descriptor": "Comprehensive inquiry into the use of TWO quality management strategies that could be used by VQ to achieve operations objectives" },
      { "marks": "4-5", "descriptor": "Provides an inquiry into the use of TWO quality management strategies that could be used by VQ to achieve operations objectives" },
      { "marks": 3, "descriptor": "Describes the use of TWO quality management strategies, OR details ONE quality management strategy, that could be used by VQ to achieve operations objectives" },
      { "marks": 2, "descriptor": "Sketches in general terms the use of quality management strategies" },
      { "marks": 1, "descriptor": "Limited information" }
    ],
    "keyPoints": "Quality control, quality assurance, quality improvement",
    "sampleAnswer": "VQ could use quality control, which involves inspecting outputs, such as prepared meals or cleaned rooms, against set standards before they reach guests, removing or correcting anything that does not meet requirements. This helps VQ maintain the consistently high standard expected of a boutique hotel, catching problems before they affect the guest experience. VQ could also use quality assurance, which involves setting standardised procedures and training throughout its operations - such as consistent checklists for room preparation, spa treatments and food safety - to prevent defects and inconsistencies from occurring in the first place, rather than simply catching them afterwards. Used together, these strategies help VQ achieve its quality performance objective by both preventing errors before they happen through assurance, and catching any that do occur through control, ensuring guests consistently receive the premium accommodation, dining and spa experience that supports VQ\u0027s high-quality reputation and pricing."
  },
  {
    "id": "bs-3-awards-vs-enterprise-agreements",
    "criteriaSource": "official",
    "marks": 3,
    "topic": "Human Resources",
    "source": "Knox 2022 Trial HSC (Q23a)",
    "stimulus": null,
    "question": "Distinguish between awards and enterprise agreements in the use of employment contracts.",
    "criteria": [
      { "marks": 3, "descriptor": "Comprehensively denotes the differences between awards and enterprise agreements in the use of employment standards" },
      { "marks": 2, "descriptor": "Describes awards and enterprise agreements (without contrasting them)" },
      { "marks": 1, "descriptor": "Some relevant information" }
    ],
    "keyPoints": "Award = minimum wages/conditions set for an industry or occupation; Enterprise agreement = collective, workplace-specific agreement covering pay, overtime, leave, hours, dispute resolution and expiry date; approved by FWC and must pass the Better Off Overall Test (BOOT)",
    "sampleAnswer": "An award sets the minimum wages and conditions of employment for a particular industry or occupation, applying broadly across many employers. An enterprise agreement, by contrast, is negotiated collectively between a specific employer and its employees (or their union), covering pay, hours, leave and dispute resolution tailored to that individual workplace. Enterprise agreements must be approved by the Fair Work Commission and pass the Better Off Overall Test (BOOT), ensuring employees are no worse off than under the relevant award."
  },
  {
    "id": "bs-3-key-airways-dispute-resolution",
    "criteriaSource": "official",
    "marks": 3,
    "topic": "Human Resources",
    "source": "Knox 2022 Trial HSC (Q23b)",
    "stimulus": "Negotiations regarding the enterprise agreement between Key Airways and the TWU (Transport Workers Union) have been unsuccessful to date. Employees are unhappy with the progress as the pay rise being offered is lower than inflation.",
    "question": "Recommend ONE appropriate strategy that could be used to resolve this dispute.",
    "criteria": [
      { "marks": 3, "descriptor": "Provides comprehensive reasons in favour of an appropriate strategy that could be used to resolve this dispute" },
      { "marks": 2, "descriptor": "Provides reason/s in favour of a strategy that could be used to resolve this dispute, OR a detailed description of an appropriate strategy" },
      { "marks": 1, "descriptor": "Some relevant information provided" }
    ],
    "keyPoints": "Mediation (confidential discussion with a neutral third party) or conciliation/arbitration through the Fair Work Commission",
    "sampleAnswer": "Key Airways and the TWU should use conciliation through the Fair Work Commission, where an independent conciliator helps both parties reach a voluntary agreement on the enterprise agreement negotiations. This is appropriate because negotiations have already broken down over pay, and conciliation provides a structured, less adversarial process than arbitration to help resolve the disagreement over wages relative to inflation while preserving the ongoing working relationship between Key Airways and its employees."
  },
  {
    "id": "bs-4-hr-profitability-interdependence",
    "criteriaSource": "official",
    "marks": 4,
    "topic": "Human Resources",
    "source": "Knox 2022 Trial HSC (Q23c)",
    "stimulus": "The table below contains data about a business in 2020 and 2021.\n2020 / 2021\nAbsenteeism per employee: 12 days / 20 days\nAccidents per 1000 employees: 22 / 27\nNumber of strike days: 22 / 12\nTraining expenditure per employee: $2,200 / $700\nStaff turnover: 12% / 7%\nFixed costs: $1,200,000 / $1,000,000\nExpense ratio (expenses ÷ sales): 22% / 12%",
    "question": "Using the data, analyse the interdependence between human resources management and profitability management in this business.",
    "criteria": [
      { "marks": 4, "descriptor": "Comprehensively draws out and relates implications of the interdependence between human resources management and profitability management in this business" },
      { "marks": 3, "descriptor": "Draws out and relates implications of the interdependence between human resources management and profitability management in this business" },
      { "marks": 2, "descriptor": "Sketches in general terms the interdependence between human resources management and profitability management" },
      { "marks": 1, "descriptor": "Limited information" }
    ],
    "keyPoints": "Cut in training expenditure (from $2,200 to $700 per employee) linked to fall in expense ratio (profitability) but rise in accidents and absenteeism (HR cost); lower staff turnover reduces recruitment costs but absenteeism increase offsets savings",
    "sampleAnswer": "Interdependence refers to how a decision in one key business function affects outcomes in another. Here, cutting training expenditure per employee from $2,200 to $700 helped reduce the expense ratio from 22% to 12%, directly improving profitability. However, this HR cut coincided with accidents per 1,000 employees rising from 22 to 27 and absenteeism increasing from 12 to 20 days, meaning hidden HR costs, such as compensation claims and lost output, are likely to reduce future profitability. Although staff turnover fell from 12% to 7%, cutting recruitment costs, the rising absenteeism shows that short-term profitability gains from HR cost-cutting can undermine long-term financial performance."
  },
  {
    "id": "bs-2-cafe-indirect-distribution",
    "criteriaSource": "official",
    "marks": 2,
    "topic": "Marketing",
    "source": "Knox 2022 Trial HSC (Q24a)",
    "stimulus": "A café located in the CBD (central business district) of Sydney is currently experiencing a decline in sales due to COVID lockdowns. Economists are forecasting a rapid recovery in economic activity later this year with the removal of lockdowns.",
    "question": "Justify the use of an indirect distribution channel to address the decline in sales.",
    "criteria": [
      { "marks": 2, "descriptor": "Details and supports an argument for the use of an indirect distribution channel to address the decline in sales" },
      { "marks": 1, "descriptor": "Sketches in general terms information on an indirect distribution channel" }
    ],
    "keyPoints": "Delivery platforms such as Uber Eats/Menulog reach more target market segments and offer convenience via existing infrastructure",
    "sampleAnswer": "An indirect distribution channel uses an intermediary to get products to customers, rather than selling directly. By partnering with a delivery platform such as Uber Eats or Menulog, the cafÃ© can reach locked-down customers unable to dine in, using the platform\u0027s existing delivery network to quickly recover lost sales without heavy investment in its own delivery service."
  },
  {
    "id": "bs-4-cafe-economic-influences-marketing",
    "criteriaSource": "official",
    "marks": 4,
    "topic": "Marketing",
    "source": "Knox 2022 Trial HSC (Q24b)",
    "stimulus": "A café located in the CBD (central business district) of Sydney is currently experiencing a decline in sales due to COVID lockdowns. Economists are forecasting a rapid recovery in economic activity later this year with the removal of lockdowns.",
    "question": "How do economic influences impact marketing strategies used by this business?",
    "criteria": [
      { "marks": 4, "descriptor": "Comprehensively details how economic influences impact marketing strategies used by this business" },
      { "marks": 3, "descriptor": "Details how economic influences impact marketing strategies used by this business" },
      { "marks": 2, "descriptor": "Sketches in general terms the economic influences and some link to marketing strategies" },
      { "marks": 1, "descriptor": "Limited information" }
    ],
    "keyPoints": "Economic contraction (COVID lockdowns) leads to higher unemployment, lower incomes and reduced consumer confidence, cutting discretionary spending; forecast economic upswing brings increased confidence and spending, an opportunity for expanded promotion",
    "sampleAnswer": "Economic influences are changes in the economic cycle, such as contraction or growth, that affect consumer spending. During the COVID lockdown contraction, rising unemployment and falling incomes reduced consumer confidence, so the cafÃ© had to shift its marketing towards value-based pricing and discount promotions to keep customers spending on a discretionary item like coffee. As the forecast economic recovery arrives, rising incomes and confidence create an opportunity for the cafÃ© to increase promotional spending and reintroduce premium menu items, shifting marketing back towards attracting full-price, in-cafÃ© trade rather than merely retaining price-sensitive customers."
  },
  {
    "id": "bs-4-cafe-relationship-marketing",
    "criteriaSource": "official",
    "marks": 4,
    "topic": "Marketing",
    "source": "Knox 2022 Trial HSC (Q24c)",
    "stimulus": "A café located in the CBD (central business district) of Sydney is currently experiencing a decline in sales due to COVID lockdowns. Economists are forecasting a rapid recovery in economic activity later this year with the removal of lockdowns.",
    "question": "Evaluate the use of relationship marketing to address the decline in sales for this business.",
    "criteria": [
      { "marks": 4, "descriptor": "Comprehensive judgement on the use of relationship marketing to address the decline in sales for this business" },
      { "marks": 3, "descriptor": "Some judgement on the use of relationship marketing to address the decline in sales for this business" },
      { "marks": 2, "descriptor": "Describes the use of relationship marketing" },
      { "marks": 1, "descriptor": "Limited information" }
    ],
    "keyPoints": "Loyalty programs, VIP/selective services, personalised promotions, customer relationship management (CRM)",
    "sampleAnswer": "Relationship marketing involves building ongoing customer loyalty rather than chasing one-off sales. The cafÃ© could use a loyalty program or personalised promotions via SMS or email to keep lapsed customers engaged and encourage their return once lockdowns ease, which is valuable as it builds a base of repeat customers for the post-lockdown recovery. However, it does little to address the immediate cause of lost sales, being restricted foot traffic, and requires an existing customer database the cafÃ© may not have. Overall, relationship marketing is a useful long-term strategy but should be paired with an indirect distribution channel to address the decline in sales right now."
  },

    // ============ Additional papers batch (Barker/Cherrybrook/Hills Grammar/Knox/Penrith/Pymble/Riverview/Shore/Sydney Boys/Sydney Tech) ============
{
        "id":  "bs-1-barker13-1",
        "criteriaSource": "official",
        "marks":  1,
        "topic":  "Marketing",
        "source":  "Barker College 2013 Trial HSC (Q21a)",
        "stimulus":  null,
        "question":  "Outline the key difference between a good and a service.",
        "criteria":  [
                         {
                             "marks":  1,
                             "descriptor":  "Sketches in general terms the main difference of tangibility versus intangibility between a good and a service"
                         }
                     ],
        "keyPoints":  "A good is tangible and can be stored/touched; a service is intangible, typically produced and consumed simultaneously and cannot be stored.",
        "sampleAnswer": "A good is a tangible item that can be touched and stored, while a service is intangible and is consumed at the same time it is produced."
    },
    {
        "id":  "bs-1-barker13-2",
        "criteriaSource": "official",
        "marks":  1,
        "topic":  "Finance",
        "source":  "Barker College 2013 Trial HSC (Q22a)",
        "stimulus":  {
                         "blocks":  [
                                        {
                                            "type":  "text",
                                            "text":  "Financial data for T-Bone\u0027s Cuts"
                                        },
                                        {
                                            "type":  "table",
                                            "title":  null,
                                            "columns":  [
                                                            "Financial Objective",
                                                            "2011",
                                                            "2012",
                                                            "Industry average"
                                                        ],
                                            "rows":  [
                                                         [
                                                             "Return on owners\u0027 equity",
                                                             "0.9 : 1",
                                                             "0.1 : 1",
                                                             "0.1 : 1"
                                                         ],
                                                         [
                                                             "Solvency ratio",
                                                             "1.4 : 1",
                                                             "1 : 1",
                                                             "1.2 : 1"
                                                         ],
                                                         [
                                                             "Expense ratio",
                                                             "0.7 : 1",
                                                             "0.8 : 1",
                                                             "0.7 : 1"
                                                         ],
                                                         [
                                                             "Current ratio",
                                                             "0.9 : 1",
                                                             "1.1 : 1",
                                                             "1 : 1"
                                                         ]
                                                     ]
                                        }
                                    ]
                     },
        "question":  "For 2012, identify the financial objective for which \u0027T-Bone\u0027s Cuts\u0027 achieved a poorer result than the industry average.",
        "criteria":  [
                         {
                             "marks":  1,
                             "descriptor":  "Recognises and names the correct financial objective (efficiency, as shown by the expense ratio) as poorer than the industry average"
                         }
                     ],
        "keyPoints":  "Expense ratio (efficiency) in 2012 was 0.8:1 compared to the industry average of 0.7:1, indicating poorer efficiency.",
        "sampleAnswer": "Efficiency was poorer than the industry average, shown by the expense ratio of 0.8:1 in 2012 compared with the industry average of 0.7:1."
    },
    {
        "id":  "bs-2-barker13-1",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Finance",
        "source":  "Barker College 2013 Trial HSC (Q22b)",
        "stimulus":  {
                         "blocks":  [
                                        {
                                            "type":  "text",
                                            "text":  "Financial data for T-Bone\u0027s Cuts"
                                        },
                                        {
                                            "type":  "table",
                                            "title":  null,
                                            "columns":  [
                                                            "Financial Objective",
                                                            "2011",
                                                            "2012",
                                                            "Industry average"
                                                        ],
                                            "rows":  [
                                                         [
                                                             "Return on owners\u0027 equity",
                                                             "0.9 : 1",
                                                             "0.1 : 1",
                                                             "0.1 : 1"
                                                         ],
                                                         [
                                                             "Solvency ratio",
                                                             "1.4 : 1",
                                                             "1 : 1",
                                                             "1.2 : 1"
                                                         ],
                                                         [
                                                             "Expense ratio",
                                                             "0.7 : 1",
                                                             "0.8 : 1",
                                                             "0.7 : 1"
                                                         ],
                                                         [
                                                             "Current ratio",
                                                             "0.9 : 1",
                                                             "1.1 : 1",
                                                             "1 : 1"
                                                         ]
                                                     ]
                                        }
                                    ]
                     },
        "question":  "Describe the liquidity of T-Bone\u0027s Cuts.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Provides characteristics and features of the liquidity of T-Bone\u0027s Cuts, including that it is better than the industry average (1:1) and/or improving over time (0.9:1 to 1.1:1), with reference to figures"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Provides characteristics and features of the liquidity of T-Bone\u0027s Cuts, including only ONE of the above features"
                         }
                     ],
        "keyPoints":  "Current ratio improved from 0.9:1 (2011) to 1.1:1 (2012), now better than the industry average of 1:1, indicating improved and now adequate liquidity.",
        "sampleAnswer": "Liquidity measures a business\u0027s ability to meet its short-term debts as they fall due. T-Bone\u0027s Cuts\u0027 current ratio improved from 0.9:1 in 2011 to 1.1:1 in 2012, now exceeding the industry average of 1:1, showing its liquidity is adequate and improving."
    },
    {
        "id":  "bs-2-barker13-2",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Operations",
        "source":  "Barker College 2013 Trial HSC (Q23a)",
        "stimulus":  "Stones Pty Ltd is a well-established SME. It needs to change every aspect of its operations processes in order to stay competitive.",
        "question":  "Identify TWO sources of resistance to the changes needed.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Recognises and names TWO sources of resistance to change from: financial costs, purchasing new equipment, redundancy payments, retraining, reorganising plant layout, inertia"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Recognises and names ONE source of resistance to change from the list above"
                         }
                     ],
        "keyPoints":  "Sources of resistance to change: financial costs, purchasing new equipment, redundancy payments, retraining, reorganising plant layout, inertia.",
        "sampleAnswer": "Two sources of resistance to change for Stones Pty Ltd are the financial cost of purchasing new equipment, which strains cash flow, and inertia, where employees are comfortable with existing routines and resist adopting new operations processes."
    },
    {
        "id":  "bs-2-barker13-3",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Operations",
        "source":  "Barker College 2013 Trial HSC (Q23b)",
        "stimulus":  "Stones Pty Ltd is a well-established SME. It needs to change every aspect of its operations processes in order to stay competitive.",
        "question":  "Describe how sequencing and scheduling will benefit Stones Pty Ltd.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Provides characteristics and features of the benefits that sequencing and scheduling will bring to Stones Pty Ltd, e.g. reduced production costs through improved time, wastage, quality and reliability of delivery, referencing tools such as Gantt charts and critical path analysis (CPA)"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Sketches in general terms the benefits that sequencing and scheduling will bring to Stones Pty Ltd, OR recognises and names two or more of the above benefits"
                         }
                     ],
        "keyPoints":  "Sequencing and scheduling reduce production costs by improving time management, reducing wastage, improving quality and reliability of delivery; tools include Gantt charts and CPA.",
        "sampleAnswer": "Sequencing and scheduling involve planning the order and timing of production tasks, often using tools such as Gantt charts or critical path analysis. For Stones Pty Ltd, this reduces wastage and idle time, improves reliability of delivery to customers, and lowers production costs, helping the business remain competitive."
    },
    {
        "id":  "bs-2-barker13-4",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Human Resources",
        "source":  "Barker College 2013 Trial HSC (Q24a)",
        "stimulus":  "Sam works in the administration office of a large department store with shops throughout Australia.\n\nThe firm has had complaints about her poor telephone manner with customers and suppliers and her co-workers are unhappy because of her lack of consideration in the workplace.",
        "question":  "Define the term performance management.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "States the correct meaning of the term \u0027performance management\u0027 as a systematic process for evaluating and managing employee performance in order to achieve the best outcomes for the business"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "States an incomplete or partial meaning of the term"
                         }
                     ],
        "keyPoints":  "Performance management is a systematic process for evaluating and managing employee performance to achieve the best outcomes for the business.",
        "sampleAnswer": "Performance management is a systematic process businesses use to evaluate and manage employee performance, such as Sam\u0027s conduct with customers and co-workers, with the aim of improving individual effectiveness and achieving the best possible outcomes for the business as a whole."
    },
    {
        "id":  "bs-2-barker13-5",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Human Resources",
        "source":  "Barker College 2013 Trial HSC (Q24b)",
        "stimulus":  "Sam works in the administration office of a large department store with shops throughout Australia.\n\nThe firm has had complaints about her poor telephone manner with customers and suppliers and her co-workers are unhappy because of her lack of consideration in the workplace.",
        "question":  "Identify TWO purposes for the use of performance management.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Recognises and names TWO purposes for the use of performance management (e.g. developmental and administrative)"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Recognises and names ONE correct purpose for the use of performance management"
                         }
                     ],
        "keyPoints":  "Developmental purpose - uses data to develop employees\u0027 skills, overcome weaknesses and prepare for promotion. Administrative purpose - provides information for management to use in HR planning.",
        "sampleAnswer": "Performance management serves a developmental purpose, using appraisal data to build employees\u0027 skills and address weaknesses such as Sam\u0027s poor telephone manner, and an administrative purpose, giving management information to guide HR decisions such as promotion, transfer or remuneration."
    },
    {
        "id":  "bs-2-barker13-6",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Human Resources",
        "source":  "Barker College 2013 Trial HSC (Q24c)",
        "stimulus":  "Sam works in the administration office of a large department store with shops throughout Australia.\n\nThe firm has had complaints about her poor telephone manner with customers and suppliers and her co-workers are unhappy because of her lack of consideration in the workplace.",
        "question":  "Describe ONE tool or method that can be used in performance management.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Provides characteristics and features of ONE tool that can be used in performance management (e.g. behaviour observation scale, interview, management by objective, critical incident method, graphic rating scale, essay evaluation method, performance ranking method, 360 degree feedback)"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Identifies or sketches in general terms one tool that can be used in performance management"
                         }
                     ],
        "keyPoints":  "Tools include behaviour observation scale, interview, management by objective, critical incident method, graphic rating scale, essay evaluation, ranking method, 360 degree feedback.",
        "sampleAnswer": "One tool is 360 degree feedback, where an employee\u0027s performance is assessed using input from supervisors, peers, subordinates and customers. This would give a rounded picture of Sam\u0027s telephone manner and workplace conduct from multiple perspectives, rather than relying on one manager\u0027s view alone."
    },
    {
        "id":  "bs-3-barker13-1",
        "criteriaSource": "official",
        "marks":  3,
        "topic":  "Marketing",
        "source":  "Barker College 2013 Trial HSC (Q21b)",
        "stimulus":  null,
        "question":  "Outline THREE elements of a promotion mix.",
        "criteria":  [
                         {
                             "marks":  3,
                             "descriptor":  "Sketches in general terms the main features of THREE elements of the promotion mix (choosing from advertising, personal selling, relationship marketing, sales promotion, publicity and public relations)"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Sketches in general terms the main features of TWO elements"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Sketches in general terms the main features of ONE element"
                         }
                     ],
        "keyPoints":  "Promotion mix elements include advertising, personal selling, sales promotion, publicity and public relations, and relationship marketing.",
        "sampleAnswer": "Three elements of the promotion mix are advertising, a paid, non-personal message delivered through media such as TV, print or social media to inform and persuade customers; personal selling, which involves direct, face-to-face communication between a salesperson and a customer to encourage a purchase; and sales promotion, which uses short-term incentives such as discounts, competitions or free samples to encourage an immediate purchase decision."
    },
    {
        "id":  "bs-3-barker13-2",
        "criteriaSource": "official",
        "marks":  3,
        "topic":  "Finance",
        "source":  "Barker College 2013 Trial HSC (Q22c)",
        "stimulus":  {
                         "blocks":  [
                                        {
                                            "type":  "text",
                                            "text":  "Financial data for T-Bone\u0027s Cuts"
                                        },
                                        {
                                            "type":  "table",
                                            "title":  null,
                                            "columns":  [
                                                            "Financial Objective",
                                                            "2011",
                                                            "2012",
                                                            "Industry average"
                                                        ],
                                            "rows":  [
                                                         [
                                                             "Return on owners\u0027 equity",
                                                             "0.9 : 1",
                                                             "0.1 : 1",
                                                             "0.1 : 1"
                                                         ],
                                                         [
                                                             "Solvency ratio",
                                                             "1.4 : 1",
                                                             "1 : 1",
                                                             "1.2 : 1"
                                                         ],
                                                         [
                                                             "Expense ratio",
                                                             "0.7 : 1",
                                                             "0.8 : 1",
                                                             "0.7 : 1"
                                                         ],
                                                         [
                                                             "Current ratio",
                                                             "0.9 : 1",
                                                             "1.1 : 1",
                                                             "1 : 1"
                                                         ]
                                                     ]
                                        }
                                    ]
                     },
        "question":  "Propose and justify a suitable type of debt finance for the new computer \u0027T-Bone\u0027s Cuts\u0027 is considering purchasing.",
        "criteria":  [
                         {
                             "marks":  3,
                             "descriptor":  "Puts forward and supports the choice of ONE suitable type of debt finance for the purchase of new computer equipment (e.g. leasing, commercial bills or a short-term loan)"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Provides characteristics and features of ONE suitable type of debt finance"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Recognises and names ONE suitable type of debt finance"
                         }
                     ],
        "keyPoints":  "Leasing, a commercial bill or a short-term loan are suitable sources of debt finance for a moderate-cost asset like a computer; justification should match the finance term to the life/cost of the asset.",
        "sampleAnswer": "Leasing is a form of debt finance where a business pays regular fees to use an asset without owning it outright. T-Bone\u0027s Cuts should lease the new computer, as this avoids a large upfront cash outlay and spreads the cost over the computer\u0027s useful life, preserving cash flow. Lease payments are also generally tax-deductible, making leasing a cost-effective and suitable option for financing a relatively low-cost, short-life asset."
    },
    {
        "id":  "bs-4-barker13-1",
        "criteriaSource": "derived",
        "marks":  4,
        "topic":  "Finance",
        "source":  "Barker College 2013 Trial HSC (Q22d)",
        "stimulus":  {
                         "blocks":  [
                                        {
                                            "type":  "text",
                                            "text":  "Financial data for T-Bone\u0027s Cuts"
                                        },
                                        {
                                            "type":  "table",
                                            "title":  null,
                                            "columns":  [
                                                            "Financial Objective",
                                                            "2011",
                                                            "2012",
                                                            "Industry average"
                                                        ],
                                            "rows":  [
                                                         [
                                                             "Return on owners\u0027 equity",
                                                             "0.9 : 1",
                                                             "0.1 : 1",
                                                             "0.1 : 1"
                                                         ],
                                                         [
                                                             "Solvency ratio",
                                                             "1.4 : 1",
                                                             "1 : 1",
                                                             "1.2 : 1"
                                                         ],
                                                         [
                                                             "Expense ratio",
                                                             "0.7 : 1",
                                                             "0.8 : 1",
                                                             "0.7 : 1"
                                                         ],
                                                         [
                                                             "Current ratio",
                                                             "0.9 : 1",
                                                             "1.1 : 1",
                                                             "1 : 1"
                                                         ]
                                                     ]
                                        },
                                        {
                                            "type":  "text",
                                            "text":  "The business needs to purchase a new non-current asset valued at $75,000."
                                        }
                                    ]
                     },
        "question":  "Outline the advantages AND disadvantages of \u0027T-Bone\u0027s Cuts\u0027 using equity finance for the purchase.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Sketches in general terms BOTH the advantages and disadvantages of using equity finance to fund the purchase (two of each, and they must vary), e.g. advantages: no interest payable, improves solvency; disadvantages: may dilute ownership, owners may demand larger profits, no tax deduction, potentially reduces cash flow"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Recognises and names BOTH the advantages and disadvantages of using equity finance, OR sketches in general terms only the advantages OR only the disadvantages"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Recognises and names advantages OR disadvantages of using equity finance to fund the purchase"
                         }
                     ],
        "keyPoints":  "Advantages of equity finance: no interest to be paid, improves solvency/reduces gearing, no fixed repayment obligation. Disadvantages: may dilute ownership/control, owners may expect larger future profits/dividends, does not provide a tax deduction, potentially reduces available cash flow.",
        "sampleAnswer": "Equity finance is capital raised from the owners rather than borrowed. For the $75,000 purchase, an advantage is that no interest is payable, and because equity is not a liability, it improves T-Bone\u0027s Cuts\u0027 solvency. However, bringing in new owners may dilute the existing owner\u0027s control, and those owners may expect higher future profits or dividends in return. Unlike debt, returns to equity holders are not tax deductible, and any dividend payments reduce the cash available to the business."
    },
    {
        "id":  "bs-4-barker13-2",
        "criteriaSource": "derived",
        "marks":  4,
        "topic":  "Human Resources",
        "source":  "Barker College 2013 Trial HSC (Q24d)",
        "stimulus":  "Sam works in the administration office of a large department store with shops throughout Australia.\n\nThe firm has had complaints about her poor telephone manner with customers and suppliers and her co-workers are unhappy because of her lack of consideration in the workplace.",
        "question":  "Explain using TWO indicators, how a business can evaluate the effectiveness of its human resource management.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Makes the relationship between how HR management can be evaluated evident (how and/or why), using any TWO indicators from: HR planning, training and development, employee rewards and benefits, industrial relations, WHS, performance appraisal, separation/termination, general HR effectiveness"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Makes the relationship between how HR management can be evaluated evident using only ONE indicator from the list, OR provides characteristics and features of one or two of the indicators"
                         }
                     ],
        "keyPoints":  "Indicators of HR effectiveness include staff turnover, absenteeism, WHS/accidents, levels of disputation, worker satisfaction, and performance appraisal outcomes.",
        "sampleAnswer": "One indicator is staff turnover: a high rate of employees leaving, particularly amid complaints like those about Sam\u0027s poor telephone manner, suggests HR management has failed to address conduct and morale issues, whereas low turnover suggests HR strategies are working. A second indicator is the level of workplace complaints or disputes; a rise in complaints from customers and co-workers about Sam indicates HR processes such as recruitment, induction or performance management are not effectively equipping and managing staff, signalling a need for further training or intervention."
    },
    {
        "id":  "bs-6-barker13-1",
        "criteriaSource": "derived",
        "marks":  6,
        "topic":  "Marketing",
        "source":  "Barker College 2013 Trial HSC (Q21c)",
        "stimulus":  null,
        "question":  "Justify using examples from real or hypothetical businesses, the importance of people, processes and physical evidence when marketing services.",
        "criteria":  [
                         {
                             "marks":  6,
                             "descriptor":  "Clearly supports an argument as to why people, processes and physical evidence are important when marketing services, using relevant case studies to support conclusions"
                         },
                         {
                             "marks":  4,
                             "descriptor":  "Supports an argument as to why people, processes and physical evidence are important when marketing services; may use case studies to support conclusions"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Indicates some key features of people, process and/or physical evidence, OR recognises and names the three elements"
                         }
                     ],
        "keyPoints":  "People - importance of the customer\u0027s experience and the need for a business to be customer-focused in service delivery. Processes - importance of efficient and effective processes for customer satisfaction. Physical evidence - importance of the environment in which the service is delivered.",
        "sampleAnswer": "People, processes and physical evidence are essential when marketing services because, unlike goods, services are intangible and experienced directly by the customer. People matter because staff are often the face of the service; a friendly, competent bank teller shapes a customer\u0027s whole perception of the business, so staff must be recruited, trained and motivated to be customer-focused. Processes matter because the systems used to deliver a service, such as how quickly a cafÃ© takes and fulfils an order, determine customer satisfaction; slow or inconsistent processes quickly damage a service business\u0027s reputation. Physical evidence is important because customers use tangible cues, such as a restaurant\u0027s cleanliness or a website\u0027s design, to judge the quality of an intangible service before and during purchase. Together these elements build the trust and satisfaction that service businesses depend on for repeat custom and long-term success."
    },
    {
        "id":  "bs-6-barker13-2",
        "criteriaSource": "derived",
        "marks":  6,
        "topic":  "Operations",
        "source":  "Barker College 2013 Trial HSC (Q23c)",
        "stimulus":  "Stones Pty Ltd is a well-established SME. It needs to change every aspect of its operations processes in order to stay competitive.",
        "question":  "Explain the process of monitoring, control and improvement as Stones Pty Ltd tries to stay competitive.",
        "criteria":  [
                         {
                             "marks":  6,
                             "descriptor":  "Relates the cause (the process of monitoring, control and improvement) to the effect (staying competitive), clearly explaining why and/or how this process will assist Stones Pty Ltd"
                         },
                         {
                             "marks":  4,
                             "descriptor":  "Provides characteristics and features of the process of monitoring, control and improvement"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Sketches in general terms the process of monitoring, control and improvement"
                         }
                     ],
        "keyPoints":  "Monitoring = observing every aspect of operations (cost, time, quality, reliability); control = evaluating observations against benchmarks; improvement = making changes where performance is weaker than desired, to maintain or improve competitiveness.",
        "sampleAnswer": "Monitoring involves Stones Pty Ltd continuously observing key aspects of its operations, such as production cost, time, quality and delivery reliability. Control involves comparing these observations against pre-set benchmarks to evaluate whether performance meets expectations. Where performance falls short, the improvement stage follows, making changes to processes, technology or staff training to close the gap. Because Stones needs to change every aspect of its operations to stay competitive, cycling continuously through monitoring, control and improvement allows the business to identify inefficiencies early, respond quickly to problems and continually refine its processes. This ongoing cycle helps Stones keep costs down, maintain quality and adapt its operations ahead of competitors, which is essential to remaining competitive in a changing market."
    },
    {
        "id":  "bs-2-hillsgr15-1",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Finance",
        "source":  "Hills Grammar 2015 Trial HSC (Q21a)",
        "stimulus":  null,
        "question":  "Identify TWO objectives of financial management.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Identifies TWO objectives of financial management"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Identifies ONE objective of financial management"
                         }
                     ],
        "keyPoints":  "Objectives of financial management: profitability, growth, efficiency, liquidity, solvency.",
        "sampleAnswer": "Two objectives of financial management are profitability, the ability of a business to maximise its net income relative to its size, and liquidity, the ability of a business to meet its short-term debts as they fall due."
    },
    {
        "id":  "bs-2-hillsgr15-2",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Finance",
        "source":  "Hills Grammar 2015 Trial HSC (Q21b)",
        "stimulus":  null,
        "question":  "Define normalised earnings.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Correctly defines normalised earnings"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Uses some appropriate terms related to normalised earnings"
                         }
                     ],
        "keyPoints":  "Normalised earnings are earnings that have been adjusted to account for changes in the economic cycle or to remove one-off or unusual items affecting profitability.",
        "sampleAnswer": "Normalised earnings are a business\u0027s earnings adjusted to remove the effect of one-off or unusual items, or to account for changes in the economic cycle, so the figure more accurately reflects the business\u0027s typical, ongoing financial performance."
    },
    {
        "id":  "bs-2-hillsgr15-3",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Finance",
        "source":  "Hills Grammar 2015 Trial HSC (Q21c)",
        "stimulus":  null,
        "question":  "Why are notes to the financial statements important?",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Provides a reason for the importance of notes to the financial statements"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Defines notes to the financial statements"
                         }
                     ],
        "keyPoints":  "Notes provide stakeholders with additional information and context, enabling them to better interpret and make sense of the data contained in the financial statements.",
        "sampleAnswer": "Notes to the financial statements are important because they provide stakeholders, such as investors and creditors, with additional detail and context behind the reported figures, helping them make more informed and accurate judgements about the business\u0027s true financial position and performance."
    },
    {
        "id":  "bs-2-hillsgr15-4",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Operations",
        "source":  "Hills Grammar 2015 Trial HSC (Q22a)",
        "stimulus":  null,
        "question":  "Identify TWO influences on the operations function of a business.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Identifies TWO influences on the operations function of a business"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Identifies ONE influence on the operations function of a business"
                         }
                     ],
        "keyPoints":  "Influences on operations: globalisation, technology, quality expectations, cost-based competition, government policies, legal regulation, environmental sustainability, corporate social responsibility.",
        "sampleAnswer": "Two influences on the operations function are technology, which can improve efficiency and reduce production costs, and government regulation, such as workplace safety or environmental laws, which businesses must comply with when designing their operations processes."
    },
    {
        "id":  "bs-2-hillsgr15-5",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Operations",
        "source":  "Hills Grammar 2015 Trial HSC (Q22b)",
        "stimulus":  null,
        "question":  "Outline an advantage of using the just-in-time (JIT) inventory management system.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Outlines an advantage of JIT"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Identifies an advantage of JIT, OR defines JIT"
                         }
                     ],
        "keyPoints":  "JIT is an inventory system where supplies/inputs arrive only as they are needed; advantages include less storage space required, cost savings, and reduced stock obsolescence.",
        "sampleAnswer": "Just-in-time (JIT) is an inventory system where inputs arrive only as they are needed in production. An advantage is that it reduces the storage space and warehousing costs a business needs, since large stock levels are not held on hand, freeing up capital otherwise tied up in unused inventory."
    },
    {
        "id":  "bs-2-hillsgr15-6",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Operations",
        "source":  "Hills Grammar 2015 Trial HSC (Q22c)",
        "stimulus":  null,
        "question":  "How does supply chain management contribute to business success?",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Provides reasons as to how supply chain management affects business success"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Defines supply chain management"
                         }
                     ],
        "keyPoints":  "Supply chain management involves integrating and managing the flow of supplies through inputs, transformation and outputs; efficient SCM ensures the business can produce, distribute and sell products efficiently and profitably.",
        "sampleAnswer": "Supply chain management is the coordination of all activities involved in sourcing inputs, transforming them into outputs and distributing them to customers. Effective supply chain management contributes to business success by ensuring inputs are available when needed and outputs reach customers efficiently, reducing costs and delays and protecting profitability."
    },
    {
        "id":  "bs-2-hillsgr15-7",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Human Resources",
        "source":  "Hills Grammar 2015 Trial HSC (Q23a)",
        "stimulus":  null,
        "question":  "Outline why all employers must comply with anti-discrimination laws.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Outlines why employers must comply with anti-discrimination laws"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Defines anti-discrimination"
                         }
                     ],
        "keyPoints":  "Anti-discrimination laws protect employees in the workplace; compliance is a legal requirement in all workplaces, and all employees have a right to a safe workplace free of harassment.",
        "sampleAnswer": "Anti-discrimination laws protect employees from unfair treatment based on characteristics such as gender, race, age or disability. Employers must comply because it is a legal requirement in every workplace, and all employees have a right to work in an environment that is safe and free from harassment."
    },
    {
        "id":  "bs-4-hillsgr15-1",
        "criteriaSource": "official",
        "marks":  4,
        "topic":  "Finance",
        "source":  "Hills Grammar 2015 Trial HSC (Q21d)",
        "stimulus":  null,
        "question":  "Explain the purpose of comparative ratio analysis for a business.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Explains the purpose of comparative ratio analysis for a business"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Describes the purpose of comparative ratio analysis for a business"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Outlines the purpose of comparative ratio analysis for a business"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Defines comparative ratio analysis"
                         }
                     ],
        "keyPoints":  "Comparative ratio analysis compares business performance over time or against benchmarks; its purpose is to assess how well the business has performed and to implement strategies for improvement if necessary.",
        "sampleAnswer": "Comparative ratio analysis is the process of comparing a business\u0027s financial ratios over successive periods or against industry benchmarks and competitors. Its purpose is to allow management and stakeholders to assess how the business has performed relative to its past results or similar businesses, identifying trends, strengths and weaknesses. This information then enables informed decisions about strategies to improve future financial performance, meaning ratio analysis is not just descriptive but directly guides corrective management action."
    },
    {
        "id":  "bs-4-hillsgr15-2",
        "criteriaSource": "official",
        "marks":  4,
        "topic":  "Operations",
        "source":  "Hills Grammar 2015 Trial HSC (Q22d)",
        "stimulus":  null,
        "question":  "Recommend TWO approaches an operations manager could use to improve the quality within the business.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Recommends TWO strategies to improve quality, with a supporting reason for the use of each"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Recommends ONE strategy with a supporting reason AND identifies ONE further strategy"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Recommends ONE strategy with a supporting reason, OR identifies TWO strategies, OR describes TWO strategies"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Identifies ONE strategy"
                         }
                     ],
        "keyPoints":  "Quality control - inspections at points in production to check for defects. Quality assurance - a system to ensure set standards are consistently achieved. Quality improvement - continual improvement/total quality management.",
        "sampleAnswer": "One approach is quality control, inspecting products at points during production to detect and remove defects before they reach customers, protecting the business\u0027s reputation for reliability. A second approach is quality assurance, establishing standards and procedures throughout the production process so quality is built in from the start, reducing the likelihood of defects occurring in the first place and lowering the costs of rework, returns and wasted materials over time."
    },
    {
        "id":  "bs-4-hillsgr15-3",
        "criteriaSource": "official",
        "marks":  4,
        "topic":  "Marketing",
        "source":  "Hills Grammar 2015 Trial HSC (Q24b)",
        "stimulus":  null,
        "question":  "Assess the importance of a business evaluating its marketing objectives.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Assesses the importance of evaluating marketing objectives, making a judgement supported by reasons"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Describes the importance of evaluating the marketing objectives"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Outlines marketing objectives"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Identifies some marketing objectives"
                         }
                     ],
        "keyPoints":  "Marketing objectives are realistic, measurable goals to be achieved through the marketing plan (e.g. increasing market share, expanding the product mix, maximising customer service). Evaluating them ensures management understands progress and whether revision is necessary in a dynamic environment.",
        "sampleAnswer": "Marketing objectives are realistic, measurable goals set to be achieved through the marketing plan, such as increasing market share or expanding the product mix. Evaluating them is important because it shows management whether the plan is actually achieving its intended results and reveals any gap between planned and actual performance. Since markets and consumer preferences constantly change, regular evaluation is essential, as without it a business risks continuing with outdated objectives and strategies, ultimately undermining its long-term marketing and financial success."
    },
    {
        "id":  "bs-6-hillsgr15-1",
        "criteriaSource": "official",
        "marks":  6,
        "topic":  "Human Resources",
        "source":  "Hills Grammar 2015 Trial HSC (Q24a)",
        "stimulus":  null,
        "question":  "Analyse the impact of ethical behaviour on the success of a business. Use examples to support your answer.",
        "criteria":  [
                         {
                             "marks":  6,
                             "descriptor":  "Draws out the relationship between/implications of ethical behaviour and business success, using examples across multiple key business functions to support the answer"
                         },
                         {
                             "marks":  5,
                             "descriptor":  "Draws out the relationship between ethical behaviour and business success"
                         },
                         {
                             "marks":  4,
                             "descriptor":  "Explains how ethical behaviour can affect business success, using examples to support the answer"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Describes ethical behaviour and business success using examples, with no reference to the key business functions"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Refers to ethical behaviour and business success"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Defines ethical behaviour"
                         }
                     ],
        "keyPoints":  "Ethical behaviour affects success across business functions: operations (environmental sustainability, social responsibility), marketing (truth, accuracy and good taste in advertising, avoiding harmful products, fair competition), finance (audited accounts, honest record keeping and reporting), human resources (fair working conditions, codes of conduct). Using only one example lowers the mark.",
        "sampleAnswer": "Ethical behaviour means acting honestly, fairly and responsibly beyond minimum legal requirements, and it affects success across all key business functions. In operations, sustainable practices such as reducing waste and pollution protect a business\u0027s reputation and reduce the risk of regulatory penalties. In marketing, truthful and accurate advertising builds long-term consumer trust, whereas misleading claims can cause reputational damage and legal action under consumer law. In finance, honest and accurate financial reporting maintains the confidence of investors and lenders, which is essential for accessing finance and maintaining share price. In human resources, providing fair working conditions and a clear code of conduct improves staff morale, reduces turnover and enhances the business\u0027s reputation as an employer. Overall, businesses that act ethically build stronger, more trusting stakeholder relationships that support long-term profitability, while unethical behaviour risks serious reputational and financial harm."
    },
    {
        "id":  "bs-2-knox13-1",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Human Resources",
        "source":  "Knox Grammar 2013 Trial HSC (Q21a)",
        "stimulus":  null,
        "question":  "How can outsourcing human resource functions help a business improve its profitability? Support your answer with ONE relevant example.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Clearly demonstrates understanding of the process (steps) by which outsourcing HR functions can help a business improve its profitability (cause-effect), supported by a relevant example"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Demonstrates a sound understanding of the process"
                         }
                     ],
        "keyPoints":  "Outsourcing HR functions (e.g. payroll, recruitment) can reduce costs, allow the business to focus on core activities, improve quality, increase speed to market, foster innovation, and conserve capital.",
        "sampleAnswer": "Outsourcing involves paying an external provider to perform a business function instead of doing it in-house. By outsourcing HR functions such as payroll to a specialist provider, a business can reduce costs due to the provider\u0027s expertise and economies of scale, directly increasing profitability while freeing management to focus on core, revenue-generating activities."
    },
    {
        "id":  "bs-2-knox13-2",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Human Resources",
        "source":  "Knox Grammar 2013 Trial HSC (Q21b)",
        "stimulus":  null,
        "question":  "Outline ONE method of resolving a workplace dispute.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Provides a clear sketch in general terms of ONE method of resolving a workplace dispute (e.g. negotiation, mediation, grievance procedures, involvement of courts and tribunals)"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Provides a basic sketch in general terms of ONE method"
                         }
                     ],
        "keyPoints":  "Methods of resolving workplace disputes: negotiation, mediation, grievance procedures, involvement of courts and tribunals.",
        "sampleAnswer": "Mediation is one method of resolving a workplace dispute, where an independent third party helps the employer and employee discuss the issue and negotiate a mutually acceptable solution, without imposing a binding decision on either party, unlike arbitration."
    },
    {
        "id":  "bs-2-knox13-3",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Marketing",
        "source":  "Knox Grammar 2013 Trial HSC (Q22a)",
        "stimulus":  "TMAC Pty Ltd is a company that makes chocolate for the wholesale chocolate market. They are aiming to diversify into the retail/consumer chocolate bar market in Australia. This market is highly competitive.",
        "question":  "Describe ONE way in which ethics could influence TMAC Pty Ltd\u0027s marketing function.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Clearly and concisely provides the key features and characteristics of ONE way ethics could influence the marketing function"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Provides a basic description OR clear outline (no mark is given for merely identifying one way)"
                         }
                     ],
        "keyPoints":  "Ethics could influence TMAC\u0027s marketing through truth, accuracy and good taste in advertising, avoiding products that may damage health, engaging in fair competition, or avoiding sugging.",
        "sampleAnswer": "Ethics in marketing means promoting products honestly and responsibly. As TMAC enters the highly competitive retail chocolate market, it would be unethical to make exaggerated or misleading claims about the health benefits of its chocolate bars to lure customers from rivals; instead, all promotional claims should be truthful, accurate and able to be substantiated."
    },
    {
        "id":  "bs-2-knox13-4",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Marketing",
        "source":  "Knox Grammar 2013 Trial HSC (Q22b)",
        "stimulus":  "TMAC Pty Ltd is a company that makes chocolate for the wholesale chocolate market. They are aiming to diversify into the retail/consumer chocolate bar market in Australia. This market is highly competitive.",
        "question":  "To what extent will consumer laws influence TMAC Pty Ltd\u0027s promotional strategy for their new chocolate bar?",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Provides a clear judgement as to the extent to which consumer laws will influence TMAC Pty Ltd\u0027s promotional strategy for the new chocolate bar"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Provides a basic description OR clear outline of the extent (no mark for merely identifying one way)"
                         }
                     ],
        "keyPoints":  "Relevant consumer laws include the Australian Consumer Law (ACL) and the Competition and Consumer Act, which prohibit deceptive and misleading advertising and price discrimination, significantly influencing TMAC\u0027s promotional strategy.",
        "sampleAnswer": "Consumer laws, particularly the Australian Consumer Law, will significantly influence TMAC\u0027s promotional strategy, as they prohibit deceptive or misleading advertising. This means TMAC cannot make false claims about its new chocolate bar\u0027s quality or ingredients, and any comparisons with competitors must be accurate, considerably limiting the promotional tactics TMAC can legally use to compete."
    },
    {
        "id":  "bs-2-knox13-5",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Marketing",
        "source":  "Knox Grammar 2013 Trial HSC (Q22c)",
        "stimulus":  "TMAC Pty Ltd is a company that makes chocolate for the wholesale chocolate market. They are aiming to diversify into the retail/consumer chocolate bar market in Australia. This market is highly competitive.",
        "question":  "Why should there be a relationship between TMAC Pty Ltd\u0027s marketing planning process and their finance budgeting process?",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Provides clear reasons for why there should be a relationship between the marketing planning process and the finance budgeting process"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Provides sound reasons for why there should be a relationship"
                         }
                     ],
        "keyPoints":  "Interdependence between the marketing planning process (situational analysis, setting objectives, identifying target markets, developing strategies, implementation and control) and the finance budgeting process (developing financial forecasts, comparing actual and planned results).",
        "sampleAnswer": "Marketing planning and finance budgeting are interdependent because marketing strategies, such as launching TMAC\u0027s new chocolate bar into a competitive market, require funding that must be planned and controlled through the budgeting process. Without this relationship, TMAC risks setting objectives it cannot afford or failing to monitor whether marketing spending is generating an adequate return."
    },
    {
        "id":  "bs-2-knox13-6",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Operations",
        "source":  "Knox Grammar 2013 Trial HSC (Q23a)",
        "stimulus":  "SEED Ltd, a global IT company, has set-up operations in Australia. SEED Ltd produces computer software for the Asia-Pacific region and delivers training programs for customers in various forms, including on-line.",
        "question":  "How will the effective use of task design and process layout assist SEED Pty Ltd to develop a competitive advantage?",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Provides a clear process (or cause-effect) of how the effective use of task design and process layout will assist SEED Pty Ltd to develop a competitive advantage"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Provides a sound process"
                         }
                     ],
        "keyPoints":  "Task design clarifies employee roles, allowing tasks to be completed efficiently; process layout groups functions together to create efficiencies and minimise costs, helping build competitive advantage.",
        "sampleAnswer": "Task design clarifies what each SEED employee\u0027s role and responsibilities are, allowing staff developing software or delivering training to work efficiently. Combined with an effective process layout that groups related functions together, this minimises wasted time and cost, improving the speed and quality of SEED\u0027s outputs and helping it build a competitive advantage over rival providers."
    },
    {
        "id":  "bs-2-knox13-7",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Operations",
        "source":  "Knox Grammar 2013 Trial HSC (Q23b)",
        "stimulus":  "SEED Ltd, a global IT company, has set-up operations in Australia. SEED Ltd produces computer software for the Asia-Pacific region and delivers training programs for customers in various forms, including on-line.",
        "question":  "How important is customer service in allowing SEED Pty Ltd to produce quality outputs?",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Provides a clear judgement as to the importance of customer service in allowing SEED Pty Ltd to produce quality outputs"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Provides a sound judgement as to the importance of customer service"
                         }
                     ],
        "keyPoints":  "As SEED\u0027s product is largely a service (training/software support), customer service is a core element of the output; acting on customer feedback allows SEED to improve the quality of its outputs in response to customer needs.",
        "sampleAnswer": "Customer service is extremely important for SEED because much of what it delivers, such as its online training programs, is a service, making customer service a core part of the actual output rather than an add-on. Responding to customer feedback allows SEED to identify where its training or software falls short and adjust accordingly, directly improving output quality."
    },
    {
        "id":  "bs-2-knox13-8",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Finance",
        "source":  "Knox Grammar 2013 Trial HSC (Q24a)",
        "stimulus":  "Fui Fui Muscle Up produces and sells fitness equipment in Australia. They are the Number 1 choice for fitness professionals and most gymnasiums. Fui Fui Muscle Up is aiming to expand their operations, including selling their products offshore. They require $20 million to achieve their plans.",
        "question":  "Why is the global economic outlook an important financial consideration for Fui Fui Muscle Up?",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Provides clear reason(s) as to why the global economic outlook is an important financial consideration for Fui Fui Muscle Up"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Provides sound reason(s) as to why"
                         }
                     ],
        "keyPoints":  "The global economic cycle, employment levels, access to funds, changes in consumer demand, and exchange rate/interest rate fluctuations affect global growth, expansion success and profits.",
        "sampleAnswer": "The global economic outlook affects overseas demand and the cost of borrowing needed for Fui Fui Muscle Up\u0027s expansion. If global economic conditions weaken, demand for its fitness equipment offshore may fall and the $20 million required may become harder or more expensive to raise, whereas favourable global conditions support stronger overseas sales and easier access to finance."
    },
    {
        "id":  "bs-3-knox13-1",
        "criteriaSource": "official",
        "marks":  3,
        "topic":  "Marketing",
        "source":  "Knox Grammar 2013 Trial HSC (Q22d(i))",
        "stimulus":  "TMAC Pty Ltd is a company that makes chocolate for the wholesale chocolate market. They are aiming to diversify into the retail/consumer chocolate bar market in Australia. This market is highly competitive.\n\nTMAC Pty Ltd has decided to develop a chocolate bar that will be positioned as a premium product.",
        "question":  "Explain how ONE product strategy could be used by TMAC Pty Ltd to achieve their positioning goal.",
        "criteria":  [
                         {
                             "marks":  3,
                             "descriptor":  "Provides a clear cause-effect (or how/why) of how ONE product strategy could be used to achieve the positioning goal"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Provides a sound cause-effect (or how/why) of how ONE product strategy could be used to achieve the positioning goal"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Provides a limited cause-effect (or how/why) of ONE product strategy, OR a clear outline"
                         }
                     ],
        "keyPoints":  "Product strategies such as packaging, branding or product differentiation can be used to support a premium positioning goal.",
        "sampleAnswer": "TMAC could use branding as a product strategy to achieve its premium positioning goal. By developing a distinctive brand identity, including premium ingredient messaging and sophisticated packaging, TMAC can create a perception of high quality and exclusivity in consumers\u0027 minds. This differentiates the chocolate bar from cheaper, mass-market competitors and justifies a higher price, reinforcing the premium image TMAC wants to establish in the competitive retail chocolate market."
    },
    {
        "id":  "bs-3-knox13-2",
        "criteriaSource": "official",
        "marks":  3,
        "topic":  "Marketing",
        "source":  "Knox Grammar 2013 Trial HSC (Q22d(ii))",
        "stimulus":  "TMAC Pty Ltd is a company that makes chocolate for the wholesale chocolate market. They are aiming to diversify into the retail/consumer chocolate bar market in Australia. This market is highly competitive.\n\nTMAC Pty Ltd has decided to develop a chocolate bar that will be positioned as a premium product.",
        "question":  "Explain how ONE pricing strategy could be used by TMAC Pty Ltd to achieve their positioning goal.",
        "criteria":  [
                         {
                             "marks":  3,
                             "descriptor":  "Provides a clear cause-effect (or how/why) of how ONE pricing strategy could be used to achieve the positioning goal"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Provides a sound cause-effect (or how/why) of how ONE pricing strategy could be used to achieve the positioning goal"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Provides a limited cause-effect (or how/why) of ONE pricing strategy, OR a clear outline"
                         }
                     ],
        "keyPoints":  "A market skimming pricing strategy, where a high initial price is set, can reinforce a premium quality perception.",
        "sampleAnswer": "Price skimming involves setting a high initial price for a new product. TMAC could use this strategy, pricing its new chocolate bar well above standard bars on the market. Because consumers often associate a higher price with higher quality, this reinforces TMAC\u0027s premium positioning and signals that the product is a superior offering, helping differentiate it from cheaper, mass-market bars sold by competitors."
    },
    {
        "id":  "bs-4-knox13-1",
        "criteriaSource": "official",
        "marks":  4,
        "topic":  "Human Resources",
        "source":  "Knox Grammar 2013 Trial HSC (Q21c)",
        "stimulus":  null,
        "question":  "Examine ONE advantage of a diverse, culturally competent workforce for a global business.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Provides a clear and accurate inquiry into ONE advantage"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Provides a sound inquiry into ONE advantage"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Provides a limited inquiry into ONE advantage, OR a clear outline"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Provides a poor inquiry into ONE advantage, OR a limited outline"
                         }
                     ],
        "keyPoints":  "Advantages include increased creativity, increased productivity, new attitudes and processes, developed language skills, increased ability to attract and retain talent, and enhanced team synergy and communication.",
        "sampleAnswer": "Cultural competence refers to a workforce made up of employees from a range of cultural backgrounds who can work effectively together. One advantage for a global business is increased creativity and innovation, as diverse employees bring a wider range of perspectives and problem-solving approaches, leading to more innovative products and marketing ideas. For a global business, this also improves understanding of, and responsiveness to, customer needs in different international markets, giving the business a competitive advantage over less culturally diverse rivals."
    },
    {
        "id":  "bs-4-knox13-2",
        "criteriaSource": "derived",
        "marks":  4,
        "topic":  "Finance",
        "source":  "Knox Grammar 2013 Trial HSC (Q24b)",
        "stimulus":  "Fui Fui Muscle Up produces and sells fitness equipment in Australia. They are the Number 1 choice for fitness professionals and most gymnasiums. Fui Fui Muscle Up is aiming to expand their operations, including selling their products offshore. They require $20 million to achieve their plans.",
        "question":  "Outline TWO external sources of finance that could match the expansion plans of Fui Fui Muscle Up.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Provides a clear sketch in general terms of TWO external sources of finance that match the expansion plans"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Provides a limited sketch in general terms of TWO external sources of finance that match the plans, OR a clear sketch of ONE appropriate external source and an incorrect or inappropriate second source"
                         }
                     ],
        "keyPoints":  "Suitable external sources for a large, long-term expansion include a long-term loan/mortgage, debentures, a new share issue (equity), unsecured notes, or leasing. Short-term sources such as an overdraft are not appropriate.",
        "sampleAnswer": "Two suitable external sources for Fui Fui Muscle Up\u0027s $20 million expansion are a mortgage and a new share issue. A mortgage is a long-term loan secured against property or other assets, providing a large sum over an extended repayment period matching a long-term offshore expansion. Alternatively, raising equity through a new share issue provides substantial capital without a fixed repayment or interest obligation, making it well suited to funding significant, long-term growth."
    },
    {
        "id":  "bs-4-knox13-3",
        "criteriaSource": "derived",
        "marks":  4,
        "topic":  "Finance",
        "source":  "Knox Grammar 2013 Trial HSC (Q24c)",
        "stimulus":  "Fui Fui Muscle Up produces and sells fitness equipment in Australia. They are the Number 1 choice for fitness professionals and most gymnasiums. Fui Fui Muscle Up is aiming to expand their operations, including selling their products offshore. They require $20 million to achieve their plans.",
        "question":  "Analyse ONE global financial management strategy Fui Fui Muscle Up could use in order to reduce the risks of selling their fitness equipment into the global market place.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Provides a clear understanding of the relationship between, and implications of, ONE appropriate global financial management strategy (e.g. hedging, derivatives, methods of international payment) in reducing global risk for Fui Fui Muscle Up"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Provides a limited understanding of ONE global financial management strategy, OR a clear outline of ONE global financial management strategy"
                         }
                     ],
        "keyPoints":  "Global financial management strategies include methods of international payment (e.g. payment in advance, letters of credit), hedging and derivatives, used to reduce risks such as non-payment and currency fluctuations.",
        "sampleAnswer": "Hedging is a global financial management strategy that uses instruments such as forward exchange contracts to lock in a set exchange rate for a future transaction. Fui Fui Muscle Up could use hedging to protect against adverse currency movements between agreeing an overseas sale and receiving payment, ensuring it receives a predictable amount of revenue in Australian dollars. This reduces financial uncertainty and allows the business to plan and budget more confidently for its offshore expansion despite volatile global currency markets."
    },
    {
        "id":  "bs-6-knox13-1",
        "criteriaSource": "derived",
        "marks":  6,
        "topic":  "Operations",
        "source":  "Knox Grammar 2013 Trial HSC (Q23c)",
        "stimulus":  "SEED Ltd, a global IT company, has set-up operations in Australia. SEED Ltd produces computer software for the Asia-Pacific region and delivers training programs for customers in various forms, including on-line.",
        "question":  "Why does SEED Ltd need to balance cost and quality when implementing their operations strategy in a global market?",
        "criteria":  [
                         {
                             "marks":  6,
                             "descriptor":  "Provides a clear understanding of the reasons why SEED Ltd needs to balance cost and quality when implementing its operations strategy in a global market"
                         },
                         {
                             "marks":  4,
                             "descriptor":  "Provides a sound understanding"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Provides a limited understanding"
                         }
                     ],
        "keyPoints":  "Operations strategies (technology, supply chain management, outsourcing, performance objectives) must be applied with reference to global factors such as global sourcing and economies of scale; cost/quality interaction means lowering costs (e.g. through outsourcing to low-cost labour) risks compromising quality and reputation in the global market.",
        "sampleAnswer": "Cost and quality are interdependent operations objectives that often work against each other: as product or service quality rises, so does the cost of producing it, while cutting costs, for example by outsourcing to lower-cost overseas labour, risks compromising quality. SEED Ltd needs to balance the two because, as a global IT company competing in the Asia-Pacific market, it must keep its software and online training affordable enough to remain price-competitive against international rivals while still meeting the quality expectations of customers who rely on its products and training for their own operations. If SEED prioritises cost alone, poor quality software or training could damage its reputation and lose customers; if it prioritises quality alone without regard to cost, its prices may become uncompetitive in price-sensitive global markets. Effectively balancing cost and quality therefore allows SEED to remain both competitive and reputable as it operates internationally."
    },
    {
        "id":  "bs-3-penrith20-1",
        "criteriaSource": "official",
        "marks":  3,
        "topic":  "Marketing",
        "source":  "Penrith Selective 2020 Trial HSC (Q21a)",
        "stimulus":  "Fabulous Fashion Pty Ltd is a retail shop that specialises in selling clothing for women. During the past year, the business experienced negative publicity in connection with customer complaints about poor service. As a result of these issues, the business did not achieve its forecasted financial objectives. The owners have instructed management to increase market share by 10% in the next six months.",
        "question":  "Outline TWO types of markets in which this business would operate.",
        "criteria":  [
                         {
                             "marks":  3,
                             "descriptor":  "Sketches in general terms TWO specific types of markets in which Fabulous Fashion Pty Ltd would operate, using relevant business terminology and syllabus concepts with skill and understanding"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Sketches in general terms ONE specific type of market in which Fabulous Fashion Pty Ltd would operate and identifies another, OR recognises and names TWO types of market"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Makes a basic statement about a type of market"
                         }
                     ],
        "keyPoints":  "Fabulous Fashion operates in the consumer market (selling clothing to individual customers for personal use) and would also interact with the resource/intermediate market when purchasing clothing stock or materials from suppliers.",
        "sampleAnswer": "A consumer market is one where goods and services are sold to individuals for personal use; Fabulous Fashion operates in this market by selling women\u0027s clothing directly to shoppers. A resource (intermediate) market is one where businesses buy inputs to use in producing their own goods or services; Fabulous Fashion operates in this market when it purchases clothing stock and materials from suppliers to sell in its stores."
    },
    {
        "id":  "bs-3-penrith20-2",
        "criteriaSource": "official",
        "marks":  3,
        "topic":  "Marketing",
        "source":  "Penrith Selective 2020 Trial HSC (Q21b)",
        "stimulus":  "Fabulous Fashion Pty Ltd is a retail shop that specialises in selling clothing for women. During the past year, the business experienced negative publicity in connection with customer complaints about poor service. As a result of these issues, the business did not achieve its forecasted financial objectives. The owners have instructed management to increase market share by 10% in the next six months.",
        "question":  "Recommend ONE marketing strategy this business could use to achieve its marketing objective.",
        "criteria":  [
                         {
                             "marks":  3,
                             "descriptor":  "Provides relevant reason(s) in favour of ONE specific marketing strategy Fabulous Fashion Pty Ltd could use to increase its market share"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Provides detailed information about how a marketing strategy could be used to increase market share (in general)"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Makes a basic statement about a marketing strategy and/or increasing market share"
                         }
                     ],
        "keyPoints":  "Given the customer service complaints, a \u0027people\u0027 strategy such as staff training would directly address the cause of lost market share while supporting the goal of a 10% increase.",
        "sampleAnswer": "Fabulous Fashion should use a people strategy, such as staff customer service training, to increase market share. As negative publicity from poor customer service caused it to miss its financial objectives and lose sales, improving how staff interact with customers directly addresses the root cause of lost trade. Better service is likely to improve customer satisfaction and word-of-mouth, helping the business recover its reputation and progress towards its target of a 10% increase in market share within six months."
    },
    {
        "id":  "bs-4-penrith20-1",
        "criteriaSource": "derived",
        "marks":  4,
        "topic":  "Marketing",
        "source":  "Penrith Selective 2020 Trial HSC (Q21c)",
        "stimulus":  "Fabulous Fashion Pty Ltd is a retail shop that specialises in selling clothing for women. During the past year, the business experienced negative publicity in connection with customer complaints about poor service. As a result of these issues, the business did not achieve its forecasted financial objectives. The owners have instructed management to increase market share by 10% in the next six months.",
        "question":  "Explain how TWO consumer laws could affect the marketing activities of this business in Australia.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Makes clearly evident how specific consumer laws affect specific aspects of marketing in Fabulous Fashion Pty Ltd, using relevant business terminology and syllabus concepts with skill and understanding"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Provides accurate and detailed information about the effect of consumer law on marketing activities (in general), using some appropriate business terminology"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Provides some general information about consumer law and its effect on marketing activities"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Makes a limited statement about consumer law and/or marketing activities"
                         }
                     ],
        "keyPoints":  "Relevant consumer laws include the Australian Consumer Law (ACL), which prohibits misleading and deceptive conduct and provides consumer guarantees, and the Competition and Consumer Act 2010, which prohibits anti-competitive and unfair trading practices.",
        "sampleAnswer": "The Australian Consumer Law prohibits misleading and deceptive conduct and provides consumer guarantees; this affects Fabulous Fashion\u0027s marketing by requiring that all advertising and claims about its clothing be truthful, and that products sold actually match the descriptions given to customers. The Competition and Consumer Act 2010 prohibits anti-competitive and unfair trading practices, meaning Fabulous Fashion cannot use unfair tactics, such as false comparative advertising against rivals, in its push to increase market share, and must compete lawfully as it tries to rebuild its reputation after the negative publicity."
    },
    {
        "id":  "bs-2-penrith20-1",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Finance",
        "source":  "Penrith Selective 2020 Trial HSC (Q22a)",
        "stimulus":  "The management of a highly successful Australian mining company, Fabulous Minerals Ltd, is examining alternative sources of $250 million in finance to open a new iron ore mine in a remote location in Western Australia. The demand for iron ore in world markets has fluctuated significantly in the past decade which has resulted in high volatility in iron ore prices. In the past 3 years the debt to equity ratio for this business has increased from 25% to 80% and is now 4 times larger than the industry average.",
        "question":  "Distinguish between primary and secondary markets in the Australian Securities Exchange (ASX).",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Makes the difference clear between the primary and secondary markets in the ASX"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Provides general information about the ASX"
                         }
                     ],
        "keyPoints":  "Primary market: where new shares are issued directly by a company to raise new capital. Secondary market: where existing shares are traded between investors, without raising new capital for the company.",
        "sampleAnswer": "The primary market is where a company like Fabulous Minerals issues new shares directly to investors to raise new capital, such as funds for its planned $250 million mine. The secondary market is where existing shares are subsequently traded between investors, which does not raise any new capital for the company itself."
    },
    {
        "id":  "bs-4-penrith20-2",
        "criteriaSource": "derived",
        "marks":  4,
        "topic":  "Finance",
        "source":  "Penrith Selective 2020 Trial HSC (Q22b)",
        "stimulus":  "The management of a highly successful Australian mining company, Fabulous Minerals Ltd, is examining alternative sources of $250 million in finance to open a new iron ore mine in a remote location in Western Australia. The demand for iron ore in world markets has fluctuated significantly in the past decade which has resulted in high volatility in iron ore prices. In the past 3 years the debt to equity ratio for this business has increased from 25% to 80% and is now 4 times larger than the industry average.",
        "question":  "Describe the role of the Australian Securities Exchange (ASX) in financial markets.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Provides detailed characteristics and features of the role of the ASX in financial markets, using relevant business terminology and syllabus concepts with skill and understanding"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Provides characteristics and features of the role of the ASX in financial markets"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Provides general information about the role of the ASX in financial markets, using some appropriate business terms"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Makes a basic or limited statement about the ASX and/or its role"
                         }
                     ],
        "keyPoints":  "The ASX facilitates the raising of equity capital by companies, provides a regulated marketplace for the trading of shares and other securities, and provides liquidity, price transparency and investor confidence in financial markets.",
        "sampleAnswer": "The Australian Securities Exchange (ASX) is Australia\u0027s main financial market for trading company shares and other securities. It plays a key role by allowing companies such as Fabulous Minerals to raise equity capital from investors to fund projects like its new iron ore mine, while providing a regulated, transparent marketplace where investors can buy and sell shares. This regulation and transparency give investors confidence and provide liquidity, meaning shares can be readily bought and sold, which supports efficient capital allocation across the economy."
    },
    {
        "id":  "bs-4-penrith20-3",
        "criteriaSource": "derived",
        "marks":  4,
        "topic":  "Finance",
        "source":  "Penrith Selective 2020 Trial HSC (Q22c)",
        "stimulus":  "The management of a highly successful Australian mining company, Fabulous Minerals Ltd, is examining alternative sources of $250 million in finance to open a new iron ore mine in a remote location in Western Australia. The demand for iron ore in world markets has fluctuated significantly in the past decade which has resulted in high volatility in iron ore prices. In the past 3 years the debt to equity ratio for this business has increased from 25% to 80% and is now 4 times larger than the industry average.",
        "question":  "Explain TWO disadvantages associated with obtaining finance through the Australian Securities Exchange.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Makes evident, with detailed elaboration, TWO specific disadvantages of obtaining finance through the ASX, using relevant business terminology and syllabus concepts with skill and understanding"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Makes evident ONE specific disadvantage of obtaining finance through the ASX AND recognises and names another disadvantage, using some appropriate business terminology"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Makes evident ONE specific disadvantage of obtaining finance through the ASX, OR identifies TWO disadvantages with insufficient elaboration"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Makes a limited statement about a disadvantage of obtaining finance through the ASX"
                         }
                     ],
        "keyPoints":  "Disadvantages include dilution of ownership and control (relevant given Fabulous Minerals\u0027 high and rising gearing), the significant cost and time of listing/compliance, the obligation to share profits through dividends, and increased public disclosure and scrutiny requirements.",
        "sampleAnswer": "One disadvantage of raising finance through the ASX is the dilution of ownership and control, as issuing new shares to fund the $250 million mine would reduce the existing owners\u0027 proportional stake in Fabulous Minerals, a concern given its debt-to-equity ratio has already risen sharply to four times the industry average. A second disadvantage is the significant cost and time involved in listing and complying with ongoing ASX disclosure requirements, along with the obligation to share future profits with new shareholders through dividends."
    },
    {
        "id":  "bs-4-penrith20-4",
        "criteriaSource": "derived",
        "marks":  4,
        "topic":  "Human Resources",
        "source":  "Penrith Selective 2020 Trial HSC (Q23a)",
        "stimulus":  null,
        "question":  "Discuss the influence of government in determining employment contracts in Australia.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Identifies an issue and provides points for and/or against the influence of government in determining employment contracts in Australia, using relevant business terminology and syllabus concepts with skill and understanding"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Provides accurate, relevant and detailed information about the influence of government in determining employment contracts in Australia, using some appropriate business terminology"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Provides general information about the influence of government on employment contracts in Australia"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Makes a limited statement about the influence of government on employment contracts"
                         }
                     ],
        "keyPoints":  "Government influences employment contracts through legislation such as the Fair Work Act 2009 and the National Employment Standards, awards, and minimum wage regulation, which set legal minimum entitlements while balancing employee protection against business flexibility.",
        "sampleAnswer": "The government influences employment contracts through legislation such as the Fair Work Act 2009 and the National Employment Standards, which set legally binding minimum wages, leave entitlements and conditions that all contracts must meet. This protects employees from exploitation and ensures fairness across industries. However, government regulation can also reduce flexibility for businesses, as it limits how far employers can negotiate contract terms and can increase labour costs, particularly for small businesses. Overall, government influence is necessary to protect worker rights, but it requires businesses to carefully balance compliance with the flexibility needed to remain competitive."
    },
    {
        "id":  "bs-6-penrith20-1",
        "criteriaSource": "derived",
        "marks":  6,
        "topic":  "Human Resources",
        "source":  "Penrith Selective 2020 Trial HSC (Q23b)",
        "stimulus":  null,
        "question":  "With reference to a specific case study, analyse how a business has responded to social influences on human resource management.",
        "criteria":  [
                         {
                             "marks":  6,
                             "descriptor":  "Draws out and relates the implications of a specific business\u0027 response to a specific social influence(s) on human resource management, using relevant business terminology and syllabus concepts with skill and understanding, with clear reference to a specific case study"
                         },
                         {
                             "marks":  4,
                             "descriptor":  "Provides detailed information about a business response to a specific social influence on human resource management, using some appropriate business terminology"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Provides general information about a social influence on human resource management and/or a business\u0027 response to social influences in general"
                         }
                     ],
        "keyPoints":  "Social influences include changing work patterns (career flexibility, job mobility, greater workforce participation of women, ageing workforce) and living standards (WHS, wage increases, work/life balance). Analysis should reference a specific real business case study and its actual response.",
        "sampleAnswer": "Social influences on HR include changing work patterns, such as increased demand for flexible hours and remote work, and changing living standards, such as growing expectations around work-life balance and workplace safety. For example, Atlassian, an Australian software company, responded to these influences by introducing a permanent \"Team Anywhere\" policy, allowing employees to work from anywhere in the country they are legally permitted to work. This directly responded to employees\u0027 growing desire for flexibility and improved work-life balance following changing social attitudes to where and how work is performed. The policy has helped Atlassian attract and retain skilled staff in a competitive global tech labour market, reduce office overheads, and improve employee satisfaction and productivity, showing how a considered HR response to a specific social influence can support both employee wellbeing and the achievement of business objectives."
    },
    {
        "id":  "bs-2-penrith20-2",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Operations",
        "source":  "Penrith Selective 2020 Trial HSC (Q24a)",
        "stimulus":  "Precision Engineering Ltd manufactures diesel engines in Australia for both domestic and international markets. To comply with new environmental regulations imposed by the Federal government, management estimate that they will need at least $5 million in new finance to upgrade the technology used in its factory.",
        "question":  "Identify TWO ways that government policy could affect operations management in this business.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Recognises and names TWO ways that government policy could affect operations management in Precision Engineering Ltd"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Recognises and names ONE way that government policy could affect operations management (in general)"
                         }
                     ],
        "keyPoints":  "Government policy can affect operations through environmental regulations requiring new technology and compliance costs, workplace safety laws affecting production processes, and industrial relations laws affecting the workforce.",
        "sampleAnswer": "Government policy can affect Precision Engineering\u0027s operations through environmental regulations, which have forced it to spend an estimated $5 million upgrading factory technology to reduce emissions, and through workplace safety laws, which set legal requirements for how its diesel engine production processes must be designed and run."
    },
    {
        "id":  "bs-3-penrith20-3",
        "criteriaSource": "official",
        "marks":  3,
        "topic":  "Operations",
        "source":  "Penrith Selective 2020 Trial HSC (Q24b)",
        "stimulus":  "Precision Engineering Ltd manufactures diesel engines in Australia for both domestic and international markets. To comply with new environmental regulations imposed by the Federal government, management estimate that they will need at least $5 million in new finance to upgrade the technology used in its factory.",
        "question":  "Explain why environmental sustainability is a key concern of operations management.",
        "criteria":  [
                         {
                             "marks":  3,
                             "descriptor":  "Makes evident why environmental sustainability is a key concern of operations management, using relevant business terminology and syllabus concepts with skill and understanding"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Provides general information about why environmental sustainability is a concern of operations management"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Makes a limited statement about environmental sustainability and/or operations management"
                         }
                     ],
        "keyPoints":  "Environmental sustainability is a key concern because operations processes consume resources and produce waste/emissions; businesses must comply with environmental regulation, manage reputational and legal risk, and respond to growing consumer expectations for sustainable practices.",
        "sampleAnswer": "Environmental sustainability means using resources and managing waste in ways that do not compromise the environment for future generations. It is a key concern for operations management because production processes such as Precision Engineering\u0027s engine manufacturing consume resources and generate emissions, and the business must comply with environmental regulations, like those prompting its $5 million technology upgrade, or face penalties. Failing to manage environmental impact can also damage a business\u0027s reputation with increasingly environmentally conscious customers and communities."
    },
    {
        "id":  "bs-5-penrith20-1",
        "criteriaSource": "official",
        "marks":  5,
        "topic":  "Operations",
        "source":  "Penrith Selective 2020 Trial HSC (Q24c)",
        "stimulus":  "Precision Engineering Ltd manufactures diesel engines in Australia for both domestic and international markets. To comply with new environmental regulations imposed by the Federal government, management estimate that they will need at least $5 million in new finance to upgrade the technology used in its factory.",
        "question":  "Assess THREE reasons why change may be resisted in this business.",
        "criteria":  [
                         {
                             "marks":  5,
                             "descriptor":  "Makes an informed judgment about THREE reasons why change may be resisted at Precision Engineering Ltd, using relevant business terminology and syllabus concepts with skill and understanding and clear reference to the stimulus"
                         },
                         {
                             "marks":  4,
                             "descriptor":  "Provides detailed information about THREE reasons why change may be resisted, using some relevant business terminology and syllabus concepts, with reference to the stimulus"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Provides general information about at least TWO reasons why change may be resisted, using some appropriate business terminology"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Provides general information about ONE reason why change may be resisted, OR identifies at least TWO reasons why change may be resisted"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Identifies ONE reason, or makes a limited statement about why change may be resisted"
                         }
                     ],
        "keyPoints":  "Reasons for resistance to change: financial cost of the $5 million technology upgrade, need for staff retraining on new technology, fear of job losses/redundancy, inertia/comfort with existing established processes, and disruption to production during the transition.",
        "sampleAnswer": "Change may be resisted at Precision Engineering for several reasons. The financial cost of the $5 million technology upgrade may be resisted by owners or managers concerned about the impact on cash flow and short-term profitability. Employees may resist due to the need for retraining on new technology, which takes time and may cause anxiety about being unable to master new systems. There may also be inertia, as staff comfortable with existing, established production processes are naturally reluctant to change familiar routines. Of these, the financial cost is likely the most significant barrier, since without securing the required $5 million in finance the environmental upgrade cannot proceed at all, whereas retraining and inertia, while real obstacles, can typically be managed through effective change management, communication and support from management."
    },
    {
        "id":  "bs-1-penrith21-1",
        "criteriaSource": "official",
        "marks":  1,
        "topic":  "Marketing",
        "source":  "Penrith Selective 2021 Trial HSC (Q24a)",
        "stimulus":  "Merino Pty Ltd is a market leader in manufacturing high quality, Australian made woollen garments. Their clothing is popular with overseas tourists and Australians in the 40+ age group. The clothing is sold through specialty stores in tourist hot spots and department stores in major cities and towns. Recently, sales are falling due to a drop in tourism, and they wish to expand their product range to target a younger age group.",
        "question":  "Identify ONE strength for this business.",
        "criteria":  [
                         {
                             "marks":  1,
                             "descriptor":  "Correctly names a strength for Merino Pty Ltd"
                         }
                     ],
        "keyPoints":  "Strengths could include Merino\u0027s market-leading position, its reputation for high quality Australian-made products, or its established distribution through specialty and department stores.",
        "sampleAnswer": "One strength is Merino\u0027s reputation as a market leader in high quality, Australian made woollen garments."
    },
    {
        "id":  "bs-2-penrith21-1",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Operations",
        "source":  "Penrith Selective 2021 Trial HSC (Q21a)",
        "stimulus":  null,
        "question":  "Distinguish between transformed resources and transforming resources.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Demonstrates a clear understanding of the difference between transformed resources and transforming resources"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Provides some relevant information about transformed resources and transforming resources"
                         }
                     ],
        "keyPoints":  "Transformed resources are inputs that are changed or converted in the operations process (materials, information, customers). Transforming resources are inputs that carry out the transformation process (human resources, facilities).",
        "sampleAnswer": "Transformed resources are inputs that are changed or converted during the operations process, such as materials, information and customers. Transforming resources are the inputs that carry out this change, such as human resources and facilities like machinery and equipment."
    },
    {
        "id":  "bs-2-penrith21-2",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Finance",
        "source":  "Penrith Selective 2021 Trial HSC (Q23a)",
        "stimulus":  {
                         "blocks":  [
                                        {
                                            "type":  "text",
                                            "text":  "Balance Sheet of Local Couriers as at 30th June 2021"
                                        },
                                        {
                                            "type":  "table",
                                            "title":  "Balance Sheet of Local Couriers",
                                            "columns":  [
                                                            "",
                                                            "2020 ($)",
                                                            "2021 ($)"
                                                        ],
                                            "rows":  [
                                                         [
                                                             "Cash",
                                                             "4 000",
                                                             "20 000"
                                                         ],
                                                         [
                                                             "Inventory",
                                                             "9 000",
                                                             "14 000"
                                                         ],
                                                         [
                                                             "Accounts Receivable",
                                                             "24 000",
                                                             "20 000"
                                                         ],
                                                         [
                                                             "Total Current Assets",
                                                             "37 000",
                                                             "54 000"
                                                         ],
                                                         [
                                                             "Equipment",
                                                             "54 000",
                                                             "39 000"
                                                         ],
                                                         [
                                                             "Motor Vehicles",
                                                             "82 000",
                                                             "88 000"
                                                         ],
                                                         [
                                                             "Total Non-current Assets",
                                                             "136 000",
                                                             "127 000"
                                                         ],
                                                         [
                                                             "Total Assets",
                                                             "173 000",
                                                             "181 000"
                                                         ],
                                                         [
                                                             "Bank Overdraft",
                                                             "3 600",
                                                             "4 000"
                                                         ],
                                                         [
                                                             "Accounts Payable",
                                                             "12 400",
                                                             "12 000"
                                                         ],
                                                         [
                                                             "Total Current Liabilities",
                                                             "16 000",
                                                             "16 000"
                                                         ],
                                                         [
                                                             "Loan (Non-current Liabilities)",
                                                             "96 000",
                                                             "96 000"
                                                         ],
                                                         [
                                                             "Total Liabilities",
                                                             "112 000",
                                                             "112 000"
                                                         ],
                                                         [
                                                             "Capital",
                                                             "42 000",
                                                             "48 000"
                                                         ],
                                                         [
                                                             "Net Profit",
                                                             "27 000",
                                                             "42 000"
                                                         ],
                                                         [
                                                             "Less Drawings",
                                                             "8 000",
                                                             "21 000"
                                                         ],
                                                         [
                                                             "Total Owner\u0027s Equity",
                                                             "61 000",
                                                             "69 000"
                                                         ]
                                                     ]
                                        },
                                        {
                                            "type":  "table",
                                            "title":  "Additional Information",
                                            "columns":  [
                                                            "",
                                                            "Sales",
                                                            "Trade Credit Policy"
                                                        ],
                                            "rows":  [
                                                         [
                                                             "2020",
                                                             "$156 000",
                                                             "40 days"
                                                         ],
                                                         [
                                                             "2021",
                                                             "$186 000",
                                                             ""
                                                         ]
                                                     ]
                                        }
                                    ]
                     },
        "question":  "Calculate the change in Local Couriers\u0027 working capital between 2020 and 2021. Show your working.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Correctly calculates the change in working capital as $17,000 and shows correct working"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "States the correct working for working capital but with an incorrect final calculation, OR provides the correct answer only"
                         }
                     ],
        "keyPoints":  "Working capital 2020 = $37,000 - $16,000 = $21,000. Working capital 2021 = $54,000 - $16,000 = $38,000. Change = increase of $17,000.",
        "sampleAnswer": "Working capital 2020 = $37,000 current assets âˆ’ $16,000 current liabilities = $21,000. Working capital 2021 = $54,000 âˆ’ $16,000 = $38,000. Working capital increased by $17,000 ($38,000 âˆ’ $21,000), showing Local Couriers\u0027 short-term financial position improved."
    },
    {
        "id":  "bs-3-penrith21-1",
        "criteriaSource": "official",
        "marks":  3,
        "topic":  "Operations",
        "source":  "Penrith Selective 2021 Trial HSC (Q21b)",
        "stimulus":  null,
        "question":  "Explain the influence of variation in demand on transformation processes.",
        "criteria":  [
                         {
                             "marks":  3,
                             "descriptor":  "Clearly makes the relationship evident between variation in demand and the transformation process"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Sketches in general terms how variation in demand influences the transformation process"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Makes a general statement about variation in demand or the transformation process"
                         }
                     ],
        "keyPoints":  "Variation in demand is the fluctuation in the amount of product/service required; it impacts sequencing and scheduling, technology, task design and process layout, monitoring/control/improvement, and the need to predict demand and secure sufficient inputs, labour and capital equipment in advance.",
        "sampleAnswer": "Variation in demand is the fluctuation in the amount of a product or service customers require over time. High or unpredictable variation forces a business to adjust its transformation process, for example by changing sequencing and scheduling, investing in more flexible technology, or redesigning tasks and process layout to cope with peaks. It also affects monitoring, control and improvement, as the business must predict demand in advance to secure sufficient inputs, labour and capital equipment, meaning poor forecasting of demand variation can lead to costly under or overproduction."
    },
    {
        "id":  "bs-3-penrith21-2",
        "criteriaSource": "official",
        "marks":  3,
        "topic":  "Finance",
        "source":  "Penrith Selective 2021 Trial HSC (Q23b)",
        "stimulus":  {
                         "blocks":  [
                                        {
                                            "type":  "text",
                                            "text":  "Balance Sheet of Local Couriers as at 30th June 2021"
                                        },
                                        {
                                            "type":  "table",
                                            "title":  "Balance Sheet of Local Couriers",
                                            "columns":  [
                                                            "",
                                                            "2020 ($)",
                                                            "2021 ($)"
                                                        ],
                                            "rows":  [
                                                         [
                                                             "Cash",
                                                             "4 000",
                                                             "20 000"
                                                         ],
                                                         [
                                                             "Inventory",
                                                             "9 000",
                                                             "14 000"
                                                         ],
                                                         [
                                                             "Accounts Receivable",
                                                             "24 000",
                                                             "20 000"
                                                         ],
                                                         [
                                                             "Total Current Assets",
                                                             "37 000",
                                                             "54 000"
                                                         ],
                                                         [
                                                             "Equipment",
                                                             "54 000",
                                                             "39 000"
                                                         ],
                                                         [
                                                             "Motor Vehicles",
                                                             "82 000",
                                                             "88 000"
                                                         ],
                                                         [
                                                             "Total Non-current Assets",
                                                             "136 000",
                                                             "127 000"
                                                         ],
                                                         [
                                                             "Total Assets",
                                                             "173 000",
                                                             "181 000"
                                                         ],
                                                         [
                                                             "Bank Overdraft",
                                                             "3 600",
                                                             "4 000"
                                                         ],
                                                         [
                                                             "Accounts Payable",
                                                             "12 400",
                                                             "12 000"
                                                         ],
                                                         [
                                                             "Total Current Liabilities",
                                                             "16 000",
                                                             "16 000"
                                                         ],
                                                         [
                                                             "Loan (Non-current Liabilities)",
                                                             "96 000",
                                                             "96 000"
                                                         ],
                                                         [
                                                             "Total Liabilities",
                                                             "112 000",
                                                             "112 000"
                                                         ],
                                                         [
                                                             "Capital",
                                                             "42 000",
                                                             "48 000"
                                                         ],
                                                         [
                                                             "Net Profit",
                                                             "27 000",
                                                             "42 000"
                                                         ],
                                                         [
                                                             "Less Drawings",
                                                             "8 000",
                                                             "21 000"
                                                         ],
                                                         [
                                                             "Total Owner\u0027s Equity",
                                                             "61 000",
                                                             "69 000"
                                                         ]
                                                     ]
                                        },
                                        {
                                            "type":  "table",
                                            "title":  "Additional Information",
                                            "columns":  [
                                                            "",
                                                            "Sales",
                                                            "Trade Credit Policy"
                                                        ],
                                            "rows":  [
                                                         [
                                                             "2020",
                                                             "$156 000",
                                                             "40 days"
                                                         ],
                                                         [
                                                             "2021",
                                                             "$186 000",
                                                             ""
                                                         ]
                                                     ]
                                        }
                                    ]
                     },
        "question":  "Using the accounts receivable turnover ratio (sales ÷ accounts receivable), calculate and comment on the efficiency of Local Couriers between 2020 and 2021.",
        "criteria":  [
                         {
                             "marks":  3,
                             "descriptor":  "Correctly calculates and comments on the efficiency (sales ÷ accounts receivable) of Local Couriers for both years, with reference to the business\u0027s trade credit policy"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Correctly calculates the efficiency of Local Couriers for both years and provides a brief comment"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Correctly calculates the accounts receivable turnover ratio for Local Couriers"
                         }
                     ],
        "keyPoints":  "ARTR 2020 = $156,000 ÷ $24,000 = 6.5 times (approx. 56.2 days). ARTR 2021 = $186,000 ÷ $20,000 = 9.3 times (approx. 39.2 days). Efficiency of debt collection has improved and is now within the 40-day trade credit policy.",
        "sampleAnswer": "Accounts receivable turnover ratio 2020 = $156,000 Ã· $24,000 = 6.5 times, meaning debtors took around 56 days to pay on average, exceeding the 40-day trade credit policy. In 2021 it improved to $186,000 Ã· $20,000 = 9.3 times, or about 39 days, now within the 40-day policy. This shows Local Couriers\u0027 efficiency in collecting debts has improved significantly, reducing the risk of bad debts and easing pressure on liquidity."
    },
    {
        "id":  "bs-3-penrith21-3",
        "criteriaSource": "official",
        "marks":  3,
        "topic":  "Finance",
        "source":  "Penrith Selective 2021 Trial HSC (Q23c)",
        "stimulus":  {
                         "blocks":  [
                                        {
                                            "type":  "text",
                                            "text":  "Balance Sheet of Local Couriers as at 30th June 2021"
                                        },
                                        {
                                            "type":  "table",
                                            "title":  "Balance Sheet of Local Couriers",
                                            "columns":  [
                                                            "",
                                                            "2020 ($)",
                                                            "2021 ($)"
                                                        ],
                                            "rows":  [
                                                         [
                                                             "Cash",
                                                             "4 000",
                                                             "20 000"
                                                         ],
                                                         [
                                                             "Inventory",
                                                             "9 000",
                                                             "14 000"
                                                         ],
                                                         [
                                                             "Accounts Receivable",
                                                             "24 000",
                                                             "20 000"
                                                         ],
                                                         [
                                                             "Total Current Assets",
                                                             "37 000",
                                                             "54 000"
                                                         ],
                                                         [
                                                             "Equipment",
                                                             "54 000",
                                                             "39 000"
                                                         ],
                                                         [
                                                             "Motor Vehicles",
                                                             "82 000",
                                                             "88 000"
                                                         ],
                                                         [
                                                             "Total Non-current Assets",
                                                             "136 000",
                                                             "127 000"
                                                         ],
                                                         [
                                                             "Total Assets",
                                                             "173 000",
                                                             "181 000"
                                                         ],
                                                         [
                                                             "Bank Overdraft",
                                                             "3 600",
                                                             "4 000"
                                                         ],
                                                         [
                                                             "Accounts Payable",
                                                             "12 400",
                                                             "12 000"
                                                         ],
                                                         [
                                                             "Total Current Liabilities",
                                                             "16 000",
                                                             "16 000"
                                                         ],
                                                         [
                                                             "Loan (Non-current Liabilities)",
                                                             "96 000",
                                                             "96 000"
                                                         ],
                                                         [
                                                             "Total Liabilities",
                                                             "112 000",
                                                             "112 000"
                                                         ],
                                                         [
                                                             "Capital",
                                                             "42 000",
                                                             "48 000"
                                                         ],
                                                         [
                                                             "Net Profit",
                                                             "27 000",
                                                             "42 000"
                                                         ],
                                                         [
                                                             "Less Drawings",
                                                             "8 000",
                                                             "21 000"
                                                         ],
                                                         [
                                                             "Total Owner\u0027s Equity",
                                                             "61 000",
                                                             "69 000"
                                                         ]
                                                     ]
                                        },
                                        {
                                            "type":  "table",
                                            "title":  "Additional Information",
                                            "columns":  [
                                                            "",
                                                            "Sales",
                                                            "Trade Credit Policy"
                                                        ],
                                            "rows":  [
                                                         [
                                                             "2020",
                                                             "$156 000",
                                                             "40 days"
                                                         ],
                                                         [
                                                             "2021",
                                                             "$186 000",
                                                             ""
                                                         ]
                                                     ]
                                        }
                                    ]
                     },
        "question":  "Using the return on equity ratio (net profit ÷ total equity), calculate and comment on the profitability of Local Couriers between 2020 and 2021.",
        "criteria":  [
                         {
                             "marks":  3,
                             "descriptor":  "Correctly calculates and comments on the profitability (net profit ÷ total equity) of Local Couriers for both years, with a comparison to alternative returns"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Correctly calculates the profitability of Local Couriers for both years and provides a brief comment"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Correctly calculates the return on equity for Local Couriers"
                         }
                     ],
        "keyPoints":  "ROE 2020 = $27,000 ÷ $61,000 = 44.26%. ROE 2021 = $42,000 ÷ $69,000 = 60.86%. Profitability improved significantly and both years compare favourably to alternative investment returns (e.g. bank interest).",
        "sampleAnswer": "Return on equity 2020 = $27,000 Ã· $61,000 = 44.3%. Return on equity 2021 = $42,000 Ã· $69,000 = 60.9%. Profitability has improved substantially, and in both years the return significantly exceeds what the owners could earn from an alternative investment such as a bank term deposit, indicating Local Couriers is generating a strong return on the owners\u0027 investment in the business."
    },
    {
        "id":  "bs-4-penrith21-1",
        "criteriaSource": "official",
        "marks":  4,
        "topic":  "Finance",
        "source":  "Penrith Selective 2021 Trial HSC (Q23d)",
        "stimulus":  {
                         "blocks":  [
                                        {
                                            "type":  "text",
                                            "text":  "Balance Sheet of Local Couriers as at 30th June 2021"
                                        },
                                        {
                                            "type":  "table",
                                            "title":  "Balance Sheet of Local Couriers",
                                            "columns":  [
                                                            "",
                                                            "2020 ($)",
                                                            "2021 ($)"
                                                        ],
                                            "rows":  [
                                                         [
                                                             "Cash",
                                                             "4 000",
                                                             "20 000"
                                                         ],
                                                         [
                                                             "Inventory",
                                                             "9 000",
                                                             "14 000"
                                                         ],
                                                         [
                                                             "Accounts Receivable",
                                                             "24 000",
                                                             "20 000"
                                                         ],
                                                         [
                                                             "Total Current Assets",
                                                             "37 000",
                                                             "54 000"
                                                         ],
                                                         [
                                                             "Equipment",
                                                             "54 000",
                                                             "39 000"
                                                         ],
                                                         [
                                                             "Motor Vehicles",
                                                             "82 000",
                                                             "88 000"
                                                         ],
                                                         [
                                                             "Total Non-current Assets",
                                                             "136 000",
                                                             "127 000"
                                                         ],
                                                         [
                                                             "Total Assets",
                                                             "173 000",
                                                             "181 000"
                                                         ],
                                                         [
                                                             "Bank Overdraft",
                                                             "3 600",
                                                             "4 000"
                                                         ],
                                                         [
                                                             "Accounts Payable",
                                                             "12 400",
                                                             "12 000"
                                                         ],
                                                         [
                                                             "Total Current Liabilities",
                                                             "16 000",
                                                             "16 000"
                                                         ],
                                                         [
                                                             "Loan (Non-current Liabilities)",
                                                             "96 000",
                                                             "96 000"
                                                         ],
                                                         [
                                                             "Total Liabilities",
                                                             "112 000",
                                                             "112 000"
                                                         ],
                                                         [
                                                             "Capital",
                                                             "42 000",
                                                             "48 000"
                                                         ],
                                                         [
                                                             "Net Profit",
                                                             "27 000",
                                                             "42 000"
                                                         ],
                                                         [
                                                             "Less Drawings",
                                                             "8 000",
                                                             "21 000"
                                                         ],
                                                         [
                                                             "Total Owner\u0027s Equity",
                                                             "61 000",
                                                             "69 000"
                                                         ]
                                                     ]
                                        },
                                        {
                                            "type":  "table",
                                            "title":  "Additional Information",
                                            "columns":  [
                                                            "",
                                                            "Sales",
                                                            "Trade Credit Policy"
                                                        ],
                                            "rows":  [
                                                         [
                                                             "2020",
                                                             "$156 000",
                                                             "40 days"
                                                         ],
                                                         [
                                                             "2021",
                                                             "$186 000",
                                                             ""
                                                         ]
                                                     ]
                                        }
                                    ]
                     },
        "question":  "Explain how \u0027normalised earnings\u0027 AND \u0027capitalising expenses\u0027 could affect the financial statements of Local Couriers.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Provides how and/or why normalised earnings and capitalising expenses could affect the financial statements for Local Couriers"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Provides how and/or why normalised earnings or capitalising expenses could affect the financial statements for Local Couriers and identifies the other"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Provides how and/or why normalised earnings or capitalising expenses could affect the financial statements for Local Couriers OR makes a general statement about normalised earnings and capitalising expenses for Local Couriers"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Makes a general statement about normalised earnings or capitalising expenses"
                         }
                     ],
        "keyPoints":  "Normalised earnings adjust for irregular/one-off influences (e.g. a COVID-19-related downturn) to more accurately represent underlying earnings. Capitalising expenses records an expense as an asset rather than an expense, increasing non-current assets and reported profit, improving the apparent financial position and performance, though potentially misleading stakeholders.",
        "sampleAnswer": "Normalised earnings adjust reported profit to remove the effect of one-off or unusual events, such as a temporary COVID-19-related downturn, so the figures better reflect Local Couriers\u0027 true underlying earnings rather than a distorted single-year result. Capitalising expenses involves recording a cost as a non-current asset rather than an expense; this increases both non-current assets and reported net profit for 2021, making the business\u0027s financial position and performance appear stronger than they otherwise would, which could mislead stakeholders relying on the statements."
    },
    {
        "id":  "bs-4-penrith21-2",
        "criteriaSource": "official",
        "marks":  4,
        "topic":  "Marketing",
        "source":  "Penrith Selective 2021 Trial HSC (Q24b)",
        "stimulus":  "Merino Pty Ltd is a market leader in manufacturing high quality, Australian made woollen garments. Their clothing is popular with overseas tourists and Australians in the 40+ age group. The clothing is sold through specialty stores in tourist hot spots and department stores in major cities and towns. Recently, sales are falling due to a drop in tourism, and they wish to expand their product range to target a younger age group.",
        "question":  "Outline a market research process this business could use prior to developing the new product.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Sketches in general terms a market research process Merino Pty Ltd could use prior to developing the new product"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Provides characteristics and features of a market research process Merino Pty Ltd could use for the new product"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Provides characteristics and features of market research"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Makes a statement about market research"
                         }
                     ],
        "keyPoints":  "Market research process: determining information needs, data collection (primary and secondary data), data analysis and interpretation - applied to understanding the younger target market Merino wants to reach.",
        "sampleAnswer": "Market research is the process of gathering and analysing information about a market. Merino should first determine its information needs, such as what younger consumers want from woollen clothing. It can then collect primary data, such as surveys or focus groups with younger customers, and secondary data, such as industry reports on youth fashion trends. Finally, Merino must analyse and interpret this data to identify the preferences and buying behaviours of the younger target market before developing and launching the new product range."
    },
    {
        "id":  "bs-5-penrith21-1",
        "criteriaSource": "official",
        "marks":  5,
        "topic":  "Marketing",
        "source":  "Penrith Selective 2021 Trial HSC (Q24c)",
        "stimulus":  "Merino Pty Ltd is a market leader in manufacturing high quality, Australian made woollen garments. Their clothing is popular with overseas tourists and Australians in the 40+ age group. The clothing is sold through specialty stores in tourist hot spots and department stores in major cities and towns. Recently, sales are falling due to a drop in tourism, and they wish to expand their product range to target a younger age group.",
        "question":  "Recommend ONE promotional strategy this business could use for the new product.",
        "criteria":  [
                         {
                             "marks":  5,
                             "descriptor":  "Clearly identifies and provides reasons in favour of ONE promotional strategy Merino Pty Ltd could use prior to the launch of the new product"
                         },
                         {
                             "marks":  4,
                             "descriptor":  "Identifies and provides reasons in favour of ONE promotional strategy Merino Pty Ltd could use prior to the launch of the new product"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Provides characteristics of ONE promotional strategy Merino Pty Ltd could use prior to the launch of the new product"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Sketches in general terms a promotional strategy"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Makes reference to promotional strategies"
                         }
                     ],
        "keyPoints":  "Promotional strategy options: advertising, personal selling, sales promotion, publicity and public relations, or the communication process using opinion leaders/word of mouth - should be justified as suitable for reaching a younger target market.",
        "sampleAnswer": "Merino should use social media advertising as its promotional strategy for the new product range. Since the business wants to target a younger age group, traditional channels like print advertising in tourist locations are unlikely to reach this audience effectively, whereas platforms such as Instagram and TikTok are where younger consumers spend most of their time. Social media advertising also allows Merino to use visually engaging content and influencer partnerships to build brand awareness among younger consumers who may not yet know the brand, while remaining relatively low-cost compared with traditional mass media advertising. This is particularly important given Merino\u0027s recent fall in sales from declining tourism, as it needs a cost-effective way to reach a completely new customer segment. Overall, social media advertising is well suited to Merino\u0027s goal of expanding into a younger market while it manages reduced revenue from its traditional tourist customer base."
    },
    {
        "id":  "bs-6-penrith21-1",
        "criteriaSource": "official",
        "marks":  6,
        "topic":  "Operations",
        "source":  "Penrith Selective 2021 Trial HSC (Q21c)",
        "stimulus":  null,
        "question":  "With reference to a business case study/studies, discuss the balance between cost and quality in operations strategy.",
        "criteria":  [
                         {
                             "marks":  6,
                             "descriptor":  "Provides detailed points for and/or against the balance between cost and quality with reference to a specific business case study"
                         },
                         {
                             "marks":  5,
                             "descriptor":  "Provides points for and against the balance between cost and quality with reference to a specific business"
                         },
                         {
                             "marks":  4,
                             "descriptor":  "Provides characteristics and features of cost and quality with reference to a business"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Provides characteristics and features of cost and/or quality"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Sketches in general terms cost and/or quality"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Makes reference to cost/quality"
                         }
                     ],
        "keyPoints":  "When product/service quality increases, the cost of producing it usually also increases, and businesses tend to pass higher costs onto consumers through higher prices; operations strategy must balance the two based on the business\u0027s positioning and target market, illustrated with a real case study.",
        "sampleAnswer": "When a business increases the quality of its product or service, the cost of producing it typically rises, and businesses often pass this higher cost on to consumers through higher prices, meaning cost and quality must be balanced according to a business\u0027s target market and positioning. For example, Aldi has built its operations strategy around minimising cost, using a limited product range, no-frills store layouts and efficient supply chains to offer noticeably lower prices than competitors like Woolworths and Coles, accepting a more basic in-store experience and narrower range in return. In contrast, a business like David Jones positions itself around high quality and premium service, accepting significantly higher costs, such as more highly trained staff and premium store fit-outs, in order to charge higher prices to a market willing to pay for that experience. Neither approach is inherently superior; rather, each business\u0027s operations strategy reflects a deliberate balance between cost and quality suited to its chosen market position."
    },
    {
        "id":  "bs-1-pymble14-1",
        "criteriaSource": "official",
        "marks":  1,
        "topic":  "Marketing",
        "source":  "Pymble 2014 Trial HSC (Q21a)",
        "stimulus":  null,
        "question":  "Identify ONE illegal marketing practice under Australian consumer law.",
        "criteria":  [
                         {
                             "marks":  1,
                             "descriptor":  "Names ONE illegal marketing practice under Australian consumer law"
                         }
                     ],
        "keyPoints":  "Any recognised illegal practice, e.g. deceptive/misleading advertising, price fixing, bait advertising, false representation of goods, referral selling",
        "sampleAnswer": "One illegal marketing practice is deceptive or misleading advertising, where a business makes false claims about its products to attract customers."
    },
    {
        "id":  "bs-2-pymble14-1",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Marketing",
        "source":  "Pymble 2014 Trial HSC (Q21b)",
        "stimulus":  null,
        "question":  "Outline how psychological factors can influence consumer choice.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Provides a good sketch in general terms, indicating how psychological factors can influence consumer choice"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Provides limited information about how psychological factors can influence consumer choice"
                         }
                     ],
        "keyPoints":  "Psychological factors include perception, motivation, self-image and attitudes/beliefs; these shape how a consumer interprets marketing messages and forms preferences for particular products or brands",
        "sampleAnswer": "Psychological factors such as perception, motivation and attitudes shape how a consumer interprets marketing messages. For example, a consumer\u0027s perception of a brand\u0027s quality, or their motivation to satisfy a particular need, can strongly influence which products or brands they choose to purchase."
    },
    {
        "id":  "bs-2-pymble14-2",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Marketing",
        "source":  "Pymble 2014 Trial HSC (Q21c)",
        "stimulus":  null,
        "question":  "Describe ONE ethical criticism of marketing.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Provides good information about the characteristics and features of ONE ethical criticism of marketing"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Provides a limited sketch in general terms, indicating some features of ONE ethical criticism of marketing"
                         }
                     ],
        "keyPoints":  "Ethical criticisms include creation of needs/wants, materialism, cultural pollution, false wants, or targeting vulnerable groups (e.g. children); describe how the practice works and why it is considered unethical",
        "sampleAnswer": "One ethical criticism of marketing is that it creates artificial needs or wants, persuading consumers to buy products they do not genuinely need through persuasive advertising. This is considered unethical as it can encourage materialism and unnecessary spending, particularly among vulnerable groups such as children."
    },
    {
        "id":  "bs-2-pymble14-3",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Marketing",
        "source":  "Pymble 2014 Trial HSC (Q21d)",
        "stimulus":  null,
        "question":  "Explain how a situational analysis can be used to determine appropriate marketing strategies.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Clearly and accurately relates cause and effect, making the relationships evident and providing reasons why and/or how a situational analysis can be used to determine appropriate marketing strategies"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Provides information about the characteristics and features of how a situational analysis can be used to determine appropriate marketing strategies"
                         }
                     ],
        "keyPoints":  "A situational analysis examines internal (SWOT) and external (PEST) factors affecting the business; this information helps a business identify opportunities and threats, informing which marketing strategies (product, price, promotion, place) will best position the business against competitors",
        "sampleAnswer": "A situational analysis examines a business\u0027s internal strengths and weaknesses (SWOT) alongside external opportunities and threats in its environment. This information helps a business identify where it is best placed to compete, allowing it to select marketing strategies, such as product, price, promotion and place decisions, that suit its situation."
    },
    {
        "id":  "bs-3-pymble14-1",
        "criteriaSource": "official",
        "marks":  3,
        "topic":  "Marketing",
        "source":  "Pymble 2014 Trial HSC (Q21e)",
        "stimulus":  null,
        "question":  "Explain the interdependence of finance and marketing in a business. Support your answers with relevant examples.",
        "criteria":  [
                         {
                             "marks":  3,
                             "descriptor":  "Clearly and accurately relates cause and effect of the interdependence of finance and marketing in a business, supporting answers with relevant examples"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Generally relates cause and effect of the interdependence of finance and marketing in a business"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Provides information about the characteristics and features of the interdependence of finance and marketing"
                         }
                     ],
        "keyPoints":  "Marketing decisions (e.g. advertising campaigns, product development) require financial resources/budget approval; finance relies on marketing to generate sales revenue that funds business operations; each function depends on the other for the business to achieve its objectives",
        "sampleAnswer": "Interdependence occurs when the key business functions rely on one another to achieve business objectives. Marketing decisions, such as launching a new advertising campaign, require financial resources and must be approved through the finance function\u0027s budgeting process. In turn, finance depends on marketing to generate the sales revenue needed to fund the business\u0027s operations and future growth. For example, a business cannot afford an expensive advertising campaign without finance approving the budget, but finance also cannot generate profit without marketing driving sales, showing each function depends on the other."
    },
    {
        "id":  "bs-1-pymble14-2",
        "criteriaSource": "official",
        "marks":  1,
        "topic":  "Human Resources",
        "source":  "Pymble 2014 Trial HSC (Q22a)",
        "stimulus":  "Cantra Stylos Pty Ltd is a large Australian manufacturing business with 200 employees. The recent economic downturn has forced management to reduce costs. Management has decided to outsource its accounting and administration functions to the Philippines. They have also decided to reduce non-monetary benefits such as morning tea and flexible working hours. Staff turnover has been high due to unfavourable management decisions. The company\u0027s employees have threatened to go on strike.",
        "question":  "Outline ONE influence on employment relations at this business.",
        "criteria":  [
                         {
                             "marks":  1,
                             "descriptor":  "Provides a good sketch in general terms, indicating ONE influence on employment relations at this business"
                         }
                     ],
        "keyPoints":  "Influences include economic conditions/downturn, management decisions to outsource, reduction of non-monetary benefits, or industrial action; link to the stimulus provided",
        "sampleAnswer": "The recent economic downturn has influenced employment relations at Cantra Stylos, forcing management to cut costs and reduce non-monetary benefits."
    },
    {
        "id":  "bs-2-pymble14-4",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Human Resources",
        "source":  "Pymble 2014 Trial HSC (Q22b)",
        "stimulus":  "Cantra Stylos Pty Ltd is a large Australian manufacturing business with 200 employees. The recent economic downturn has forced management to reduce costs. Management has decided to outsource its accounting and administration functions to the Philippines. They have also decided to reduce non-monetary benefits such as morning tea and flexible working hours. Staff turnover has been high due to unfavourable management decisions. The company\u0027s employees have threatened to go on strike.",
        "question":  "Describe how a high staff turnover can impact costs and profitability.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Provides good information about the characteristics and features of how a high staff turnover can impact costs and profitability"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Provides a limited sketch in general terms, indicating some features of how a high staff turnover can impact costs and profitability"
                         }
                     ],
        "keyPoints":  "High staff turnover increases recruitment, selection, induction and training costs; loss of experienced staff reduces productivity; these increased costs and reduced output negatively affect profitability",
        "sampleAnswer": "High staff turnover increases costs through repeated recruitment, selection, induction and training of new staff, while the loss of experienced employees, as seen at Cantra Stylos, reduces productivity. These higher costs combined with lower output directly reduce the business\u0027s profitability."
    },
    {
        "id":  "bs-4-pymble14-1",
        "criteriaSource": "official",
        "marks":  4,
        "topic":  "Human Resources",
        "source":  "Pymble 2014 Trial HSC (Q22c)",
        "stimulus":  "Cantra Stylos Pty Ltd is a large Australian manufacturing business with 200 employees. The recent economic downturn has forced management to reduce costs. Management has decided to outsource its accounting and administration functions to the Philippines. They have also decided to reduce non-monetary benefits such as morning tea and flexible working hours. Staff turnover has been high due to unfavourable management decisions. The company\u0027s employees have threatened to go on strike.",
        "question":  "Explain ONE advantage and ONE disadvantage of global outsourcing.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Clearly and accurately relates cause and effect, making the relationships evident and providing reasons for ONE advantage and ONE disadvantage of global outsourcing"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Generally relates cause and effect, making some relationships known and providing reasons for ONE advantage and ONE disadvantage of global outsourcing"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Clearly and accurately relates cause and effect, making the relationships evident and providing reasons for ONE advantage OR ONE disadvantage of global outsourcing"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Provides information about the characteristics and features of either ONE advantage or ONE disadvantage of global outsourcing"
                         }
                     ],
        "keyPoints":  "Advantage: lower labour costs, access to specialist skills, allows focus on core business (e.g. Cantra Stylos outsourcing accounting to the Philippines to cut costs). Disadvantage: loss of control/quality issues, negative impact on local employment and staff morale, communication/cultural/time-zone difficulties, potential job losses domestically leading to poor employment relations",
        "sampleAnswer": "Global outsourcing involves paying an overseas provider to perform a business function. An advantage for Cantra Stylos in outsourcing its accounting and administration to the Philippines is lower labour costs, helping the business cut expenses during the economic downturn. However, a disadvantage is the negative impact on local employment and staff morale; outsourcing these roles overseas may deepen the job insecurity already causing high staff turnover and has contributed to employees threatening strike action, potentially damaging employment relations further."
    },
    {
        "id":  "bs-4-pymble14-2",
        "criteriaSource": "official",
        "marks":  4,
        "topic":  "Human Resources",
        "source":  "Pymble 2014 Trial HSC (Q22d)",
        "stimulus":  "Cantra Stylos Pty Ltd is a large Australian manufacturing business with 200 employees. The recent economic downturn has forced management to reduce costs. Management has decided to outsource its accounting and administration functions to the Philippines. They have also decided to reduce non-monetary benefits such as morning tea and flexible working hours. Staff turnover has been high due to unfavourable management decisions. The company\u0027s employees have threatened to go on strike.",
        "question":  "Examine the cause of ONE workplace dispute and the strategies used to resolve it. Use an example to support your answer.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Examines/inquires into the cause of ONE workplace dispute and the strategies used to resolve it, using an example to support the answer"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Provides good information about the characteristics and features of the cause of ONE workplace dispute and the strategies used to resolve it, using an example"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Provides a good sketch in general terms, indicating the cause of ONE workplace dispute and the strategies used to resolve it"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Identifies the cause of ONE workplace dispute"
                         }
                     ],
        "keyPoints":  "Identify a cause (e.g. wages/conditions, outsourcing/job security, management style), give a real or hypothetical example, and explain resolution strategies such as negotiation, mediation, grievance procedures, conciliation or arbitration through the Fair Work Commission",
        "sampleAnswer": "One cause of a workplace dispute at Cantra Stylos is the reduction of non-monetary benefits, such as morning tea and flexible hours, alongside outsourcing jobs overseas, which has led employees to threaten strike action over job security and conditions. This dispute could be resolved through negotiation between management and employee representatives to reach a compromise on benefits, or, if unresolved, through mediation or conciliation via the Fair Work Commission, where an independent third party helps both sides reach a mutually acceptable agreement without resorting to strike action."
    },
    {
        "id":  "bs-2-pymble14-5",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Operations",
        "source":  "Pymble 2014 Trial HSC (Q23a)",
        "stimulus":  "Valpos Pty Ltd is an Australian designer and manufacturer of leather clothing. Management at Valpos Pty Ltd is going to expand their business operations throughout Asia. Due to the presence of many competitors they realise they will have to be competitive both in terms of quality and costs.",
        "question":  "Outline ONE global influence that this business must consider in its operations management.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Sketches in general terms, indicating ONE global factor in its operations management"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Identifies one global factor in its operations management"
                         }
                     ],
        "keyPoints":  "Global influences on operations include global sourcing of inputs, economies of scale from expanded production, scanning and learning from overseas competitors, and research and development",
        "sampleAnswer": "One global influence Valpos must consider is global sourcing, purchasing inputs such as leather from overseas suppliers, which can reduce costs but exposes the business to currency fluctuations and supply chain risks as it expands throughout Asia."
    },
    {
        "id":  "bs-2-pymble14-6",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Operations",
        "source":  "Pymble 2014 Trial HSC (Q23b)",
        "stimulus":  "Valpos Pty Ltd is an Australian designer and manufacturer of leather clothing. Management at Valpos Pty Ltd is going to expand their business operations throughout Asia. Due to the presence of many competitors they realise they will have to be competitive both in terms of quality and costs.",
        "question":  "Describe how businesses transform resources.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Provides characteristics and features of how businesses transform resources"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Sketches in general terms, indicating the main feature of TWO transforming resources"
                         }
                     ],
        "keyPoints":  "Transformed resources (materials, information, customers) are converted by transforming resources (facilities, human resources) into outputs of goods and services",
        "sampleAnswer": "Businesses transform resources by using transforming resources, such as human resources and facilities, to convert transformed resources, such as materials, into finished outputs. For Valpos, workers and factory machinery convert raw leather into finished clothing ready for sale."
    },
    {
        "id":  "bs-4-pymble14-3",
        "criteriaSource": "official",
        "marks":  4,
        "topic":  "Operations",
        "source":  "Pymble 2014 Trial HSC (Q23c)",
        "stimulus":  "Valpos Pty Ltd is an Australian designer and manufacturer of leather clothing. Management at Valpos Pty Ltd is going to expand their business operations throughout Asia. Due to the presence of many competitors they realise they will have to be competitive both in terms of quality and costs.",
        "question":  "Distinguish between quality expectations and cost based competition in operations at Valpos Pty Ltd.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Clearly recognises and distinguishes between quality expectations and cost based competition in operations at Valpos Pty Ltd"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Provides characteristics and features indicating the difference between quality expectations and cost based competition in operations at Valpos Pty Ltd"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Sketches in general terms the difference between quality expectations and cost based competition in operations at Valpos Pty Ltd"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Identifies the difference between quality expectations and cost based competition in operations at Valpos Pty Ltd"
                         }
                     ],
        "keyPoints":  "Quality expectations relate to goods/services satisfying customers in terms of durability, reliability, fitness for purpose and reputation; cost-based competition involves operational strategies that lower costs so prices can be lower than rivals, e.g. cheaper inputs, updated technology, outsourcing, economies of scale",
        "sampleAnswer": "Quality expectations relate to how well Valpos\u0027s leather clothing satisfies customers in terms of durability, reliability and fitness for purpose, and are met through skilled workmanship and quality materials, supporting the business\u0027s reputation. Cost-based competition, by contrast, involves operational strategies aimed at lowering production costs so prices can undercut rivals, such as using cheaper inputs, updated technology or economies of scale as Valpos expands throughout Asia. While quality expectations focus on satisfying the customer\u0027s experience of the product, cost-based competition focuses on price competitiveness against the many rivals Valpos faces in the region."
    },
    {
        "id":  "bs-2-pymble14-7",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Operations",
        "source":  "Pymble 2014 Trial HSC (Q23d)",
        "stimulus":  "Valpos Pty Ltd is an Australian designer and manufacturer of leather clothing. Management at Valpos Pty Ltd is going to expand their business operations throughout Asia. Due to the presence of many competitors they realise they will have to be competitive both in terms of quality and costs.",
        "question":  "Explain how a Gantt chart can be used in the transformation process.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Relates cause and effect; makes the relationships between things evident; provides reasons why and/or how a Gantt chart can be used in the transformation process"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Sketches in general terms how a Gantt chart can be used in the transformation process"
                         }
                     ],
        "keyPoints":  "A Gantt chart records the tasks in a project and estimated time for each; it allows comparison of actual to planned progress, helps set completion dates for each stage, and supports production scheduling decisions",
        "sampleAnswer": "A Gantt chart records the tasks in a project and the estimated time needed for each, displayed against a timeline. This allows Valpos to compare actual progress against planned progress, set completion dates for each production stage, and make better scheduling decisions in the transformation process."
    },
    {
        "id":  "bs-2-pymble14-8",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Finance",
        "source":  "Pymble 2014 Trial HSC (Q24a)",
        "stimulus":  {
                         "blocks":  [
                                        {
                                            "type":  "text",
                                            "text":  "Income Statement for Sullivans Auto Parts Pty Ltd, for the year ending 30 June 2014"
                                        },
                                        {
                                            "type":  "table",
                                            "title":  "Income Statement",
                                            "columns":  [
                                                            "",
                                                            "$",
                                                            "$"
                                                        ],
                                            "rows":  [
                                                         [
                                                             "Sales",
                                                             "",
                                                             "400 000"
                                                         ],
                                                         [
                                                             "Less COGS",
                                                             "",
                                                             ""
                                                         ],
                                                         [
                                                             "Opening stock",
                                                             "30 000",
                                                             ""
                                                         ],
                                                         [
                                                             "Purchases",
                                                             "155 000",
                                                             ""
                                                         ],
                                                         [
                                                             "Closing stock",
                                                             "60 000",
                                                             ""
                                                         ],
                                                         [
                                                             "  (COGS total)",
                                                             "125 000",
                                                             ""
                                                         ],
                                                         [
                                                             "Gross Profit",
                                                             "",
                                                             "??"
                                                         ],
                                                         [
                                                             "Operating expenses",
                                                             "",
                                                             ""
                                                         ],
                                                         [
                                                             "Wages",
                                                             "85 000",
                                                             ""
                                                         ],
                                                         [
                                                             "Utilities",
                                                             "20 000",
                                                             ""
                                                         ],
                                                         [
                                                             "Rent",
                                                             "70 000",
                                                             ""
                                                         ],
                                                         [
                                                             "Advertising",
                                                             "60 000",
                                                             ""
                                                         ],
                                                         [
                                                             "Insurance",
                                                             "10 000",
                                                             ""
                                                         ],
                                                         [
                                                             "Interest",
                                                             "10 000",
                                                             ""
                                                         ],
                                                         [
                                                             "Net Profit",
                                                             "",
                                                             "20 000"
                                                         ]
                                                     ]
                                        },
                                        {
                                            "type":  "table",
                                            "title":  "2013 Ratios",
                                            "columns":  [
                                                            "Ratio",
                                                            "Value"
                                                        ],
                                            "rows":  [
                                                         [
                                                             "Net Profit",
                                                             "12%"
                                                         ],
                                                         [
                                                             "Gross Profit",
                                                             "75%"
                                                         ]
                                                     ]
                                        }
                                    ]
                     },
        "question":  "Calculate and comment on the Gross Profit Ratio for 2014 (Gross Profit/Sales x100) for Sullivans Auto Parts Pty Ltd. (Show all workings).",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Ascertains/determines the correct Gross Profit Ratio from given facts, figures or information, with an appropriate comment"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Ascertains/determines the correct Gross Profit Ratio from given facts, figures or information, without comment"
                         }
                     ],
        "keyPoints":  "Gross Profit = Sales $400,000 - COGS $125,000 = $275,000; Gross Profit Ratio = 275,000/400,000 x 100 = 68.75%; comment that this is below the 2013 figure of 75%, meaning less gross profit is being generated per dollar of sales",
        "sampleAnswer": "Gross Profit Ratio = ($275,000 Ã· $400,000) Ã— 100 = 68.75%. This is below the 2013 figure of 75%, meaning Sullivans Auto Parts generated less gross profit per dollar of sales in 2014, indicating a decline in trading profitability."
    },
    {
        "id":  "bs-3-pymble14-2",
        "criteriaSource": "official",
        "marks":  3,
        "topic":  "Finance",
        "source":  "Pymble 2014 Trial HSC (Q24b)",
        "stimulus":  {
                         "blocks":  [
                                        {
                                            "type":  "text",
                                            "text":  "Income Statement for Sullivans Auto Parts Pty Ltd, for the year ending 30 June 2014"
                                        },
                                        {
                                            "type":  "table",
                                            "title":  "Income Statement",
                                            "columns":  [
                                                            "",
                                                            "$",
                                                            "$"
                                                        ],
                                            "rows":  [
                                                         [
                                                             "Sales",
                                                             "",
                                                             "400 000"
                                                         ],
                                                         [
                                                             "Less COGS",
                                                             "",
                                                             ""
                                                         ],
                                                         [
                                                             "Opening stock",
                                                             "30 000",
                                                             ""
                                                         ],
                                                         [
                                                             "Purchases",
                                                             "155 000",
                                                             ""
                                                         ],
                                                         [
                                                             "Closing stock",
                                                             "60 000",
                                                             ""
                                                         ],
                                                         [
                                                             "  (COGS total)",
                                                             "125 000",
                                                             ""
                                                         ],
                                                         [
                                                             "Gross Profit",
                                                             "",
                                                             "275 000"
                                                         ],
                                                         [
                                                             "Operating expenses",
                                                             "",
                                                             ""
                                                         ],
                                                         [
                                                             "Wages",
                                                             "85 000",
                                                             ""
                                                         ],
                                                         [
                                                             "Utilities",
                                                             "20 000",
                                                             ""
                                                         ],
                                                         [
                                                             "Rent",
                                                             "70 000",
                                                             ""
                                                         ],
                                                         [
                                                             "Advertising",
                                                             "60 000",
                                                             ""
                                                         ],
                                                         [
                                                             "Insurance",
                                                             "10 000",
                                                             ""
                                                         ],
                                                         [
                                                             "Interest",
                                                             "10 000",
                                                             ""
                                                         ],
                                                         [
                                                             "Net Profit",
                                                             "",
                                                             "20 000"
                                                         ]
                                                     ]
                                        },
                                        {
                                            "type":  "table",
                                            "title":  "2013 Ratios",
                                            "columns":  [
                                                            "Ratio",
                                                            "Value"
                                                        ],
                                            "rows":  [
                                                         [
                                                             "Net Profit",
                                                             "12%"
                                                         ],
                                                         [
                                                             "Gross Profit",
                                                             "75%"
                                                         ]
                                                     ]
                                        }
                                    ]
                     },
        "question":  "Calculate and compare the 2014 Net Profit Ratio (net profit/sales x100) of Sullivans Auto Parts Pty Ltd with its 2013 results (show all workings).",
        "criteria":  [
                         {
                             "marks":  3,
                             "descriptor":  "Ascertains/determines from given facts, figures or information the correct answer and comparison for net profit"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Ascertains/determines from given facts, figures or information the correct answer and comparison for net profit, with an error in the calculation"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Ascertains/determines from given facts, figures or information the correct answer for net or gross profit with no comparison/comment"
                         }
                     ],
        "keyPoints":  "Net Profit Ratio = Net Profit/Sales x 100 = 20,000/400,000 x 100 = 5%; compare to 2013\u0027s 12%, showing a decline in profitability relative to sales",
        "sampleAnswer": "Net Profit Ratio 2014 = ($20,000 Ã· $400,000) Ã— 100 = 5%. This is well below the 2013 figure of 12%, a significant decline. Despite Sullivans Auto Parts\u0027 gross profit being reasonably strong, high operating expenses, such as wages and rent, have eaten into net profit, showing the business is becoming considerably less profitable relative to its sales."
    },
    {
        "id":  "bs-4-pymble14-4",
        "criteriaSource": "official",
        "marks":  4,
        "topic":  "Finance",
        "source":  "Pymble 2014 Trial HSC (Q24c)",
        "stimulus":  {
                         "blocks":  [
                                        {
                                            "type":  "text",
                                            "text":  "Income Statement for Sullivans Auto Parts Pty Ltd, for the year ending 30 June 2014"
                                        },
                                        {
                                            "type":  "table",
                                            "title":  "Income Statement",
                                            "columns":  [
                                                            "",
                                                            "$",
                                                            "$"
                                                        ],
                                            "rows":  [
                                                         [
                                                             "Sales",
                                                             "",
                                                             "400 000"
                                                         ],
                                                         [
                                                             "Less COGS",
                                                             "",
                                                             ""
                                                         ],
                                                         [
                                                             "Opening stock",
                                                             "30 000",
                                                             ""
                                                         ],
                                                         [
                                                             "Purchases",
                                                             "155 000",
                                                             ""
                                                         ],
                                                         [
                                                             "Closing stock",
                                                             "60 000",
                                                             ""
                                                         ],
                                                         [
                                                             "  (COGS total)",
                                                             "125 000",
                                                             ""
                                                         ],
                                                         [
                                                             "Gross Profit",
                                                             "",
                                                             "275 000"
                                                         ],
                                                         [
                                                             "Operating expenses",
                                                             "",
                                                             ""
                                                         ],
                                                         [
                                                             "Wages",
                                                             "85 000",
                                                             ""
                                                         ],
                                                         [
                                                             "Utilities",
                                                             "20 000",
                                                             ""
                                                         ],
                                                         [
                                                             "Rent",
                                                             "70 000",
                                                             ""
                                                         ],
                                                         [
                                                             "Advertising",
                                                             "60 000",
                                                             ""
                                                         ],
                                                         [
                                                             "Insurance",
                                                             "10 000",
                                                             ""
                                                         ],
                                                         [
                                                             "Interest",
                                                             "10 000",
                                                             ""
                                                         ],
                                                         [
                                                             "Net Profit",
                                                             "",
                                                             "20 000"
                                                         ]
                                                     ]
                                        },
                                        {
                                            "type":  "table",
                                            "title":  "2013 Ratios",
                                            "columns":  [
                                                            "Ratio",
                                                            "Value"
                                                        ],
                                            "rows":  [
                                                         [
                                                             "Net Profit",
                                                             "12%"
                                                         ],
                                                         [
                                                             "Gross Profit",
                                                             "75%"
                                                         ]
                                                     ]
                                        }
                                    ]
                     },
        "question":  "Recommend ONE cost control and ONE revenue control that can be adopted by Sullivans Auto Parts Pty Ltd. to improve profitability.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Provides ONE reason in favour of the chosen cost control method and ONE reason in favour of the chosen revenue control method that can be adopted by Sullivans Auto Parts Pty Ltd to improve profitability"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Provides ONE reason in favour of the chosen method of cost or revenue control, and sketches in general terms the other"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Sketches in general terms ONE method of cost control and ONE method of revenue control that can be adopted by Sullivans Auto Parts Pty Ltd"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Sketches in general terms ONE reason in favour of a chosen method of cost control or revenue control"
                         }
                     ],
        "keyPoints":  "Cost control examples: managing fixed/variable costs, establishing cost centres, expense minimisation (e.g. reducing advertising or utility costs). Revenue control examples: setting sales/marketing objectives, reviewing pricing strategy to increase sales volume or margin",
        "sampleAnswer": "One cost control Sullivans could adopt is reviewing its advertising expense, which at $60,000 is a large operating cost; setting a stricter advertising budget and monitoring cost centres would help reduce expenses and improve the low 5% net profit ratio. One revenue control is reviewing its pricing strategy, as increasing prices slightly or promoting higher-margin items could increase sales revenue without a proportional rise in costs, directly improving the business\u0027s declining profitability."
    },
    {
        "id":  "bs-2-pymble15-1",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Operations",
        "source":  "Pymble 2015 Trial HSC (Q21a)",
        "stimulus":  "North Shore Printing Pty Ltd is a large printer located in the business district at North Ryde. Management is keen to adopt a cost leadership approach in their operations to gain a competitive advantage. Printing services include brochures, magazines, books, catalogues, labels and letterheads.",
        "question":  "Distinguish between a transformed and a transforming resource. Provide an example of each.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Clearly recognises the differences between transformed and transforming resources and includes an appropriate example of each"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Clearly recognises the differences between transformed and transforming resources OR includes an appropriate example of each"
                         }
                     ],
        "keyPoints":  "Transformed resources are resources changed by the operations process (materials, information, customers); transforming resources cause the transformed resources to be changed (human resources, facilities)",
        "sampleAnswer": "Transformed resources are inputs changed by the operations process, such as the paper and ink North Shore Printing uses to produce brochures. Transforming resources cause this change, such as the printing machinery and staff who operate it to produce the finished printed materials."
    },
    {
        "id":  "bs-4-pymble15-1",
        "criteriaSource": "official",
        "marks":  4,
        "topic":  "Operations",
        "source":  "Pymble 2015 Trial HSC (Q21b)",
        "stimulus":  "North Shore Printing Pty Ltd is a large printer located in the business district at North Ryde. Management is keen to adopt a cost leadership approach in their operations to gain a competitive advantage. Printing services include brochures, magazines, books, catalogues, labels and letterheads.",
        "question":  "Explain TWO methods that North Shore Printing Pty Ltd could employ to gain cost leadership.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Successfully shows the effects of TWO methods that North Shore Printing could employ to gain cost leadership"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Provides characteristics and features of measures to gain cost leadership, with some depth"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Provides characteristics and features of measures to gain cost leadership"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Identifies/mentions ONE measure of cost leadership"
                         }
                     ],
        "keyPoints":  "Methods include economies of scale, standardisation, adopting new technology, minimising waste",
        "sampleAnswer": "One method is achieving economies of scale, where North Shore Printing increases its production volume of items like brochures and catalogues so that fixed costs, such as machinery, are spread over more units, lowering the cost per unit. A second method is adopting new printing technology, which can automate processes, reduce labour and material waste, and increase production speed. Both methods lower North Shore Printing\u0027s overall production costs, supporting its goal of gaining a cost leadership competitive advantage over rival printers."
    },
    {
        "id":  "bs-4-pymble15-2",
        "criteriaSource": "official",
        "marks":  4,
        "topic":  "Operations",
        "source":  "Pymble 2015 Trial HSC (Q21d)",
        "stimulus":  "North Shore Printing Pty Ltd is a large printer located in the business district at North Ryde. Management is keen to adopt a cost leadership approach in their operations to gain a competitive advantage. Printing services include brochures, magazines, books, catalogues, labels and letterheads.",
        "question":  "Analyse the influence of volume and variety on operational processes at the North Shore Printing Pty Ltd.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Analyses (implications) the impact of volume and variety on operations processes at North Shore Printing"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Analyses the impact of volume OR variety on operations processes and sketches in general terms the impact of the other"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Analyses the impact of volume OR variety on operations processes OR sketches in general terms the impact of volume and variety"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Identifies some impact of volume OR variety"
                         }
                     ],
        "keyPoints":  "High volume - more systemised, more automated technology, lower cost per unit; high variety - more flexible, less systemised, higher cost per unit",
        "sampleAnswer": "High volume production, such as printing large runs of a standardised catalogue, allows North Shore Printing to use more systemised and automated technology, lowering the cost per unit and supporting its cost leadership strategy. High variety, such as producing a wide range of products from brochures to letterheads and labels, requires more flexible, less standardised processes and skilled labour, which typically increases the cost per unit. This means North Shore Printing faces a trade-off: the more varied its product range, the harder it becomes to fully achieve the low unit costs associated with high-volume, cost leadership production."
    },
    {
        "id":  "bs-2-pymble15-2",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Human Resources",
        "source":  "Pymble 2015 Trial HSC (Q22a)",
        "stimulus":  "Youee Australian Ltd provides car and home insurance. About 75% of existing staff are members of the Financial Services Union. Management and the Union are currently in negotiations to finalise a new Enterprise Bargaining Agreement.",
        "question":  "Outline the impact ONE stakeholder has on the human resource function.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Sketches in general terms the impact of ONE stakeholder on the HR function"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Refers to ONE stakeholder"
                         }
                     ],
        "keyPoints":  "Stakeholders: employees, employers, trade unions, employer associations, government",
        "sampleAnswer": "Trade unions are a key stakeholder influencing the HR function, as at Youee, where 75% of staff belong to the Financial Services Union. Unions represent employee interests in negotiations, such as the current Enterprise Bargaining Agreement talks, meaning HR must engage and negotiate with the union to reach outcomes acceptable to both staff and management."
    },
    {
        "id":  "bs-2-pymble15-3",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Human Resources",
        "source":  "Pymble 2015 Trial HSC (Q22b)",
        "stimulus":  "Youee Australian Ltd provides car and home insurance. About 75% of existing staff are members of the Financial Services Union. Management and the Union are currently in negotiations to finalise a new Enterprise Bargaining Agreement.",
        "question":  "Distinguish between an Award and an Enterprise Bargaining Agreement.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Clearly recognises the differences between an Award and an Enterprise Bargaining Agreement"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Sketches in general terms the meaning of either an Award or an Enterprise Bargaining Agreement"
                         }
                     ],
        "keyPoints":  "Award = legal minimum wages and conditions set for an industry/occupation; EBA = negotiated agreement between an employer and its employees (often represented by a union), specific to one workplace and ratified by the Fair Work Commission",
        "sampleAnswer": "An award sets legally binding minimum wages and conditions for an entire industry or occupation. An Enterprise Bargaining Agreement, like the one Youee is negotiating with the Financial Services Union, is a workplace-specific agreement negotiated between an employer and employees and approved by the Fair Work Commission."
    },
    {
        "id":  "bs-2-pymble15-4",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Human Resources",
        "source":  "Pymble 2015 Trial HSC (Q22c)",
        "stimulus":  "Youee Australian Ltd provides car and home insurance. About 75% of existing staff are members of the Financial Services Union. Management and the Union are currently in negotiations to finalise a new Enterprise Bargaining Agreement.",
        "question":  "Describe ONE social influence that would impact on human resources at Youee Ltd.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Provides characteristics and features of a social influence that would impact human resources at Youee Ltd"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Recognises and names ONE social influence"
                         }
                     ],
        "keyPoints":  "Social influences include changing work patterns, workforce diversity, changing attitudes to work-life balance",
        "sampleAnswer": "One social influence is the growing demand for flexible working arrangements, as employees increasingly seek better work-life balance. This would impact HR at Youee by requiring policies such as flexible hours or remote work options to attract and retain staff, particularly relevant as the business negotiates its new agreement."
    },
    {
        "id":  "bs-4-pymble15-3",
        "criteriaSource": "official",
        "marks":  4,
        "topic":  "Human Resources",
        "source":  "Pymble 2015 Trial HSC (Q22d)",
        "stimulus":  "Youee Australian Ltd provides car and home insurance. About 75% of existing staff are members of the Financial Services Union. Management and the Union are currently in negotiations to finalise a new Enterprise Bargaining Agreement.",
        "question":  "Analyse TWO human resources strategies that Youee Ltd could employ to motivate and retain valuable staff.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Analyses (implications) of TWO HR strategies that Youee Ltd could employ to motivate and retain valuable staff"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Analyses ONE HR strategy that Youee Ltd could employ and sketches in general terms the other"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Analyses the impact of ONE HR strategy OR sketches in general terms TWO HR strategies"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Identifies some HR strategy"
                         }
                     ],
        "keyPoints":  "Strategies include rewards, training and development, leadership style, job design, performance management",
        "sampleAnswer": "One strategy is employee rewards, such as performance-based bonuses or career progression opportunities, which motivate staff by directly linking effort to recognition and financial benefit, encouraging valuable employees at Youee to stay rather than seek opportunities elsewhere. A second strategy is training and development, investing in staff skills through ongoing professional development; this increases job satisfaction and career prospects, making employees feel valued and reducing the likelihood they will leave, which is particularly important while Youee negotiates its new Enterprise Bargaining Agreement with a heavily unionised workforce."
    },
    {
        "id":  "bs-2-pymble15-5",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Marketing",
        "source":  "Pymble 2015 Trial HSC (Q23a)",
        "stimulus":  "Lulu\u0027s is a well-known Australian women\u0027s fashion label. They produce and market party and casual dresses, tops, bottoms, playsuits and jackets. They have a number of well-located retail stores in the main capital cities of Australia. Lulu\u0027s also distributes to other fashion retail stores like Stelly and Portmans. The marketing department is currently updating their Marketing plan to reflect recent changes in the external environment.",
        "question":  "Describe ONE method a business can use to conduct a situational analysis.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Provides characteristics and features of ONE method a business can use to conduct a situational analysis"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Recognises and names ONE method a business can use to conduct a situational analysis"
                         }
                     ],
        "keyPoints":  "Methods include SWOT analysis, product life cycle (PLC) analysis, competitor analysis",
        "sampleAnswer": "One method is a SWOT analysis, which examines Lulu\u0027s internal strengths and weaknesses, such as its strong retail store network, alongside external opportunities and threats in the fashion market, helping Lulu\u0027s update its marketing plan in response to recent changes in its external environment."
    },
    {
        "id":  "bs-2-pymble15-6",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Marketing",
        "source":  "Pymble 2015 Trial HSC (Q23b)",
        "stimulus":  "Lulu\u0027s is a well-known Australian women\u0027s fashion label. They produce and market party and casual dresses, tops, bottoms, playsuits and jackets. They have a number of well-located retail stores in the main capital cities of Australia. Lulu\u0027s also distributes to other fashion retail stores like Stelly and Portmans. The marketing department is currently updating their Marketing plan to reflect recent changes in the external environment.",
        "question":  "Explain why a business would use a selective distribution channel.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Successfully shows the effects of using a selective distribution channel"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Provides characteristics and features of a selective distribution channel"
                         }
                     ],
        "keyPoints":  "Few selected outlets used; maintains brand image/exclusivity; ensures appropriate support and service standards from retailers",
        "sampleAnswer": "Selective distribution uses a limited number of carefully chosen outlets, such as Lulu\u0027s own stores and select retailers like Stelly and Portmans, rather than mass distribution. This helps maintain Lulu\u0027s brand image and exclusivity as a fashion label while ensuring retailers provide an appropriate level of service and support."
    },
    {
        "id":  "bs-6-pymble15-1",
        "criteriaSource": "official",
        "marks":  6,
        "topic":  "Marketing",
        "source":  "Pymble 2015 Trial HSC (Q23c)",
        "stimulus":  "Lulu\u0027s is a well-known Australian women\u0027s fashion label. They produce and market party and casual dresses, tops, bottoms, playsuits and jackets. They have a number of well-located retail stores in the main capital cities of Australia. Lulu\u0027s also distributes to other fashion retail stores like Stelly and Portmans. The marketing department is currently updating their Marketing plan to reflect recent changes in the external environment.",
        "question":  "Analyse how the marketing strategies of Lulu\u0027s could be monitored and controlled.",
        "criteria":  [
                         {
                             "marks":  6,
                             "descriptor":  "Analyses (implications) of how the marketing strategies of Lulu\u0027s could be monitored and controlled, integrating monitoring and control methods with clear reasoning"
                         },
                         {
                             "marks":  5,
                             "descriptor":  "Analyses (implications) of how the marketing strategies of Lulu\u0027s could be monitored and controlled"
                         },
                         {
                             "marks":  4,
                             "descriptor":  "Provides good characteristics and features of how the marketing strategies of Lulu\u0027s could be monitored and controlled"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Provides characteristics and features of how the marketing strategies of Lulu\u0027s could be monitored and controlled"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Identifies how the marketing strategies of Lulu\u0027s could be monitored and controlled, with some detail"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Identifies how the marketing strategies of Lulu\u0027s could be monitored and controlled"
                         }
                     ],
        "keyPoints":  "Monitoring: checking using sales analysis, market share analysis; Controlling: comparing planned versus actual results, taking corrective action, revising marketing strategies",
        "sampleAnswer": "Monitoring involves Lulu\u0027s regularly checking the performance of its marketing strategies using tools such as sales analysis, tracking revenue from its own stores and stockists like Stelly and Portmans, and market share analysis, comparing its position against other fashion labels. Control involves comparing these actual results against the planned targets set in the marketing plan; where a gap exists, such as underperforming sales in a particular channel, Lulu\u0027s management can take corrective action, such as adjusting pricing, promotion or the number of distribution outlets used. Because the marketing department is currently updating its plan to reflect recent changes in the external environment, ongoing monitoring and control is especially important, as it allows Lulu\u0027s to detect when strategies are no longer effective and revise its marketing mix quickly, ensuring resources are not wasted on underperforming strategies and that the business remains responsive to a changing fashion market."
    },
    {
        "id":  "bs-2-pymble15-7",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Finance",
        "source":  "Pymble 2015 Trial HSC (Q24a)",
        "stimulus":  {
                         "blocks":  [
                                        {
                                            "type":  "text",
                                            "text":  "Southern Wines Pty Ltd is a boutique wine manufacturer in the Hunter Valley. Its management is intending to expand overseas using debt finance (long term borrowing). Management has used the Balance Sheet (extracts below) to help in its decision making and planning for the future."
                                        },
                                        {
                                            "type":  "table",
                                            "title":  "Extracts from the Balance Sheet of Southern Wines Pty Ltd 30/6/14 and 30/6/15",
                                            "columns":  [
                                                            "",
                                                            "2014 $ 000\u0027s",
                                                            "2015 $ 000\u0027s"
                                                        ],
                                            "rows":  [
                                                         [
                                                             "Current Assets",
                                                             "4000",
                                                             "6000"
                                                         ],
                                                         [
                                                             "Non-Current Assets",
                                                             "16000",
                                                             "17000"
                                                         ],
                                                         [
                                                             "Current Liabilities",
                                                             "2000",
                                                             "4000"
                                                         ],
                                                         [
                                                             "Non-Current Liabilities",
                                                             "6000",
                                                             "7000"
                                                         ],
                                                         [
                                                             "Shareholder\u0027s Equity",
                                                             "12000",
                                                             "12000"
                                                         ]
                                                     ]
                                        }
                                    ]
                     },
        "question":  "Identify TWO financial institutions from which debt finance can be obtained.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Recognises and names TWO financial institutions from which debt finance can be obtained"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Recognises and names ONE financial institution from which debt finance can be obtained"
                         }
                     ],
        "keyPoints":  "Trading banks, merchant/investment banks, finance companies, credit unions",
        "sampleAnswer": "Two financial institutions from which Southern Wines could obtain debt finance are trading banks, which offer loans and overdrafts, and finance companies, which provide finance for specific purposes such as equipment or vehicle purchases, typically at a higher interest rate than banks."
    },
    {
        "id":  "bs-2-pymble15-8",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Finance",
        "source":  "Pymble 2015 Trial HSC (Q24b)",
        "stimulus":  {
                         "blocks":  [
                                        {
                                            "type":  "text",
                                            "text":  "Southern Wines Pty Ltd is a boutique wine manufacturer in the Hunter Valley. Its management is intending to expand overseas using debt finance (long term borrowing). Management has used the Balance Sheet (extracts below) to help in its decision making and planning for the future."
                                        },
                                        {
                                            "type":  "table",
                                            "title":  "Extracts from the Balance Sheet of Southern Wines Pty Ltd 30/6/14 and 30/6/15",
                                            "columns":  [
                                                            "",
                                                            "2014 $ 000\u0027s",
                                                            "2015 $ 000\u0027s"
                                                        ],
                                            "rows":  [
                                                         [
                                                             "Current Assets",
                                                             "4000",
                                                             "6000"
                                                         ],
                                                         [
                                                             "Non-Current Assets",
                                                             "16000",
                                                             "17000"
                                                         ],
                                                         [
                                                             "Current Liabilities",
                                                             "2000",
                                                             "4000"
                                                         ],
                                                         [
                                                             "Non-Current Liabilities",
                                                             "6000",
                                                             "7000"
                                                         ],
                                                         [
                                                             "Shareholder\u0027s Equity",
                                                             "12000",
                                                             "12000"
                                                         ]
                                                     ]
                                        }
                                    ]
                     },
        "question":  "Describe ONE limitation of this financial report.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Provides characteristics and features of ONE limitation of financial reports"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Recognises and names ONE limitation of financial reports"
                         }
                     ],
        "keyPoints":  "Limitations include normalised earnings, capitalising expenses, valuing assets at historical cost, timing issues, notes to the financial statements not shown",
        "sampleAnswer": "One limitation is that the balance sheet records non-current assets at historical cost rather than current market value. This means Southern Wines\u0027 reported asset values may not reflect what those assets, such as land or equipment, would actually sell for today, potentially misrepresenting its true financial position."
    },
    {
        "id":  "bs-2-pymble15-9",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Finance",
        "source":  "Pymble 2015 Trial HSC (Q24c)",
        "stimulus":  {
                         "blocks":  [
                                        {
                                            "type":  "text",
                                            "text":  "Southern Wines Pty Ltd is a boutique wine manufacturer in the Hunter Valley. Its management is intending to expand overseas using debt finance (long term borrowing). Management has used the Balance Sheet (extracts below) to help in its decision making and planning for the future."
                                        },
                                        {
                                            "type":  "table",
                                            "title":  "Extracts from the Balance Sheet of Southern Wines Pty Ltd 30/6/14 and 30/6/15",
                                            "columns":  [
                                                            "",
                                                            "2014 $ 000\u0027s",
                                                            "2015 $ 000\u0027s"
                                                        ],
                                            "rows":  [
                                                         [
                                                             "Current Assets",
                                                             "4000",
                                                             "6000"
                                                         ],
                                                         [
                                                             "Non-Current Assets",
                                                             "16000",
                                                             "17000"
                                                         ],
                                                         [
                                                             "Current Liabilities",
                                                             "2000",
                                                             "4000"
                                                         ],
                                                         [
                                                             "Non-Current Liabilities",
                                                             "6000",
                                                             "7000"
                                                         ],
                                                         [
                                                             "Shareholder\u0027s Equity",
                                                             "12000",
                                                             "12000"
                                                         ]
                                                     ]
                                        }
                                    ]
                     },
        "question":  "Assess the solvency of Southern Wines Pty Ltd using comparative gearing ratio analysis (Total Liabilities/Owners Equity).",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Correctly calculates the gearing ratio for 2014 and 2015 and makes an appropriate judgement on the business\u0027s solvency"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Correctly calculates the gearing ratio for 2014 or 2015 OR makes an appropriate comment on solvency without full calculation"
                         }
                     ],
        "keyPoints":  "2014 gearing = (2000+6000)/12000 = 66.7%; 2015 gearing = (4000+7000)/12000 = 91.7%; gearing has increased, business is more highly geared/less solvent, more vulnerable to interest rate rises and economic downturns",
        "sampleAnswer": "Gearing 2014 = ($2,000 + $6,000) Ã· $12,000 = 66.7%. Gearing 2015 = ($4,000 + $7,000) Ã· $12,000 = 91.7%. Gearing has risen sharply, meaning Southern Wines relies far more heavily on debt relative to equity, reducing its solvency and making it more vulnerable to interest rate rises as it considers further borrowing to expand overseas."
    },
    {
        "id":  "bs-4-pymble15-4",
        "criteriaSource": "official",
        "marks":  4,
        "topic":  "Finance",
        "source":  "Pymble 2015 Trial HSC (Q24d)",
        "stimulus":  {
                         "blocks":  [
                                        {
                                            "type":  "text",
                                            "text":  "Southern Wines Pty Ltd is a boutique wine manufacturer in the Hunter Valley. Its management is intending to expand overseas using debt finance (long term borrowing). Management has used the Balance Sheet (extracts below) to help in its decision making and planning for the future."
                                        },
                                        {
                                            "type":  "table",
                                            "title":  "Extracts from the Balance Sheet of Southern Wines Pty Ltd 30/6/14 and 30/6/15",
                                            "columns":  [
                                                            "",
                                                            "2014 $ 000\u0027s",
                                                            "2015 $ 000\u0027s"
                                                        ],
                                            "rows":  [
                                                         [
                                                             "Current Assets",
                                                             "4000",
                                                             "6000"
                                                         ],
                                                         [
                                                             "Non-Current Assets",
                                                             "16000",
                                                             "17000"
                                                         ],
                                                         [
                                                             "Current Liabilities",
                                                             "2000",
                                                             "4000"
                                                         ],
                                                         [
                                                             "Non-Current Liabilities",
                                                             "6000",
                                                             "7000"
                                                         ],
                                                         [
                                                             "Shareholder\u0027s Equity",
                                                             "12000",
                                                             "12000"
                                                         ]
                                                     ]
                                        }
                                    ]
                     },
        "question":  "Analyse risks involved in global financial transactions.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Analyses (implications) TWO risks involved in global financial transactions"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Analyses ONE risk involved in global financial transactions and describes another"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Analyses ONE risk involved in global financial transactions OR describes TWO risks"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Describes ONE risk involved in global financial transactions"
                         }
                     ],
        "keyPoints":  "Risks include exchange rate fluctuations and risks associated with methods of payment (e.g. non-payment or non-delivery)",
        "sampleAnswer": "One risk is exchange rate fluctuations; if the Australian dollar strengthens between agreeing an overseas sale and receiving payment, Southern Wines could receive less revenue than expected when converted back to Australian dollars, reducing profitability from its planned overseas expansion. A second risk relates to methods of payment, such as the risk of non-payment or non-delivery when trading with new overseas customers or suppliers, which could result in significant financial loss, particularly as Southern Wines borrows further to fund its expansion and needs reliable cash flow to service this debt."
    },
    {
        "id":  "bs-2-sydboys13-1",
        "criteriaSource": "derived",
        "marks":  2,
        "topic":  "Human Resources",
        "source":  "Sydney Boys 2013 Trial HSC (Q21a)",
        "stimulus":  null,
        "question":  "Identify TWO factors that distinguish casual workers from part-time workers.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Clearly identifies TWO factors that distinguish casual workers from part-time workers"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Identifies ONE factor that distinguishes casual workers from part-time workers"
                         }
                     ],
        "keyPoints":  "Casual workers: no guaranteed/fixed hours, employed on an as-needed basis, paid a casual loading (usually around 25%) in lieu of leave, no paid leave entitlements, less job security. Part-time workers: work regular fixed hours less than full-time, receive pro-rata (proportionate) paid leave entitlements such as annual and sick leave, do not receive casual loading, greater job security.",
        "sampleAnswer": "Casual workers have no guaranteed hours and are paid a casual loading, usually around 25%, instead of receiving paid leave entitlements. Part-time workers work regular fixed hours below full-time and receive pro-rata paid leave, such as annual and sick leave, giving them greater job security than casuals."
    },
    {
        "id":  "bs-4-sydboys13-1",
        "criteriaSource": "derived",
        "marks":  4,
        "topic":  "Human Resources",
        "source":  "Sydney Boys 2013 Trial HSC (Q21b)",
        "stimulus":  null,
        "question":  "Compare and contrast the use of collective agreements with common law contracts.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Clearly and accurately shows both similarities and differences between collective agreements and common law contracts, using relevant terminology"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Shows some similarities and differences between collective agreements and common law contracts"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Sketches in general terms the two types of contracts without clearly distinguishing between them"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Displays limited understanding of collective agreements and/or common law contracts"
                         }
                     ],
        "keyPoints":  "Similarities: both are negotiated agreements between employer and employee(s) aimed at improving productivity and conditions; both must satisfy the Better Off Overall Test (BOOT). Differences: collective agreements cover a group of employees at a workplace and are registered with the Fair Work Commission; common law contracts are negotiated individually between employer and one employee and are not registered. Disputes over collective agreements are resolved through tribunals (FWC); common law contract disputes are resolved through the courts.",
        "sampleAnswer": "Collective agreements and common law contracts are both negotiated agreements between employer and employee(s) intended to improve productivity and conditions, and both must satisfy the Better Off Overall Test. However, a collective agreement covers a group of employees at a workplace, is negotiated collectively, often through a union, and is registered with and enforced by the Fair Work Commission. A common law contract, by contrast, is negotiated individually between an employer and a single employee, is not registered with any tribunal, and any disputes are resolved through the courts rather than the Fair Work Commission."
    },
    {
        "id":  "bs-4-sydboys13-2",
        "criteriaSource": "derived",
        "marks":  4,
        "topic":  "Human Resources",
        "source":  "Sydney Boys 2013 Trial HSC (Q21c)",
        "stimulus":  null,
        "question":  "Explain how performance management could be used to benefit both the employee and the employer.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Clearly explains distinct and relevant benefits of performance management for both the employee and the employer"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Explains benefits of performance management for both the employee and the employer, with less detail or balance"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Sketches in general terms how performance management can benefit the employee and/or the employer"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Demonstrates limited understanding of performance management"
                         }
                     ],
        "keyPoints":  "Employee benefits: regular feedback on strengths and areas to improve, identification of training and development needs, clearer understanding of expectations, potential for career progression and pay increases, increased motivation and job satisfaction. Employer benefits: identifies underperforming staff and skills gaps, improves overall productivity and efficiency, aligns individual goals with business objectives, provides evidence for reward/promotion decisions, can reduce staff turnover.",
        "sampleAnswer": "Performance management benefits the employee by providing regular feedback on their strengths and areas for improvement, identifying training needs and creating a clearer understanding of expectations, which can support career progression and increase motivation and job satisfaction. It benefits the employer by identifying underperforming staff and business-wide skills gaps, improving overall productivity, and aligning individual employee goals with broader business objectives. This shared information also provides objective evidence for decisions on rewards or promotion, and can help reduce staff turnover by keeping employees engaged and clear on their progress."
    },
    {
        "id":  "bs-2-sydboys13-2",
        "criteriaSource": "derived",
        "marks":  2,
        "topic":  "Marketing",
        "source":  "Sydney Boys 2013 Trial HSC (Q22a)",
        "stimulus":  "Pescado del Dia is a pet store specialising in fish and aquariums that has been operating in six major cities across Australia for 15 years. They are looking to expand into Asia in the future and need some help investigating how they could do so successfully.",
        "question":  "Identify ONE primary and ONE secondary form of market research that Pescado del Dia could use to improve the potential for their global expansion.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Identifies ONE relevant primary and ONE relevant secondary form of market research specific to Pescado del Dia\u0027s expansion into Asia"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Identifies ONE relevant form of market research (primary or secondary), or identifies both types but not specific to the business"
                         }
                     ],
        "keyPoints":  "Primary research examples: surveys/questionnaires of potential Asian customers, observation of competitor pet stores in target Asian cities, focus groups. Secondary research examples: government/census data on population and pet ownership rates in the target Asian country, industry reports on the pet care market in Asia.",
        "sampleAnswer": "Pescado del Dia could use surveys of potential customers in target Asian cities as primary research to understand local demand for fish and aquariums, and government or industry reports on pet ownership rates in Asia as secondary research to assess the size and viability of the target market before expanding."
    },
    {
        "id":  "bs-4-sydboys13-3",
        "criteriaSource": "derived",
        "marks":  4,
        "topic":  "Marketing",
        "source":  "Sydney Boys 2013 Trial HSC (Q22b)",
        "stimulus":  "Pescado del Dia is a pet store specialising in fish and aquariums that has been operating in six major cities across Australia for 15 years. They are looking to expand into Asia in the future and need some help investigating how they could do so successfully.",
        "question":  "Propose and justify TWO factors that Pescado del Dia would need to consider for their product when expanding into Asia.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Proposes and thoroughly justifies TWO relevant product factors Pescado del Dia would need to consider when expanding into Asia"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Proposes TWO relevant product factors with justification for at least one, or justifies both factors with less depth"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Identifies TWO relevant product factors with little or no justification, or ONE factor well justified"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Identifies ONE relevant product factor relating to expansion into Asia with little or no justification"
                         }
                     ],
        "keyPoints":  "Possible factors: cultural differences and beliefs affecting which fish/pets are acceptable or considered lucky/unlucky; the range of aquariums and pets offered may need to be adapted to local tastes and living spaces (e.g. smaller apartments requiring compact aquariums); quarantine, biosecurity and import regulations on live animals; product labelling/packaging in the local language. Each factor should be linked to a reason why it matters specifically for Pescado del Dia.",
        "sampleAnswer": "One factor is cultural beliefs about fish and pets, as certain species may be considered lucky or unlucky in different Asian cultures, meaning Pescado del Dia must research and select an appropriate range of fish for each target market to avoid causing offence or low demand. A second factor is living space, as many Asian cities have smaller apartments than Australian homes, meaning Pescado del Dia may need to offer more compact aquarium products suited to limited space, rather than simply exporting its existing Australian product range unchanged."
    },
    {
        "id":  "bs-4-sydboys13-4",
        "criteriaSource": "derived",
        "marks":  4,
        "topic":  "Marketing",
        "source":  "Sydney Boys 2013 Trial HSC (Q22c)",
        "stimulus":  "Pescado del Dia is a pet store specialising in fish and aquariums that has been operating in six major cities across Australia for 15 years. They are looking to expand into Asia in the future and need some help investigating how they could do so successfully.",
        "question":  "Evaluate the potential for E-marketing to be used by Pescado del Dia with their new ideas.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Makes a well-supported judgement on the potential for e-marketing to be used by Pescado del Dia, using specific evidence relevant to the business"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Makes a judgement on the potential for e-marketing with some supporting evidence relevant to the business"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Discusses the potential for e-marketing in general terms with limited supporting evidence"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Displays limited understanding of e-marketing"
                         }
                     ],
        "keyPoints":  "Benefits: builds on established Australian brand reputation, wide reach into new Asian markets at relatively low cost, ability to showcase products via website/social media, 24/7 access, opportunity for online engagement. Limitations: internet access and e-commerce trust vary across Asian markets, need for language/cultural adaptation, difficulty shipping live animals ordered online, compliance with local online advertising/consumer laws. Should conclude with an overall judgement.",
        "sampleAnswer": "E-marketing could allow Pescado del Dia to promote its products cheaply and widely across new Asian markets via its website and social media, building on its 15 years of established Australian brand reputation and reaching potential customers 24/7 before opening physical stores. However, its effectiveness may be limited by variable internet access and different levels of trust in online shopping across Asian countries, the need to adapt content to local languages and cultures, and the practical difficulty of shipping live fish ordered online. Overall, e-marketing is a valuable low-cost tool for building initial awareness in Asia, but is unlikely to fully replace the need for physical stores or distributors given the challenges of shipping live animals."
    },
    {
        "id":  "bs-4-sydboys13-5",
        "criteriaSource": "derived",
        "marks":  4,
        "topic":  "Marketing",
        "source":  "Sydney Boys 2013 Trial HSC (Q23a)",
        "stimulus":  "Fashionista is a proposed fashion magazine on the latest glamorous trends and upcoming product launches which is in the planning stages prior to their first release into a highly saturated market.",
        "question":  "Complete a simple SWOT analysis for Fashionista.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Identifies a logical and relevant strength, weakness, opportunity and threat for Fashionista"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Identifies three of the four SWOT elements logically and relevantly for Fashionista"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Identifies two of the four SWOT elements logically and relevantly for Fashionista"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Identifies one SWOT element logically and relevantly for Fashionista"
                         }
                     ],
        "keyPoints":  "Strength: up-to-date/current trend content, catchy and memorable brand name. Weakness: no existing brand recognition or reputation, no established customer/subscriber base, lack of experience in a competitive market. Opportunity: expanding into digital/online editions, growing into related product lines (merchandise, events). Threat: declining print magazine readership as consumers shift to digital/social media, retaliation or price competition from established competitors in a highly saturated market.",
        "sampleAnswer": "A strength for Fashionista is its catchy, memorable brand name that could help it stand out in a saturated market. A weakness is that, being a new magazine, it has no existing brand recognition or subscriber base. An opportunity is expanding into digital or online editions to reach readers shifting away from print. A threat is declining print magazine readership as consumers increasingly turn to digital and social media for fashion content, alongside the risk of retaliation from established competitors already operating in this highly saturated market."
    },
    {
        "id":  "bs-3-sydboys13-1",
        "criteriaSource": "derived",
        "marks":  3,
        "topic":  "Marketing",
        "source":  "Sydney Boys 2013 Trial HSC (Q23b)",
        "stimulus":  "Fashionista is a proposed fashion magazine on the latest glamorous trends and upcoming product launches which is in the planning stages prior to their first release into a highly saturated market.",
        "question":  "Propose and justify a primary target market for Fashionista.",
        "criteria":  [
                         {
                             "marks":  3,
                             "descriptor":  "Proposes and thoroughly justifies a logical primary target market for Fashionista"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Proposes a primary target market for Fashionista with some justification"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Proposes a primary target market for Fashionista with little or no justification"
                         }
                     ],
        "keyPoints":  "Suggest a demographic, e.g. young to middle-aged women (roughly 18-40) with a strong interest in fashion and moderate-to-high disposable income, including fashion industry professionals; justify by linking to the magazine\u0027s glamorous trend/product-launch content and the purchasing power/interest of this group.",
        "sampleAnswer": "Fashionista\u0027s primary target market should be women aged approximately 18 to 40 with a strong interest in fashion and moderate to high disposable income, including fashion industry professionals. This group is likely to have both the interest in glamorous trends and upcoming product launches that the magazine covers, and the purchasing power to buy the magazine regularly and act on the fashion advice and product launches it promotes, making them the most profitable and engaged readership for a new entrant into a saturated fashion magazine market."
    },
    {
        "id":  "bs-3-sydboys13-2",
        "criteriaSource": "derived",
        "marks":  3,
        "topic":  "Marketing",
        "source":  "Sydney Boys 2013 Trial HSC (Q23c)",
        "stimulus":  "Fashionista is a proposed fashion magazine on the latest glamorous trends and upcoming product launches which is in the planning stages prior to their first release into a highly saturated market.",
        "question":  "Recommend and justify ONE pricing strategy that could be used for Fashionista.",
        "criteria":  [
                         {
                             "marks":  3,
                             "descriptor":  "Recommends and thoroughly justifies ONE pricing strategy for Fashionista that aligns with the proposed target market"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Recommends a pricing strategy for Fashionista with some justification"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Recommends a pricing strategy for Fashionista with little or no justification"
                         }
                     ],
        "keyPoints":  "Options include penetration pricing (low introductory price to attract readers and build market share quickly in a saturated market) or competition-based pricing (pricing in line with rival fashion magazines while establishing reputation). The chosen strategy should be linked to the target market and the saturated market entry context.",
        "sampleAnswer": "Fashionista should use penetration pricing, setting a low introductory price to attract readers away from established competitors in the highly saturated fashion magazine market. As a new entrant with no existing brand recognition, a low price reduces the risk for first-time readers to try the magazine, helping Fashionista build an initial subscriber base and market share quickly before potentially raising its price once it becomes established."
    },
    {
        "id":  "bs-2-sydboys13-3",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Finance",
        "source":  "Sydney Boys 2013 Trial HSC (Q24a)",
        "stimulus":  {
                         "blocks":  [
                                        {
                                            "type":  "text",
                                            "text":  "Cash Flow Statement of XYZ Ltd for the Quarter Ended 30/06/13"
                                        },
                                        {
                                            "type":  "table",
                                            "title":  null,
                                            "columns":  [
                                                            "",
                                                            "$"
                                                        ],
                                            "rows":  [
                                                         [
                                                             "Cash flows from operating activities",
                                                             ""
                                                         ],
                                                         [
                                                             "Receipts from customers",
                                                             "45 000"
                                                         ],
                                                         [
                                                             "Payments to suppliers and employees",
                                                             "(35 000)"
                                                         ],
                                                         [
                                                             "Dividends received",
                                                             "22 000"
                                                         ],
                                                         [
                                                             "Interest received",
                                                             "7 000"
                                                         ],
                                                         [
                                                             "Net cash provided by operating activities",
                                                             "?"
                                                         ],
                                                         [
                                                             "Cash flows from investing activities",
                                                             ""
                                                         ],
                                                         [
                                                             "Proceeds from sale of assets",
                                                             "135 000"
                                                         ],
                                                         [
                                                             "Payment of plant and equipment",
                                                             "(260 000)"
                                                         ],
                                                         [
                                                             "Net cash from investing activities",
                                                             "?"
                                                         ],
                                                         [
                                                             "Cash flows from financing activities",
                                                             ""
                                                         ],
                                                         [
                                                             "Proceeds from issues of shares",
                                                             "190 000"
                                                         ],
                                                         [
                                                             "Proceeds from borrowings",
                                                             "40 000"
                                                         ],
                                                         [
                                                             "Repayments of borrowings",
                                                             "(85 000)"
                                                         ],
                                                         [
                                                             "Dividends paid",
                                                             "(35 000)"
                                                         ],
                                                         [
                                                             "Net cash from financing activities",
                                                             "?"
                                                         ],
                                                         [
                                                             "Net increase in cash",
                                                             "?"
                                                         ],
                                                         [
                                                             "Cash at beginning of the quarter",
                                                             "15 000"
                                                         ],
                                                         [
                                                             "Closing cash balance",
                                                             "?"
                                                         ]
                                                     ]
                                        }
                                    ]
                     },
        "question":  "What is the purpose of a cash flow statement for a business?",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Clearly explains the purpose of a cash flow statement for a business"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Gives a general/basic outline of what a cash flow statement is or does"
                         }
                     ],
        "keyPoints":  "A cash flow statement records the actual cash inflows and outflows of a business over a period, classified into operating, investing and financing activities; its purpose is to help the business identify and manage cash surpluses/shortages so it can pay debts as they fall due (liquidity) and plan for future cash needs.",
        "sampleAnswer": "A cash flow statement records a business\u0027s actual cash inflows and outflows over a period, classified into operating, investing and financing activities. Its purpose is to help a business identify and manage cash surpluses or shortages, ensuring it can pay debts as they fall due and plan for future cash needs."
    },
    {
        "id":  "bs-2-sydboys13-4",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Finance",
        "source":  "Sydney Boys 2013 Trial HSC (Q24b)",
        "stimulus":  {
                         "blocks":  [
                                        {
                                            "type":  "text",
                                            "text":  "Cash Flow Statement of XYZ Ltd for the Quarter Ended 30/06/13"
                                        },
                                        {
                                            "type":  "table",
                                            "title":  null,
                                            "columns":  [
                                                            "",
                                                            "$"
                                                        ],
                                            "rows":  [
                                                         [
                                                             "Cash flows from operating activities",
                                                             ""
                                                         ],
                                                         [
                                                             "Receipts from customers",
                                                             "45 000"
                                                         ],
                                                         [
                                                             "Payments to suppliers and employees",
                                                             "(35 000)"
                                                         ],
                                                         [
                                                             "Dividends received",
                                                             "22 000"
                                                         ],
                                                         [
                                                             "Interest received",
                                                             "7 000"
                                                         ],
                                                         [
                                                             "Net cash provided by operating activities",
                                                             "?"
                                                         ],
                                                         [
                                                             "Cash flows from investing activities",
                                                             ""
                                                         ],
                                                         [
                                                             "Proceeds from sale of assets",
                                                             "135 000"
                                                         ],
                                                         [
                                                             "Payment of plant and equipment",
                                                             "(260 000)"
                                                         ],
                                                         [
                                                             "Net cash from investing activities",
                                                             "?"
                                                         ],
                                                         [
                                                             "Cash flows from financing activities",
                                                             ""
                                                         ],
                                                         [
                                                             "Proceeds from issues of shares",
                                                             "190 000"
                                                         ],
                                                         [
                                                             "Proceeds from borrowings",
                                                             "40 000"
                                                         ],
                                                         [
                                                             "Repayments of borrowings",
                                                             "(85 000)"
                                                         ],
                                                         [
                                                             "Dividends paid",
                                                             "(35 000)"
                                                         ],
                                                         [
                                                             "Net cash from financing activities",
                                                             "?"
                                                         ],
                                                         [
                                                             "Net increase in cash",
                                                             "?"
                                                         ],
                                                         [
                                                             "Cash at beginning of the quarter",
                                                             "15 000"
                                                         ],
                                                         [
                                                             "Closing cash balance",
                                                             "?"
                                                         ]
                                                     ]
                                        }
                                    ]
                     },
        "question":  "Calculate the closing cash balance for XYZ Ltd.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Correctly calculates the closing cash balance as $39,000, showing all working"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Shows correct/appropriate working but arrives at an incorrect final figure due to a calculation error"
                         }
                     ],
        "keyPoints":  "Net cash from operating = 45,000 - 35,000 + 22,000 + 7,000 = $39,000. Net cash from investing = 135,000 - 260,000 = -$125,000. Net cash from financing = 190,000 + 40,000 - 85,000 - 35,000 = $110,000. Net increase in cash = 39,000 - 125,000 + 110,000 = $24,000. Closing cash balance = opening cash 15,000 + net increase 24,000 = $39,000.",
        "sampleAnswer": "Operating = 45,000 âˆ’ 35,000 + 22,000 + 7,000 = $39,000. Investing = 135,000 âˆ’ 260,000 = âˆ’$125,000. Financing = 190,000 + 40,000 âˆ’ 85,000 âˆ’ 35,000 = $110,000. Net increase = 39,000 âˆ’ 125,000 + 110,000 = $24,000. Closing cash balance = $15,000 opening + $24,000 = $39,000."
    },
    {
        "id":  "bs-3-sydboys13-3",
        "criteriaSource": "derived",
        "marks":  3,
        "topic":  "Finance",
        "source":  "Sydney Boys 2013 Trial HSC (Q24c)",
        "stimulus":  {
                         "blocks":  [
                                        {
                                            "type":  "text",
                                            "text":  "Cash Flow Statement of XYZ Ltd for the Quarter Ended 30/06/13"
                                        },
                                        {
                                            "type":  "table",
                                            "title":  null,
                                            "columns":  [
                                                            "",
                                                            "$"
                                                        ],
                                            "rows":  [
                                                         [
                                                             "Cash flows from operating activities",
                                                             ""
                                                         ],
                                                         [
                                                             "Receipts from customers",
                                                             "45 000"
                                                         ],
                                                         [
                                                             "Payments to suppliers and employees",
                                                             "(35 000)"
                                                         ],
                                                         [
                                                             "Dividends received",
                                                             "22 000"
                                                         ],
                                                         [
                                                             "Interest received",
                                                             "7 000"
                                                         ],
                                                         [
                                                             "Net cash provided by operating activities",
                                                             "?"
                                                         ],
                                                         [
                                                             "Cash flows from investing activities",
                                                             ""
                                                         ],
                                                         [
                                                             "Proceeds from sale of assets",
                                                             "135 000"
                                                         ],
                                                         [
                                                             "Payment of plant and equipment",
                                                             "(260 000)"
                                                         ],
                                                         [
                                                             "Net cash from investing activities",
                                                             "?"
                                                         ],
                                                         [
                                                             "Cash flows from financing activities",
                                                             ""
                                                         ],
                                                         [
                                                             "Proceeds from issues of shares",
                                                             "190 000"
                                                         ],
                                                         [
                                                             "Proceeds from borrowings",
                                                             "40 000"
                                                         ],
                                                         [
                                                             "Repayments of borrowings",
                                                             "(85 000)"
                                                         ],
                                                         [
                                                             "Dividends paid",
                                                             "(35 000)"
                                                         ],
                                                         [
                                                             "Net cash from financing activities",
                                                             "?"
                                                         ],
                                                         [
                                                             "Net increase in cash",
                                                             "?"
                                                         ],
                                                         [
                                                             "Cash at beginning of the quarter",
                                                             "15 000"
                                                         ],
                                                         [
                                                             "Closing cash balance",
                                                             "?"
                                                         ]
                                                     ]
                                        }
                                    ]
                     },
        "question":  "Assess the cash flow of XYZ Ltd for the quarter using the cash flow statement above.",
        "criteria":  [
                         {
                             "marks":  3,
                             "descriptor":  "Makes a well-supported judgement on the cash flow of XYZ Ltd for the quarter, using specific evidence from the cash flow statement"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Discusses the cash flow of XYZ Ltd with some reference to evidence from the cash flow statement"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Attempts to describe the cash flow of XYZ Ltd with little or no use of evidence from the statement"
                         }
                     ],
        "keyPoints":  "Overall net increase in cash of $24,000 is positive; operating activities are healthily positive ($39,000), a good sign as cash is generated from core operations; investing activities are heavily negative (-$125,000) due to large capital expenditure on plant and equipment exceeding proceeds from asset sales; financing activities are strongly positive (+$110,000) but rely heavily on external funding (share issue and borrowings) to cover the investing shortfall, raising concern about over-reliance on external finance/gearing.",
        "sampleAnswer": "XYZ Ltd\u0027s overall cash position improved, with a net increase in cash of $24,000 for the quarter. Operating activities were healthily positive at $39,000, showing the core business is generating solid cash from customers. However, investing activities were heavily negative at âˆ’$125,000, as the $260,000 spent on plant and equipment far exceeded the $135,000 raised from asset sales. This shortfall was covered by strongly positive financing activities of $110,000, largely from new share issues and borrowings, meaning XYZ Ltd\u0027s positive cash position currently relies heavily on external funding rather than internally generated cash alone, which could be a concern if sustained long-term."
    },
    {
        "id":  "bs-3-sydboys13-4",
        "criteriaSource": "derived",
        "marks":  3,
        "topic":  "Finance",
        "source":  "Sydney Boys 2013 Trial HSC (Q24d)",
        "stimulus":  {
                         "blocks":  [
                                        {
                                            "type":  "text",
                                            "text":  "Cash Flow Statement of XYZ Ltd for the Quarter Ended 30/06/13"
                                        },
                                        {
                                            "type":  "table",
                                            "title":  null,
                                            "columns":  [
                                                            "",
                                                            "$"
                                                        ],
                                            "rows":  [
                                                         [
                                                             "Cash flows from operating activities",
                                                             ""
                                                         ],
                                                         [
                                                             "Receipts from customers",
                                                             "45 000"
                                                         ],
                                                         [
                                                             "Payments to suppliers and employees",
                                                             "(35 000)"
                                                         ],
                                                         [
                                                             "Dividends received",
                                                             "22 000"
                                                         ],
                                                         [
                                                             "Interest received",
                                                             "7 000"
                                                         ],
                                                         [
                                                             "Net cash provided by operating activities",
                                                             "?"
                                                         ],
                                                         [
                                                             "Cash flows from investing activities",
                                                             ""
                                                         ],
                                                         [
                                                             "Proceeds from sale of assets",
                                                             "135 000"
                                                         ],
                                                         [
                                                             "Payment of plant and equipment",
                                                             "(260 000)"
                                                         ],
                                                         [
                                                             "Net cash from investing activities",
                                                             "?"
                                                         ],
                                                         [
                                                             "Cash flows from financing activities",
                                                             ""
                                                         ],
                                                         [
                                                             "Proceeds from issues of shares",
                                                             "190 000"
                                                         ],
                                                         [
                                                             "Proceeds from borrowings",
                                                             "40 000"
                                                         ],
                                                         [
                                                             "Repayments of borrowings",
                                                             "(85 000)"
                                                         ],
                                                         [
                                                             "Dividends paid",
                                                             "(35 000)"
                                                         ],
                                                         [
                                                             "Net cash from financing activities",
                                                             "?"
                                                         ],
                                                         [
                                                             "Net increase in cash",
                                                             "?"
                                                         ],
                                                         [
                                                             "Cash at beginning of the quarter",
                                                             "15 000"
                                                         ],
                                                         [
                                                             "Closing cash balance",
                                                             "?"
                                                         ]
                                                     ]
                                        }
                                    ]
                     },
        "question":  "Recommend ONE action you would make to XYZ Ltd to help them improve their cash flow.",
        "criteria":  [
                         {
                             "marks":  3,
                             "descriptor":  "Puts forward ONE logical action to help XYZ Ltd improve their cash flow, with strong supporting evidence linked to the cash flow statement"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Puts forward an action to help XYZ Ltd improve their cash flow, with some supporting evidence"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Sketches in general terms a strategy to improve cash flow without relating it back to XYZ Ltd\u0027s specific situation"
                         }
                     ],
        "keyPoints":  "Examples: offer discounts for early payment to encourage customers to pay sooner and speed up receipts; distribute/spread out large payments (e.g. the plant and equipment purchase) over time rather than one lump sum to ease pressure on investing cash flow; factor accounts receivable; negotiate longer payment terms with suppliers. Should be linked back to a specific line item in XYZ\u0027s statement, e.g. the large investing outflow or reliance on financing. Note: sale and lease back would hinder future cash flow while improving it in the present.",
        "sampleAnswer": "XYZ Ltd could offer discounts for early payment to customers, encouraging faster receipts and improving operating cash flow, which was a comparatively modest $39,000 relative to the scale of the business\u0027s other cash flows. It could also spread large capital purchases, such as the $260,000 spent on plant and equipment, over instalments or a lease arrangement rather than one lump sum payment, easing the pressure that caused the large âˆ’$125,000 net outflow from investing activities and reducing reliance on financing activities such as new borrowings and share issues to fund cash needs."
    },
    {
        "id":  "bs-1-sydboys14-1",
        "criteriaSource": "official",
        "marks":  1,
        "topic":  "Operations",
        "source":  "Sydney Boys 2014 Trial HSC (Q21a-i)",
        "stimulus":  "Vroom Pty Ltd assembles electronic motors from imported parts. The diagram shows the sequencing of tasks in the assembly of the motors: Start leads into Task A (15 minutes), which splits into two parallel paths - Task B (10 minutes) then Task D (10 minutes); and Task C (25 minutes) then Task E (25 minutes) - both paths converge into Task F (15 minutes), then Task G (10 minutes), before the motor is Despatched.",
        "question":  "Calculate the critical path for Vroom Pty Ltd.",
        "criteria":  [
                         {
                             "marks":  1,
                             "descriptor":  "Correctly identifies the critical path as A-C-E-F-G, totalling 90 minutes"
                         }
                     ],
        "keyPoints":  "Critical path = A-C-E-F-G = 15+25+25+15+10 = 90 minutes (the longest path through the network, determining the minimum completion time)",
        "sampleAnswer": "The critical path is A-C-E-F-G, totalling 15+25+25+15+10 = 90 minutes, the longest path through the network."
    },
    {
        "id":  "bs-3-sydboys14-1",
        "criteriaSource": "official",
        "marks":  3,
        "topic":  "Operations",
        "source":  "Sydney Boys 2014 Trial HSC (Q21a-ii)",
        "stimulus":  "Vroom Pty Ltd assembles electronic motors from imported parts. The diagram shows the sequencing of tasks in the assembly of the motors: Start leads into Task A (15 minutes), which splits into two parallel paths - Task B (10 minutes) then Task D (10 minutes); and Task C (25 minutes) then Task E (25 minutes) - both paths converge into Task F (15 minutes), then Task G (10 minutes), before the motor is Despatched.",
        "question":  "Distinguish between transforming and transformed resources for this business.",
        "criteria":  [
                         {
                             "marks":  3,
                             "descriptor":  "Identifies transformed resources as materials, information, customers, and refers to imported parts for Vroom Pty Ltd; identifies transforming resources as human resources and facilities, and refers to the workers, machinery or factory of Vroom Pty Ltd"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Identifies both transformed and transforming resources but does not refer to the business"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Only identifies one of transformed and transforming resources correctly"
                         }
                     ],
        "keyPoints":  "Transformed resources = materials, information, customers changed by the process (e.g. imported parts for Vroom Pty Ltd); Transforming resources = human resources and facilities that cause the change (e.g. Vroom\u0027s workers, assembly machinery/factory)",
        "sampleAnswer": "Transformed resources are the materials, information or customers changed by the operations process; for Vroom Pty Ltd, this includes the imported electronic motor parts that are converted into finished motors. Transforming resources are the human resources and facilities that carry out this change; for Vroom, this includes the workers assembling the motors and the machinery and factory used across tasks A to G in the assembly line."
    },
    {
        "id":  "bs-6-sydboys14-1",
        "criteriaSource": "derived",
        "marks":  6,
        "topic":  "Operations",
        "source":  "Sydney Boys 2014 Trial HSC (Q21b)",
        "stimulus":  "Vroom Pty Ltd assembles electronic motors from imported parts. The diagram shows the sequencing of tasks in the assembly of the motors: Start leads into Task A (15 minutes), which splits into two parallel paths - Task B (10 minutes) then Task D (10 minutes); and Task C (25 minutes) then Task E (25 minutes) - both paths converge into Task F (15 minutes), then Task G (10 minutes), before the motor is Despatched.",
        "question":  "Describe the process of monitoring, control and improvement for this business.",
        "criteria":  [
                         {
                             "marks":  6,
                             "descriptor":  "Provides characteristics and features of each of monitoring, controlling and improvement for this business, well related to Vroom Pty Ltd"
                         },
                         {
                             "marks":  5,
                             "descriptor":  "Provides characteristics and features of each of monitoring, controlling and improvement for this business"
                         },
                         {
                             "marks":  4,
                             "descriptor":  "Provides characteristics and features of each but does not clearly relate to the business, with reasonable depth"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Provides characteristics and features of each but does not clearly relate to the business"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Provides general information about monitoring, controlling and improvement, sometimes confused or inaccurate"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Provides limited and largely inaccurate general information"
                         }
                     ],
        "keyPoints":  "Monitoring = measuring actual performance against planned performance using KPIs (e.g. defect/repair rates); Control = comparing KPIs against targets and taking corrective action (e.g. IT/maintenance costs above budget); Improvement = systematic reduction of inefficiencies, waste, poor work practices, eliminating bottlenecks (e.g. reducing shift changeover time)",
        "sampleAnswer": "Monitoring involves Vroom Pty Ltd measuring its actual performance against planned performance using key performance indicators, such as tracking defect and repair rates for motors coming off the assembly line, or comparing actual task times, like the 90-minute critical path of A-C-E-F-G, against target completion times. Control involves comparing these measured results against set targets or budgets, such as checking whether IT or maintenance costs on the assembly equipment have exceeded budget, and deciding whether corrective action is needed. Improvement involves the systematic reduction of inefficiencies, waste and poor work practices identified through monitoring and control, such as eliminating bottlenecks by reducing shift changeover time between tasks or reorganising the assembly sequence to cut down non-critical path idle time. Together, these three stages form an ongoing cycle that allows Vroom to continuously identify problems in its assembly process and make targeted improvements to production efficiency."
    },
    {
        "id":  "bs-1-sydboys14-2",
        "criteriaSource": "official",
        "marks":  1,
        "topic":  "Marketing",
        "source":  "Sydney Boys 2014 Trial HSC (Q22a)",
        "stimulus":  "Gazines Galore Pty Ltd is a specialist magazine publisher with over two hundred titles. In the past it has monitored obscure clubs and societies around the country and assessed the viability of providing a monthly magazine. In recent times the company has realised that online metadata is providing a \u0027gold mine\u0027 of information for its purposes. It can track the obscure interests of millions of internet users and bundle them together to create separate defined markets for their products.",
        "question":  "What is marketing?",
        "criteria":  [
                         {
                             "marks":  1,
                             "descriptor":  "Correctly defines marketing as a total system of interacting activities designed to plan, price, promote and distribute products to present and potential customers"
                         }
                     ],
        "keyPoints":  "Marketing = a total system of interacting business activities designed to plan, price, promote and distribute products to present and potential customers",
        "sampleAnswer": "Marketing is a total system of interacting business activities designed to plan, price, promote and distribute products to present and potential customers."
    },
    {
        "id":  "bs-3-sydboys14-2",
        "criteriaSource": "official",
        "marks":  3,
        "topic":  "Marketing",
        "source":  "Sydney Boys 2014 Trial HSC (Q22b)",
        "stimulus":  "Gazines Galore Pty Ltd is a specialist magazine publisher with over two hundred titles. In the past it has monitored obscure clubs and societies around the country and assessed the viability of providing a monthly magazine. In recent times the company has realised that online metadata is providing a \u0027gold mine\u0027 of information for its purposes. It can track the obscure interests of millions of internet users and bundle them together to create separate defined markets for their products.",
        "question":  "Outline three types of markets. Which market is Gazines Galore Pty Ltd targeting?",
        "criteria":  [
                         {
                             "marks":  3,
                             "descriptor":  "Sketches in general terms three types of markets and correctly identifies Gazines Galore Pty Ltd as targeting a niche market"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Outlines three types of markets but does not identify Gazines Galore Pty Ltd as targeting a niche market"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "General comment of limited detail about types of markets"
                         }
                     ],
        "keyPoints":  "Types of markets: resource (primary production/mining/agriculture), industrial (purchase of products for use in production), intermediate (wholesalers/retailers), consumer (individuals), mass (mass produced/distributed/promoted), niche (narrowly selected target market segment); Gazines Galore Pty Ltd, which bundles obscure interests from online metadata to create separately defined markets for specific magazine titles, is targeting a niche market",
        "sampleAnswer": "Types of markets include the industrial market (businesses purchasing products to use in production), the consumer market (individuals buying for personal use), and the niche market (a narrowly selected market segment with specific interests). Gazines Galore Pty Ltd is targeting a niche market, as it uses online metadata to identify the obscure interests of internet users and bundles them into narrowly defined groups, allowing it to publish specialist magazine titles for small, specific audiences rather than mass-producing one general publication."
    },
    {
        "id":  "bs-2-sydboys14-1",
        "criteriaSource": "derived",
        "marks":  2,
        "topic":  "Marketing",
        "source":  "Sydney Boys 2014 Trial HSC (Q22c)",
        "stimulus":  "Gazines Galore Pty Ltd is a specialist magazine publisher with over two hundred titles. In the past it has monitored obscure clubs and societies around the country and assessed the viability of providing a monthly magazine. In recent times the company has realised that online metadata is providing a \u0027gold mine\u0027 of information for its purposes. It can track the obscure interests of millions of internet users and bundle them together to create separate defined markets for their products.",
        "question":  "Distinguish between a sales (selling) approach and a marketing approach.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Recognises the differences between a sales approach (emphasis on selling due to competition, increased advertising, persuading customers to buy) and a marketing approach (researching what customers want, use of market research, satisfying needs)"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Provides limited or partial distinction between the two approaches"
                         }
                     ],
        "keyPoints":  "Sales approach: emphasis on selling because of increased competition, increased spending on advertising, persuading customers to buy. Marketing approach: identifying what customers want, use of market research, satisfying needs",
        "sampleAnswer": "A sales approach focuses on persuading customers to buy existing products through increased advertising, often in response to competition, whereas a marketing approach begins with market research to identify what customers want, then develops products to satisfy those needs. In short, sales is product-focused while marketing is customer-focused."
    },
    {
        "id":  "bs-4-sydboys14-1",
        "criteriaSource": "derived",
        "marks":  4,
        "topic":  "Marketing",
        "source":  "Sydney Boys 2014 Trial HSC (Q22d)",
        "stimulus":  "Gazines Galore Pty Ltd is a specialist magazine publisher with over two hundred titles. In the past it has monitored obscure clubs and societies around the country and assessed the viability of providing a monthly magazine. In recent times the company has realised that online metadata is providing a \u0027gold mine\u0027 of information for its purposes. It can track the obscure interests of millions of internet users and bundle them together to create separate defined markets for their products.",
        "question":  "Describe three marketing objectives for this business and identify how they might be measured.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Provides characteristics and features of three marketing objectives (e.g. increasing market share, expanding the product range, maximising customer service) and identifies how each might be measured"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Provides characteristics and features of three marketing objectives but no reference to measurement"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Provides characteristics and features of two marketing objectives but no reference to measurement"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Identifies at least one marketing objective with limited detail"
                         }
                     ],
        "keyPoints":  "Objectives: increasing market share (measured e.g. by a target % increase in sales); expanding the product range (measured by number of new titles launched); maximising customer service (measured through customer satisfaction surveys or subscription renewal rates)",
        "sampleAnswer": "One objective is increasing market share, measured by a target percentage increase in sales. A second is expanding the product range, measured by the number of new niche magazine titles launched using Gazines Galore\u0027s online metadata insights. A third is maximising customer service, measured through subscriber satisfaction surveys or subscription renewal rates. Each objective gives Gazines Galore a clear, measurable target to track its performance against as it grows its specialist magazine business."
    },
    {
        "id":  "bs-1-sydboys14-3",
        "criteriaSource": "official",
        "marks":  1,
        "topic":  "Finance",
        "source":  "Sydney Boys 2014 Trial HSC (Q23a)",
        "stimulus":  {
                         "blocks":  [
                                        {
                                            "type":  "text",
                                            "text":  "Neverland Pty Ltd, As at 30 June 2014"
                                        },
                                        {
                                            "type":  "table",
                                            "title":  "Assets",
                                            "columns":  [
                                                            "",
                                                            "$"
                                                        ],
                                            "rows":  [
                                                         [
                                                             "Current assets",
                                                             ""
                                                         ],
                                                         [
                                                             "Cash",
                                                             "4 450"
                                                         ],
                                                         [
                                                             "Accounts receivable",
                                                             "8 500"
                                                         ],
                                                         [
                                                             "Inventory",
                                                             "13 600"
                                                         ],
                                                         [
                                                             "Non-current assets",
                                                             ""
                                                         ],
                                                         [
                                                             "Equipment",
                                                             "37 550"
                                                         ],
                                                         [
                                                             "Property",
                                                             "410 000"
                                                         ],
                                                         [
                                                             "Vehicles",
                                                             "91 000"
                                                         ]
                                                     ]
                                        },
                                        {
                                            "type":  "table",
                                            "title":  "Liabilities and Owner\u0027s Equity",
                                            "columns":  [
                                                            "",
                                                            "$"
                                                        ],
                                            "rows":  [
                                                         [
                                                             "Current liabilities",
                                                             ""
                                                         ],
                                                         [
                                                             "Overdraft",
                                                             "13 500"
                                                         ],
                                                         [
                                                             "Accounts payable",
                                                             "11 600"
                                                         ],
                                                         [
                                                             "Non-current liability",
                                                             ""
                                                         ],
                                                         [
                                                             "Mortgage",
                                                             "280 000"
                                                         ],
                                                         [
                                                             "Owner\u0027s equity",
                                                             ""
                                                         ],
                                                         [
                                                             "Capital",
                                                             "165 000"
                                                         ],
                                                         [
                                                             "Net profit",
                                                             "95 000"
                                                         ]
                                                     ]
                                        },
                                        {
                                            "type":  "text",
                                            "text":  "Additional Information: 2013 debt to equity ratio: 0.8:1; 2013 return on owner\u0027s equity: 5.3%; 2013 net profit: $323 000"
                                        }
                                    ]
                     },
        "question":  "Calculate the current ratio (current assets / current liabilities) for Neverland Pty Ltd in 2014.",
        "criteria":  [
                         {
                             "marks":  1,
                             "descriptor":  "Correctly calculates the current ratio as 26,550 / 25,100 = 1.06:1"
                         }
                     ],
        "keyPoints":  "Current assets = 4,450+8,500+13,600 = $26,550; current liabilities = 13,500+11,600 = $25,100; current ratio = 26,550/25,100 = 1.06:1",
        "sampleAnswer": "Current Ratio = Current Assets ($26,550) ÷ Current Liabilities ($25,100) = 1.06:1."
    },
    {
        "id":  "bs-2-sydboys14-2",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Finance",
        "source":  "Sydney Boys 2014 Trial HSC (Q23b)",
        "stimulus":  {
                         "blocks":  [
                                        {
                                            "type":  "text",
                                            "text":  "Neverland Pty Ltd, As at 30 June 2014"
                                        },
                                        {
                                            "type":  "table",
                                            "title":  "Assets",
                                            "columns":  [
                                                            "",
                                                            "$"
                                                        ],
                                            "rows":  [
                                                         [
                                                             "Current assets",
                                                             ""
                                                         ],
                                                         [
                                                             "Cash",
                                                             "4 450"
                                                         ],
                                                         [
                                                             "Accounts receivable",
                                                             "8 500"
                                                         ],
                                                         [
                                                             "Inventory",
                                                             "13 600"
                                                         ],
                                                         [
                                                             "Non-current assets",
                                                             ""
                                                         ],
                                                         [
                                                             "Equipment",
                                                             "37 550"
                                                         ],
                                                         [
                                                             "Property",
                                                             "410 000"
                                                         ],
                                                         [
                                                             "Vehicles",
                                                             "91 000"
                                                         ]
                                                     ]
                                        },
                                        {
                                            "type":  "table",
                                            "title":  "Liabilities and Owner\u0027s Equity",
                                            "columns":  [
                                                            "",
                                                            "$"
                                                        ],
                                            "rows":  [
                                                         [
                                                             "Current liabilities",
                                                             ""
                                                         ],
                                                         [
                                                             "Overdraft",
                                                             "13 500"
                                                         ],
                                                         [
                                                             "Accounts payable",
                                                             "11 600"
                                                         ],
                                                         [
                                                             "Non-current liability",
                                                             ""
                                                         ],
                                                         [
                                                             "Mortgage",
                                                             "280 000"
                                                         ],
                                                         [
                                                             "Owner\u0027s equity",
                                                             ""
                                                         ],
                                                         [
                                                             "Capital",
                                                             "165 000"
                                                         ],
                                                         [
                                                             "Net profit",
                                                             "95 000"
                                                         ]
                                                     ]
                                        },
                                        {
                                            "type":  "text",
                                            "text":  "Additional Information: 2013 debt to equity ratio: 0.8:1; 2013 return on owner\u0027s equity: 5.3%; 2013 net profit: $323 000"
                                        }
                                    ]
                     },
        "question":  "Comment on the change in gearing (total Liabilities / Owners Equity) between 2013 and 2014.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Correctly calculates the 2014 gearing ratio and compares it to 2013, with an appropriate comment on the deterioration/increase in risk"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Miscalculation and/or limited comment on the change in gearing"
                         }
                     ],
        "keyPoints":  "2013 gearing = 0.8:1; 2014 gearing = Total Liabilities ($25,100+$280,000=$305,100) / Owner\u0027s Equity ($165,000+$95,000=$260,000) = 1.17:1; gearing has increased/deteriorated, meaning the business relies more heavily on debt, increasing financial risk",
        "sampleAnswer": "Gearing measures the proportion of debt to equity used to finance a business. Neverland\u0027s 2014 gearing is $305,100 ÷ $260,000 = 1.17:1, up from 0.8:1 in 2013. This shows gearing has deteriorated, as the business now relies more heavily on debt, increasing its financial risk."
    },
    {
        "id":  "bs-2-sydboys14-3",
        "criteriaSource": "derived",
        "marks":  2,
        "topic":  "Finance",
        "source":  "Sydney Boys 2014 Trial HSC (Q23c)",
        "stimulus":  {
                         "blocks":  [
                                        {
                                            "type":  "text",
                                            "text":  "Neverland Pty Ltd, As at 30 June 2014"
                                        },
                                        {
                                            "type":  "table",
                                            "title":  "Assets",
                                            "columns":  [
                                                            "",
                                                            "$"
                                                        ],
                                            "rows":  [
                                                         [
                                                             "Current assets",
                                                             ""
                                                         ],
                                                         [
                                                             "Cash",
                                                             "4 450"
                                                         ],
                                                         [
                                                             "Accounts receivable",
                                                             "8 500"
                                                         ],
                                                         [
                                                             "Inventory",
                                                             "13 600"
                                                         ],
                                                         [
                                                             "Non-current assets",
                                                             ""
                                                         ],
                                                         [
                                                             "Equipment",
                                                             "37 550"
                                                         ],
                                                         [
                                                             "Property",
                                                             "410 000"
                                                         ],
                                                         [
                                                             "Vehicles",
                                                             "91 000"
                                                         ]
                                                     ]
                                        },
                                        {
                                            "type":  "table",
                                            "title":  "Liabilities and Owner\u0027s Equity",
                                            "columns":  [
                                                            "",
                                                            "$"
                                                        ],
                                            "rows":  [
                                                         [
                                                             "Current liabilities",
                                                             ""
                                                         ],
                                                         [
                                                             "Overdraft",
                                                             "13 500"
                                                         ],
                                                         [
                                                             "Accounts payable",
                                                             "11 600"
                                                         ],
                                                         [
                                                             "Non-current liability",
                                                             ""
                                                         ],
                                                         [
                                                             "Mortgage",
                                                             "280 000"
                                                         ],
                                                         [
                                                             "Owner\u0027s equity",
                                                             ""
                                                         ],
                                                         [
                                                             "Capital",
                                                             "165 000"
                                                         ],
                                                         [
                                                             "Net profit",
                                                             "95 000"
                                                         ]
                                                     ]
                                        },
                                        {
                                            "type":  "text",
                                            "text":  "Additional Information: 2013 debt to equity ratio: 0.8:1; 2013 return on owner\u0027s equity: 5.3%; 2013 net profit: $323 000"
                                        }
                                    ]
                     },
        "question":  "Outline ONE possible reason for the change in return on owner\u0027s equity (Net Profit / Total Owners Equity) between 2013 and 2014.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Correctly calculates the 2014 return on owner\u0027s equity and provides a plausible reason for the change from the 2013 figure"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Attempts the calculation or provides a general reason without full support"
                         }
                     ],
        "keyPoints":  "2014 ROE = Net Profit $95,000 / Total Owner\u0027s Equity $260,000 = 36.5%; 2013 ROE = 5.3%; possible reasons for the increase include a significantly higher net profit in 2014, or increased use of debt financing boosting the return generated on a relatively smaller equity base",
        "sampleAnswer": "Return on Owner\u0027s Equity = $95,000 ÷ $260,000 = 36.5%, a large rise from 5.3% in 2013. One likely reason is that Neverland achieved a significantly higher net profit this year, which directly increases the return generated on the owner\u0027s smaller equity base."
    },
    {
        "id":  "bs-5-sydboys14-1",
        "criteriaSource": "derived",
        "marks":  5,
        "topic":  "Finance",
        "source":  "Sydney Boys 2014 Trial HSC (Q23d)",
        "stimulus":  {
                         "blocks":  [
                                        {
                                            "type":  "text",
                                            "text":  "Neverland Pty Ltd, As at 30 June 2014"
                                        },
                                        {
                                            "type":  "table",
                                            "title":  "Assets",
                                            "columns":  [
                                                            "",
                                                            "$"
                                                        ],
                                            "rows":  [
                                                         [
                                                             "Current assets",
                                                             ""
                                                         ],
                                                         [
                                                             "Cash",
                                                             "4 450"
                                                         ],
                                                         [
                                                             "Accounts receivable",
                                                             "8 500"
                                                         ],
                                                         [
                                                             "Inventory",
                                                             "13 600"
                                                         ],
                                                         [
                                                             "Non-current assets",
                                                             ""
                                                         ],
                                                         [
                                                             "Equipment",
                                                             "37 550"
                                                         ],
                                                         [
                                                             "Property",
                                                             "410 000"
                                                         ],
                                                         [
                                                             "Vehicles",
                                                             "91 000"
                                                         ]
                                                     ]
                                        },
                                        {
                                            "type":  "table",
                                            "title":  "Liabilities and Owner\u0027s Equity",
                                            "columns":  [
                                                            "",
                                                            "$"
                                                        ],
                                            "rows":  [
                                                         [
                                                             "Current liabilities",
                                                             ""
                                                         ],
                                                         [
                                                             "Overdraft",
                                                             "13 500"
                                                         ],
                                                         [
                                                             "Accounts payable",
                                                             "11 600"
                                                         ],
                                                         [
                                                             "Non-current liability",
                                                             ""
                                                         ],
                                                         [
                                                             "Mortgage",
                                                             "280 000"
                                                         ],
                                                         [
                                                             "Owner\u0027s equity",
                                                             ""
                                                         ],
                                                         [
                                                             "Capital",
                                                             "165 000"
                                                         ],
                                                         [
                                                             "Net profit",
                                                             "95 000"
                                                         ]
                                                     ]
                                        },
                                        {
                                            "type":  "text",
                                            "text":  "Additional Information: 2013 debt to equity ratio: 0.8:1; 2013 return on owner\u0027s equity: 5.3%; 2013 net profit: $323 000"
                                        }
                                    ]
                     },
        "question":  "With reference to this business discuss the limitations of financial reports.",
        "criteria":  [
                         {
                             "marks":  5,
                             "descriptor":  "Identifies the major limitations of financial reports and relates them clearly to Neverland Pty Ltd"
                         },
                         {
                             "marks":  4,
                             "descriptor":  "Identifies several limitations of financial reports with good reference to Neverland Pty Ltd"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Provides reasonable examples of limitations with some reference to the business"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Limited examples of both limitations and reference to the business"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "General comments with minimal reference to limitations"
                         }
                     ],
        "keyPoints":  "Limitations include: normalised earnings, capitalising expenses, valuing assets at historical cost, timing issues, debt repayments, and lack of notes to the financial statements",
        "sampleAnswer": "Financial reports have several limitations affecting their reliability. Neverland\u0027s balance sheet values assets like the $410,000 property and vehicles at historical cost rather than current market value, so the figures may no longer reflect what these assets are actually worth. The report also lacks normalised earnings, meaning any one-off items included in the $95,000 net profit are not separated out, making it hard to judge Neverland\u0027s sustainable earning capacity. There may also be issues around capitalising expenses, where costs are recorded as assets rather than expenses, overstating asset values and profit. Timing issues mean the balance sheet only reflects Neverland\u0027s position on 30 June 2014, and may miss significant changes shortly before or after that date. Finally, the absence of notes to the financial statements limits understanding of the accounting policies used, such as how the $280,000 mortgage is structured, restricting a full assessment of Neverland\u0027s true financial position."
    },
    {
        "id":  "bs-1-sydboys14-4",
        "criteriaSource": "official",
        "marks":  1,
        "topic":  "Human Resources",
        "source":  "Sydney Boys 2014 Trial HSC (Q24a)",
        "stimulus":  "Joe Pesciona owns and manages a popular suburban pizza and pasta restaurant. For years the business has been doing well, but in recent months due to harder economic times and competition, business profits have declined, staff hours have been cut, morale is low, absenteeism is high and staff turnover has greatly increased. Joe is thinking about setting up an enterprise agreement with his workers but his accountant has told him that it would be cheaper just to hire casual and part-time staff.",
        "question":  "What is an enterprise agreement?",
        "criteria":  [
                         {
                             "marks":  1,
                             "descriptor":  "Correctly defines an enterprise agreement as a collective agreement made at the workplace level between an employer and a group of employees about terms and conditions of employment"
                         }
                     ],
        "keyPoints":  "An enterprise agreement is a collective agreement made at the workplace level between an employer and a group of employees about terms and conditions of employment",
        "sampleAnswer": "An enterprise agreement is a collective agreement made at the workplace level between an employer, like Joe Pesciona, and a group of employees about terms and conditions of employment."
    },
    {
        "id":  "bs-3-sydboys14-3",
        "criteriaSource": "official",
        "marks":  3,
        "topic":  "Human Resources",
        "source":  "Sydney Boys 2014 Trial HSC (Q24b)",
        "stimulus":  "Joe Pesciona owns and manages a popular suburban pizza and pasta restaurant. For years the business has been doing well, but in recent months due to harder economic times and competition, business profits have declined, staff hours have been cut, morale is low, absenteeism is high and staff turnover has greatly increased. Joe is thinking about setting up an enterprise agreement with his workers but his accountant has told him that it would be cheaper just to hire casual and part-time staff.",
        "question":  "Outline three obligations that Joe Pesciona owes his workers.",
        "criteria":  [
                         {
                             "marks":  3,
                             "descriptor":  "Outlines three obligations Joe Pesciona owes his workers, related to the business"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Outlines only two obligations and/or does not refer to the business"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Outlines only one obligation"
                         }
                     ],
        "keyPoints":  "Providing work (no unlawful stand-downs); payment of income and work-related expenses; meeting requirements of industrial relations and OHS legislation, including duty of care",
        "sampleAnswer": "Joe owes his workers a duty to provide work and not to unlawfully stand them down without pay when work is available. He must also pay their agreed wages and any expenses related to their work, such as reimbursement for job-related costs. Additionally, Joe must meet the requirements of industrial relations and occupational health and safety legislation, including exercising a duty of care to keep his restaurant a safe workplace for his staff."
    },
    {
        "id":  "bs-3-sydboys14-4",
        "criteriaSource": "official",
        "marks":  3,
        "topic":  "Human Resources",
        "source":  "Sydney Boys 2014 Trial HSC (Q24c)",
        "stimulus":  "Joe Pesciona owns and manages a popular suburban pizza and pasta restaurant. For years the business has been doing well, but in recent months due to harder economic times and competition, business profits have declined, staff hours have been cut, morale is low, absenteeism is high and staff turnover has greatly increased. Joe is thinking about setting up an enterprise agreement with his workers but his accountant has told him that it would be cheaper just to hire casual and part-time staff.",
        "question":  "Outline three obligations owed to Joe Pesciona by his employees.",
        "criteria":  [
                         {
                             "marks":  3,
                             "descriptor":  "Outlines three obligations owed to Joe Pesciona by his employees, related to the business"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Outlines only two obligations and/or does not refer to the business"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Outlines only one obligation"
                         }
                     ],
        "keyPoints":  "Obey lawful and reasonable commands; use care and skill in carrying out duties; act in good faith",
        "sampleAnswer": "Joe\u0027s employees must obey his lawful and reasonable commands about how work in the restaurant is carried out. They must also use reasonable care and skill when performing their duties, such as preparing food safely. Finally, employees owe Joe a duty to act in good faith, meaning they must act honestly and in the business\u0027s best interests, for example by not damaging its reputation or competing against it."
    },
    {
        "id":  "bs-3-sydboys14-5",
        "criteriaSource": "official",
        "marks":  3,
        "topic":  "Human Resources",
        "source":  "Sydney Boys 2014 Trial HSC (Q24d)",
        "stimulus":  "Joe Pesciona owns and manages a popular suburban pizza and pasta restaurant. For years the business has been doing well, but in recent months due to harder economic times and competition, business profits have declined, staff hours have been cut, morale is low, absenteeism is high and staff turnover has greatly increased. Joe Pesciona has decided to sack all his female employees and replace them with inexperienced, untrained juniors and pay them $5 per hour.",
        "question":  "Which legislative policies have been breached and why?",
        "criteria":  [
                         {
                             "marks":  3,
                             "descriptor":  "Covers all specific legislation relevant to the scenario and outlines the breach committed and why"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Refers generally to the legislation and may not cover key aspects of the scenario"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "General comments with no specific legislation named"
                         }
                     ],
        "keyPoints":  "Breaches include: national minimum wage (juniors paid only $5/hour, below the legal minimum reviewed by the Fair Work Commission); WHS/OHS legislation (duty of care, lack of training for inexperienced juniors); Sex Discrimination Act 1984 (only female employees being sacked); provisions of the Fair Work Act 2009 (modern awards)",
        "sampleAnswer": "Joe has breached national minimum wage laws by paying junior staff only $5 an hour, well below the legal minimum set by the Fair Work Commission. He has likely breached Work Health and Safety legislation, since untrained juniors working with hot kitchen equipment face greater risk of injury without a proper duty of care. Most seriously, sacking all his female employees breaches the Sex Discrimination Act 1984, as terminating staff on the basis of sex is unlawful regardless of his cost-saving motive."
    },
    {
        "id":  "bs-2-sydtech13-1",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Operations",
        "source":  "Sydney Tech 2013 Trial HSC (Q21a)",
        "stimulus":  null,
        "question":  "Identify TWO performance objectives.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Recognises and names TWO performance objectives"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Recognises and names ONE performance objective"
                         }
                     ],
        "keyPoints":  "Any two of: quality, speed, dependability, flexibility, customisation, cost",
        "sampleAnswer": "Two performance objectives are quality, which is the extent to which a good or service is free of defects and meets customer expectations, and speed, which is the time taken to deliver a good or service to the customer."
    },
    {
        "id":  "bs-4-sydtech13-1",
        "criteriaSource": "derived",
        "marks":  4,
        "topic":  "Operations",
        "source":  "Sydney Tech 2013 Trial HSC (Q21b)",
        "stimulus":  null,
        "question":  "Discuss the benefits of TWO scheduling tools used in manufacturing of goods.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Clearly discusses the benefits of TWO scheduling tools used in manufacturing, providing developed reasons for each"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Discusses the benefit of ONE scheduling tool in some detail and outlines a benefit of a second scheduling tool"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Outlines the benefits of TWO scheduling tools, OR discusses the benefit of ONE scheduling tool in some detail"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Identifies ONE scheduling tool and/or outlines a benefit in general terms"
                         }
                     ],
        "keyPoints":  "Gantt charts - visual bar chart plotting tasks against time, allows managers to track progress and identify delays. Critical Path Analysis/PERT - identifies the sequence of critical, dependent tasks that determine the minimum completion time, allowing resources to be focused on time-critical activities and bottlenecks to be avoided.",
        "sampleAnswer": "A Gantt chart is a bar chart plotting each production task against a timeline, letting managers see at a glance which tasks are on schedule and reallocate resources before delays affect the whole run. Critical Path Analysis (CPA) maps the sequence of dependent tasks that determines the shortest possible completion time, allowing managers to focus resources on the tasks that most affect overall completion and avoid bottlenecks. Both tools help managers plan realistic deadlines and respond quickly when production falls behind."
    },
    {
        "id":  "bs-4-sydtech13-2",
        "criteriaSource": "official",
        "marks":  4,
        "topic":  "Operations",
        "source":  "Sydney Tech 2013 Trial HSC (Q21c)",
        "stimulus":  null,
        "question":  "Explain TWO ways in which a business could differentiate their service.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Explains (why and/or how) TWO ways in which a business could differentiate their service, using examples to support the answer"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Explains TWO ways in which a business could differentiate their service, using one example to support the answer"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Recognises and names TWO ways in which a business could differentiate their service and may refer to a business"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Recognises and names ONE way in which a business could differentiate their service"
                         }
                     ],
        "keyPoints":  "Varying the amount of time spent on a service; varying the level of expertise brought to a service (e.g. BMW-qualified mechanics for BMW cars); varying the qualifications/experience of the provider; varying the technology used in service delivery",
        "sampleAnswer": "A business can differentiate its service by varying the expertise it offers - for example, a BMW dealership employs mechanics trained specifically on BMW vehicles, giving customers confidence their car is serviced to the manufacturer\u0027s standard. A business can also differentiate through the technology used in delivery - for example, a bank offering a mobile app for transfers and video consultations provides greater convenience than branch-only competitors. Both strategies create a point of difference that can attract and retain customers."
    },
    {
        "id":  "bs-2-sydtech13-2",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Marketing",
        "source":  "Sydney Tech 2013 Trial HSC (Q22a)",
        "stimulus":  null,
        "question":  "What are the benefits of packaging?",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Defines packaging and gives more than one benefit"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Defines packaging and gives only one benefit"
                         }
                     ],
        "keyPoints":  "Protects/preserves products; attracts consumers (visual presentation); also accepted - communication/image/positive impression/informs/separates from other brands/transport/storage",
        "sampleAnswer": "Packaging is the container or wrapping in which a product is presented and sold. One benefit is that it protects and preserves the product during transport and storage, and another is that its visual design attracts consumers, communicating information that helps them choose it over competing products."
    },
    {
        "id":  "bs-4-sydtech13-3",
        "criteriaSource": "official",
        "marks":  4,
        "topic":  "Marketing",
        "source":  "Sydney Tech 2013 Trial HSC (Q22b)",
        "stimulus":  null,
        "question":  "Discuss the benefits of branding for the consumers and business.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Provides TWO points for and/or against branding for consumers AND business"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Provides ONE point for and/or against branding for consumers and business, and provides characteristics and features of another"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Provides TWO characteristics and features of branding"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Provides ONE characteristic and feature of branding"
                         }
                     ],
        "keyPoints":  "Consumers - brand name recognition, helps judge quality/price/value, sense of security and confidence, e.g. Apple. Business - gains repeat sales as consumers recognise products, easier to introduce new products as consumers are already familiar with the brand, high appeal to customers, adds value, sets product apart from competition",
        "sampleAnswer": "Branding benefits consumers because a recognisable brand, such as Apple, helps them quickly identify products they trust and gives them confidence in quality, especially when they cannot judge features themselves. Branding benefits businesses by building customer loyalty, encouraging repeat sales as consumers recognise and trust existing products. It also makes launching new products easier, since customers are already familiar with and confident in the brand, reducing the marketing effort needed to build trust in a new offering."
    },
    {
        "id":  "bs-4-sydtech13-4",
        "criteriaSource": "official",
        "marks":  4,
        "topic":  "Marketing",
        "source":  "Sydney Tech 2013 Trial HSC (Q22c)",
        "stimulus":  null,
        "question":  "Distinguish the difference between market-based and cost-based pricing methods. Provide examples.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Notes differences between market-based and cost-based pricing methods and provides examples"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Notes differences between market-based and cost-based pricing methods"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Provides characteristics and features of market-based AND cost-based pricing methods"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Provides characteristics and features of market-based OR cost-based pricing methods"
                         }
                     ],
        "keyPoints":  "Market-based pricing sets price according to supply and demand/what the market will pay (e.g. fruit and vegetable auctions, eBay) - versatile and customer-oriented but hard to apply as demand constantly changes. Cost-based (mark-up) pricing adds a mark-up to the cost of producing/importing a product to cover running expenses (e.g. electrical appliance retailers) - simple and guarantees a profit margin but doesn\u0027t consider what the market will pay",
        "sampleAnswer": "Market-based pricing sets a price according to supply and demand - what the market is prepared to pay - as seen in fruit and vegetable auctions or online marketplaces like eBay; it is customer-responsive but hard to apply consistently as demand constantly changes. Cost-based (mark-up) pricing instead adds a set mark-up to the cost of producing or importing a good, such as an electrical retailer pricing a television at cost plus 40%; it is simple and guarantees a profit margin but ignores what customers are actually willing to pay."
    },
    {
        "id":  "bs-2-sydtech13-3",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Human Resources",
        "source":  "Sydney Tech 2013 Trial HSC (Q23a)",
        "stimulus":  null,
        "question":  "Outline the role of employer associations. Give an example of one.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Outlines in general terms the main features of an employer association, with an example"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Outlines in general terms the main features of an employer association, with no example"
                         }
                     ],
        "keyPoints":  "Employer associations represent and assist employers, e.g. providing advice on industrial relations and negotiating on behalf of members; example: Australian Industry Group, Business Council of Australia, Australian Medical Association",
        "sampleAnswer": "Employer associations represent and assist employers by providing advice on industrial relations and workplace law and negotiating with unions and government on behalf of their members. An example is the Australian Industry Group (Ai Group), which represents businesses in manufacturing and construction."
    },
    {
        "id":  "bs-4-sydtech13-5",
        "criteriaSource": "official",
        "marks":  4,
        "topic":  "Human Resources",
        "source":  "Sydney Tech 2013 Trial HSC (Q23b)",
        "stimulus":  null,
        "question":  "Describe ONE advantage and ONE disadvantage of global outsourcing of human resources.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Describes ONE advantage and ONE disadvantage of global outsourcing of human resources"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Describes ONE advantage and/or outlines ONE disadvantage of global outsourcing of human resources"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Outlines ONE advantage and ONE disadvantage of global outsourcing of human resources"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Outlines ONE advantage or ONE disadvantage of global outsourcing of human resources"
                         }
                     ],
        "keyPoints":  "Advantages: saves costs, expands capacity and flexibility, saves capital, allows business to focus on core function. Disadvantages: quality may decline, cost may increase due to exchange rate movements, may raise ethical issues around labour conditions",
        "sampleAnswer": "Global outsourcing of human resources is the practice of contracting HR functions to an external provider overseas. One advantage is that it saves costs, since labour in some countries is cheaper, and lets the business focus its own resources on core functions rather than tasks like payroll. One disadvantage is that quality may decline if the overseas provider does not meet the same standards, and ethical issues can arise if workers are employed under poor conditions or low wages, damaging the business\u0027s reputation."
    },
    {
        "id":  "bs-4-sydtech13-6",
        "criteriaSource": "derived",
        "marks":  4,
        "topic":  "Human Resources",
        "source":  "Sydney Tech 2013 Trial HSC (Q23c)",
        "stimulus":  null,
        "question":  "Describe TWO obligations of employees in the workplace.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Describes TWO obligations of employees in the workplace, providing characteristics and features of each"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Describes ONE obligation of employees in detail and outlines a second obligation"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Outlines TWO obligations of employees in the workplace"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Outlines ONE obligation of employees in the workplace"
                         }
                     ],
        "keyPoints":  "Obey lawful and reasonable commands; use care and skill in the performance of their activities; act in good faith and in the interest of the employer",
        "sampleAnswer": "One obligation is to obey the lawful and reasonable commands of the employer, such as following reasonable instructions about how and when tasks are completed, provided these do not breach safety or other laws. A second obligation is to use care and skill in performing duties, meaning employees must work competently and take reasonable care to avoid causing loss or damage to the business, its customers, or other staff."
    },
    {
        "id":  "bs-1-sydtech13-1",
        "criteriaSource": "official",
        "marks":  1,
        "topic":  "Finance",
        "source":  "Sydney Tech 2013 Trial HSC (Q24ai)",
        "stimulus":  {
                         "blocks":  [
                                        {
                                            "type":  "text",
                                            "text":  "Helen\u0027s Healthy Lunches\nPeriod ending 30 June 2013"
                                        },
                                        {
                                            "type":  "table",
                                            "title":  "Income Statement",
                                            "columns":  [
                                                            "",
                                                            "$",
                                                            "$",
                                                            "$"
                                                        ],
                                            "rows":  [
                                                         [
                                                             "Sales revenue",
                                                             "",
                                                             "",
                                                             "75 000"
                                                         ],
                                                         [
                                                             "less Cost of goods sold",
                                                             "",
                                                             "",
                                                             "45 000"
                                                         ],
                                                         [
                                                             "Gross profit",
                                                             "",
                                                             "",
                                                             "30 000"
                                                         ],
                                                         [
                                                             "Less Financial expenses",
                                                             "",
                                                             "",
                                                             ""
                                                         ],
                                                         [
                                                             "Interest",
                                                             "1500",
                                                             "1500",
                                                             ""
                                                         ],
                                                         [
                                                             "Less Selling expenses",
                                                             "",
                                                             "",
                                                             ""
                                                         ],
                                                         [
                                                             "Advertising",
                                                             "2000",
                                                             "2000",
                                                             ""
                                                         ],
                                                         [
                                                             "Less Administrative expenses",
                                                             "",
                                                             "",
                                                             ""
                                                         ],
                                                         [
                                                             "Wages",
                                                             "9000",
                                                             "",
                                                             ""
                                                         ],
                                                         [
                                                             "Rent",
                                                             "8000",
                                                             "",
                                                             ""
                                                         ],
                                                         [
                                                             "Insurance",
                                                             "2500",
                                                             "",
                                                             ""
                                                         ],
                                                         [
                                                             "Electricity",
                                                             "2500",
                                                             "22 000",
                                                             ""
                                                         ]
                                                     ]
                                        },
                                        {
                                            "type":  "text",
                                            "text":  "Additional information:\nHelen invested $25 000 in Helen\u0027s Healthy Lunches.\nGross profit ratio for year ending 30th June 2012 was 63%."
                                        }
                                    ]
                     },
        "question":  "Identify the name given to this type of financial statement.",
        "criteria":  [
                         {
                             "marks":  1,
                             "descriptor":  "States the correct name of the financial statement"
                         }
                     ],
        "keyPoints":  "Revenue Statement / Profit and Loss Statement / Income Statement",
        "sampleAnswer": "This is an Income Statement, also known as a Profit and Loss Statement or Revenue Statement."
    },
    {
        "id":  "bs-1-sydtech13-2",
        "criteriaSource": "official",
        "marks":  1,
        "topic":  "Finance",
        "source":  "Sydney Tech 2013 Trial HSC (Q24aii)",
        "stimulus":  {
                         "blocks":  [
                                        {
                                            "type":  "text",
                                            "text":  "Helen\u0027s Healthy Lunches\nPeriod ending 30 June 2013"
                                        },
                                        {
                                            "type":  "table",
                                            "title":  "Income Statement",
                                            "columns":  [
                                                            "",
                                                            "$",
                                                            "$",
                                                            "$"
                                                        ],
                                            "rows":  [
                                                         [
                                                             "Sales revenue",
                                                             "",
                                                             "",
                                                             "75 000"
                                                         ],
                                                         [
                                                             "less Cost of goods sold",
                                                             "",
                                                             "",
                                                             "45 000"
                                                         ],
                                                         [
                                                             "Gross profit",
                                                             "",
                                                             "",
                                                             "30 000"
                                                         ],
                                                         [
                                                             "Less Financial expenses",
                                                             "",
                                                             "",
                                                             ""
                                                         ],
                                                         [
                                                             "Interest",
                                                             "1500",
                                                             "1500",
                                                             ""
                                                         ],
                                                         [
                                                             "Less Selling expenses",
                                                             "",
                                                             "",
                                                             ""
                                                         ],
                                                         [
                                                             "Advertising",
                                                             "2000",
                                                             "2000",
                                                             ""
                                                         ],
                                                         [
                                                             "Less Administrative expenses",
                                                             "",
                                                             "",
                                                             ""
                                                         ],
                                                         [
                                                             "Wages",
                                                             "9000",
                                                             "",
                                                             ""
                                                         ],
                                                         [
                                                             "Rent",
                                                             "8000",
                                                             "",
                                                             ""
                                                         ],
                                                         [
                                                             "Insurance",
                                                             "2500",
                                                             "",
                                                             ""
                                                         ],
                                                         [
                                                             "Electricity",
                                                             "2500",
                                                             "22 000",
                                                             ""
                                                         ]
                                                     ]
                                        },
                                        {
                                            "type":  "text",
                                            "text":  "Additional information:\nHelen invested $25 000 in Helen\u0027s Healthy Lunches.\nGross profit ratio for year ending 30th June 2012 was 63%."
                                        }
                                    ]
                     },
        "question":  "Identify one other financial statement that could be used by this business.",
        "criteria":  [
                         {
                             "marks":  1,
                             "descriptor":  "States the correct name of another financial statement that could be used by this business"
                         }
                     ],
        "keyPoints":  "Cash flow statement, or balance sheet",
        "sampleAnswer": "Another financial statement Helen could use is a Balance Sheet, which shows the business\u0027s assets, liabilities and owner\u0027s equity at a point in time."
    },
    {
        "id":  "bs-2-sydtech13-4",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Finance",
        "source":  "Sydney Tech 2013 Trial HSC (Q24b)",
        "stimulus":  {
                         "blocks":  [
                                        {
                                            "type":  "text",
                                            "text":  "Helen\u0027s Healthy Lunches\nPeriod ending 30 June 2013"
                                        },
                                        {
                                            "type":  "table",
                                            "title":  "Income Statement",
                                            "columns":  [
                                                            "",
                                                            "$",
                                                            "$",
                                                            "$"
                                                        ],
                                            "rows":  [
                                                         [
                                                             "Sales revenue",
                                                             "",
                                                             "",
                                                             "75 000"
                                                         ],
                                                         [
                                                             "less Cost of goods sold",
                                                             "",
                                                             "",
                                                             "45 000"
                                                         ],
                                                         [
                                                             "Gross profit",
                                                             "",
                                                             "",
                                                             "30 000"
                                                         ],
                                                         [
                                                             "Less Financial expenses",
                                                             "",
                                                             "",
                                                             ""
                                                         ],
                                                         [
                                                             "Interest",
                                                             "1500",
                                                             "1500",
                                                             ""
                                                         ],
                                                         [
                                                             "Less Selling expenses",
                                                             "",
                                                             "",
                                                             ""
                                                         ],
                                                         [
                                                             "Advertising",
                                                             "2000",
                                                             "2000",
                                                             ""
                                                         ],
                                                         [
                                                             "Less Administrative expenses",
                                                             "",
                                                             "",
                                                             ""
                                                         ],
                                                         [
                                                             "Wages",
                                                             "9000",
                                                             "",
                                                             ""
                                                         ],
                                                         [
                                                             "Rent",
                                                             "8000",
                                                             "",
                                                             ""
                                                         ],
                                                         [
                                                             "Insurance",
                                                             "2500",
                                                             "",
                                                             ""
                                                         ],
                                                         [
                                                             "Electricity",
                                                             "2500",
                                                             "22 000",
                                                             ""
                                                         ]
                                                     ]
                                        },
                                        {
                                            "type":  "text",
                                            "text":  "Additional information:\nHelen invested $25 000 in Helen\u0027s Healthy Lunches.\nGross profit ratio for year ending 30th June 2012 was 63%."
                                        }
                                    ]
                     },
        "question":  "Calculate the gross profit ratio (gross profit ÷ sales) for Helen\u0027s Healthy Lunches. Show all working.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Shows correct working and answer for gross profit ratio"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Shows correct working but incorrect final calculation, OR provides correct answer only"
                         }
                     ],
        "keyPoints":  "Gross profit ratio = gross profit ÷ sales × 100 = $30 000 ÷ $75 000 × 100 = 40%",
        "sampleAnswer": "Gross profit ratio = (Gross profit ÷ Sales) × 100 = ($30,000 ÷ $75,000) × 100 = 40%."
    },
    {
        "id":  "bs-2-sydtech13-5",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Finance",
        "source":  "Sydney Tech 2013 Trial HSC (Q24c)",
        "stimulus":  {
                         "blocks":  [
                                        {
                                            "type":  "text",
                                            "text":  "Helen\u0027s Healthy Lunches\nPeriod ending 30 June 2013"
                                        },
                                        {
                                            "type":  "table",
                                            "title":  "Income Statement",
                                            "columns":  [
                                                            "",
                                                            "$",
                                                            "$",
                                                            "$"
                                                        ],
                                            "rows":  [
                                                         [
                                                             "Sales revenue",
                                                             "",
                                                             "",
                                                             "75 000"
                                                         ],
                                                         [
                                                             "less Cost of goods sold",
                                                             "",
                                                             "",
                                                             "45 000"
                                                         ],
                                                         [
                                                             "Gross profit",
                                                             "",
                                                             "",
                                                             "30 000"
                                                         ],
                                                         [
                                                             "Less Financial expenses",
                                                             "",
                                                             "",
                                                             ""
                                                         ],
                                                         [
                                                             "Interest",
                                                             "1500",
                                                             "1500",
                                                             ""
                                                         ],
                                                         [
                                                             "Less Selling expenses",
                                                             "",
                                                             "",
                                                             ""
                                                         ],
                                                         [
                                                             "Advertising",
                                                             "2000",
                                                             "2000",
                                                             ""
                                                         ],
                                                         [
                                                             "Less Administrative expenses",
                                                             "",
                                                             "",
                                                             ""
                                                         ],
                                                         [
                                                             "Wages",
                                                             "9000",
                                                             "",
                                                             ""
                                                         ],
                                                         [
                                                             "Rent",
                                                             "8000",
                                                             "",
                                                             ""
                                                         ],
                                                         [
                                                             "Insurance",
                                                             "2500",
                                                             "",
                                                             ""
                                                         ],
                                                         [
                                                             "Electricity",
                                                             "2500",
                                                             "22 000",
                                                             ""
                                                         ]
                                                     ]
                                        },
                                        {
                                            "type":  "text",
                                            "text":  "Additional information:\nHelen invested $25 000 in Helen\u0027s Healthy Lunches.\nGross profit ratio for year ending 30th June 2012 was 63%."
                                        }
                                    ]
                     },
        "question":  "Calculate the return on equity ratio (net profit / total equity) for Helen\u0027s Healthy Lunches. Show all working.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Shows correct working and answer for return on equity"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Shows correct working but incorrect final calculation, OR provides correct answer only"
                         }
                     ],
        "keyPoints":  "Net profit = Gross profit − total expenses = $30 000 − $25 500 (Interest $1500 + Advertising $2000 + Administrative $22 000) = $4 500. Return on equity = Net profit ÷ Total equity ($25 000 Helen\u0027s investment) = 0.18, or 18%",
        "sampleAnswer": "Net profit = Gross profit − total expenses = $30,000 − ($1,500 + $2,000 + $22,000) = $4,500. Return on equity = $4,500 ÷ $25,000 = 0.18, or 18%."
    },
    {
        "id":  "bs-4-sydtech13-7",
        "criteriaSource": "official",
        "marks":  4,
        "topic":  "Finance",
        "source":  "Sydney Tech 2013 Trial HSC (Q24d)",
        "stimulus":  {
                         "blocks":  [
                                        {
                                            "type":  "text",
                                            "text":  "Helen\u0027s Healthy Lunches\nPeriod ending 30 June 2013"
                                        },
                                        {
                                            "type":  "table",
                                            "title":  "Income Statement",
                                            "columns":  [
                                                            "",
                                                            "$",
                                                            "$",
                                                            "$"
                                                        ],
                                            "rows":  [
                                                         [
                                                             "Sales revenue",
                                                             "",
                                                             "",
                                                             "75 000"
                                                         ],
                                                         [
                                                             "less Cost of goods sold",
                                                             "",
                                                             "",
                                                             "45 000"
                                                         ],
                                                         [
                                                             "Gross profit",
                                                             "",
                                                             "",
                                                             "30 000"
                                                         ],
                                                         [
                                                             "Less Financial expenses",
                                                             "",
                                                             "",
                                                             ""
                                                         ],
                                                         [
                                                             "Interest",
                                                             "1500",
                                                             "1500",
                                                             ""
                                                         ],
                                                         [
                                                             "Less Selling expenses",
                                                             "",
                                                             "",
                                                             ""
                                                         ],
                                                         [
                                                             "Advertising",
                                                             "2000",
                                                             "2000",
                                                             ""
                                                         ],
                                                         [
                                                             "Less Administrative expenses",
                                                             "",
                                                             "",
                                                             ""
                                                         ],
                                                         [
                                                             "Wages",
                                                             "9000",
                                                             "",
                                                             ""
                                                         ],
                                                         [
                                                             "Rent",
                                                             "8000",
                                                             "",
                                                             ""
                                                         ],
                                                         [
                                                             "Insurance",
                                                             "2500",
                                                             "",
                                                             ""
                                                         ],
                                                         [
                                                             "Electricity",
                                                             "2500",
                                                             "22 000",
                                                             ""
                                                         ]
                                                     ]
                                        },
                                        {
                                            "type":  "text",
                                            "text":  "Additional information:\nHelen invested $25 000 in Helen\u0027s Healthy Lunches.\nGross profit ratio for year ending 30th June 2012 was 63%."
                                        }
                                    ]
                     },
        "question":  "Recommend TWO strategies that Helen could use to improve profitability.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Provides clear reasons in favour of TWO suitable strategies that could be used by the business to improve profitability"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Provides reasons in favour of ONE suitable strategy and outlines a second strategy in some detail"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Provides reasons in favour of ONE suitable strategy and sketches another in general terms, OR sketches two strategies in general terms"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Sketches in general terms ONE strategy that could be used by the business to improve profitability"
                         }
                     ],
        "keyPoints":  "Cost controls - fixed and variable costs, cost centres, expense minimisation. Revenue controls - marketing objectives to increase sales revenue",
        "sampleAnswer": "Helen could use cost controls, separating fixed costs like rent and insurance from variable costs like ingredients, then applying expense minimisation - for example negotiating a cheaper electricity provider - to reduce her relatively high $22,000 administrative expenses and directly increase net profit. She could also use revenue controls, setting a marketing objective to increase sales revenue, such as introducing a loyalty program, which is important given her gross profit ratio fell from 63% in 2012 to 40% in 2013."
    },
    {
        "id":  "bs-4-knox18-1",
        "criteriaSource": "official",
        "marks":  4,
        "topic":  "Human Resources",
        "source":  "Knox 2018 Trial HSC (Q21a)",
        "stimulus":  null,
        "question":  "Explain how the social influence can impact human resource management.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Comprehensively relates cause and effect of how the social influence can impact human resource management, using specific examples"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Relates cause and effect of how the social influence can impact human resource management"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Sketches in general terms how a social influence can impact HRM"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Provides limited information relevant to HRM and social influence"
                         }
                     ],
        "keyPoints":  "Discussion of a specific social influence (e.g. changing work patterns/casual \u0026 part-time employment, increased female workforce participation, Gen Y entering the workforce, ageing workforce) and the specific HRM strategies/processes (acquisition, T\u0026D, maintenance) it drives, explained with cause and effect.",
        "sampleAnswer": "One social influence on HRM is the ageing population, as more workers remain healthy and willing to work past traditional retirement age. This affects HRM because businesses must adapt acquisition and maintenance strategies to retain valued older workers, for example by offering flexible hours, part-time arrangements and retraining opportunities rather than making them redundant. If HRM fails to respond, businesses risk losing experienced staff and their accumulated skills, increasing acquisition costs as new staff must be recruited and trained to replace them."
    },
    {
        "id":  "bs-6-knox18-1",
        "criteriaSource": "derived",
        "marks":  6,
        "topic":  "Human Resources",
        "source":  "Knox 2018 Trial HSC (Q21b)",
        "stimulus":  null,
        "question":  "Using a case study, analyse the cause of one workplace dispute and the strategies used to resolve this dispute.",
        "criteria":  [
                         {
                             "marks":  6,
                             "descriptor":  "Comprehensively analyses (draws out and relates implications of) the cause of one workplace dispute and the strategies used to resolve it, integrating detailed and accurate case study evidence throughout"
                         },
                         {
                             "marks":  5,
                             "descriptor":  "Thoroughly analyses the cause of one workplace dispute and the strategies used to resolve it, with effective case study application"
                         },
                         {
                             "marks":  4,
                             "descriptor":  "Analyses the cause of one workplace dispute and the strategies used to resolve it, with case study application"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Relates cause and effect of the cause of one workplace dispute and one strategy used to resolve it, with some case study application"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Sketches in general terms the strategy/strategies used to resolve workplace disputes, with little or no case study application"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Provides limited information relevant to workplace disputes"
                         }
                     ],
        "keyPoints":  "Named case study (e.g. Qantas 2011 disputes with pilots/engineers over pay, job security and outsourcing); explanation of the cause(s) of the dispute; description of dispute resolution strategies used (negotiation, mediation, involvement of Fair Work Australia/tribunals - conciliation/arbitration) and the outcome/resolution.",
        "sampleAnswer": "In 2011, Qantas faced a major dispute with its pilots (AIPA) and engineers (ALAEA), caused by management\u0027s plans to outsource maintenance and flying work overseas, threatening around 2,800 jobs, alongside disputes over pay and job security. To resolve it, Qantas and the unions first used negotiation, direct discussion aimed at compromise, but this dragged on for over a year without success. Mediation, a discussion facilitated by a neutral third party, was then attempted before CEO Alan Joyce grounded the entire fleet and locked out staff in response to threatened strike action. This escalated the dispute to Fair Work Australia, which used conciliation and ultimately arbitration to reach a binding outcome. Engineers received a 3% pay rise while Qantas retained the right to send some maintenance offshore, and pilots were awarded staged pay rises. This shows how negotiation, mediation and third-party intervention can combine to resolve serious workplace disputes."
    },
    {
        "id":  "bs-4-knox18-2",
        "criteriaSource": "derived",
        "marks":  4,
        "topic":  "Operations",
        "source":  "Knox 2018 Trial HSC (Q22a)",
        "stimulus":  "Pro Industries is a leading global manufacturer of skateboards.",
        "question":  "Examine TWO global factors that Pro Industries must consider in order to achieve a sustainable long-term competitive advantage.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Comprehensively examines TWO global factors that Pro Industries must consider in order to achieve a sustainable competitive advantage"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Examines TWO global factors that Pro Industries must consider, or examines ONE global factor in detail"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Sketches in general terms ONE or TWO global factors that Pro Industries must consider"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Provides limited information on a global factor"
                         }
                     ],
        "keyPoints":  "Two global operations factors such as global sourcing, economies of scale, scanning and learning, or research and development, each linked to how it helps Pro Industries build a sustainable competitive advantage (cost leadership, differentiation, quality, innovation).",
        "sampleAnswer": "Research and development is a global factor Pro Industries (PI) must consider, as investing in new technology such as 3D printing for wheel design can improve quality and differentiate PI as an innovative brand. Economies of scale is a second factor, referring to cost savings gained from increasing production scale, such as buying bearings in bulk from global suppliers. By spreading fixed costs over greater output, PI can lower unit costs and pursue a cost leadership strategy, helping it sustain a long-term competitive advantage in the global skateboard market."
    },
    {
        "id":  "bs-6-knox18-2",
        "criteriaSource": "derived",
        "marks":  6,
        "topic":  "Operations",
        "source":  "Knox 2018 Trial HSC (Q22b)",
        "stimulus":  "Pro Industries is a leading global manufacturer of skateboards.",
        "question":  "Analyse why corporate social responsibility is a key concern in operations management.",
        "criteria":  [
                         {
                             "marks":  6,
                             "descriptor":  "Comprehensively analyses why and how corporate social responsibility is a key concern in operations management, with explicit and detailed application to the stimulus"
                         },
                         {
                             "marks":  5,
                             "descriptor":  "Thoroughly analyses why corporate social responsibility is a key concern in operations management, with detailed application to the stimulus"
                         },
                         {
                             "marks":  4,
                             "descriptor":  "Analyses why corporate social responsibility is a key concern in operations management, with some application to the stimulus"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Provides characteristics and features of corporate social responsibility in relation to operations management, with some application to the stimulus"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Indicates the main features of corporate social responsibility"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Provides limited information on corporate social responsibility"
                         }
                     ],
        "keyPoints":  "Definition of CSR (exceeding legal obligations, ethical, community/environment focused); examples in operations - responsible sourcing of inputs, avoiding overseas outsourcing; positive implications (reputation, revenue) vs negative implications (higher costs); conclusion linking back to why it\u0027s a \u0027key concern\u0027.",
        "sampleAnswer": "Corporate social responsibility (CSR) refers to open, ethical business conduct that goes beyond legal obligations to respect the community and environment. CSR is a key concern in operations management because the transformation process directly determines how ethically a business\u0027s inputs are sourced and outputs produced. Pro Industries (PI) can demonstrate CSR by responsibly sourcing inputs, such as timber from certified, renewable forests for its skateboard decks, and by avoiding overseas outsourcing where labour standards may be lower. If PI embeds CSR into its operations, this is likely to strengthen its brand reputation among increasingly ethically-conscious consumers, translating into greater revenue over time. However, CSR initiatives such as sourcing certified inputs can raise short-term production costs, which managers must weigh against long-term reputational benefits. Because operational decisions have direct social and environmental consequences, CSR must be a central, ongoing concern of operations management rather than an afterthought."
    },
    {
        "id":  "bs-2-knox18-1",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Finance",
        "source":  "Knox 2018 Trial HSC (Q23a)",
        "stimulus":  {
                         "blocks":  [
                                        {
                                            "type":  "text",
                                            "text":  "Bettle Pty Ltd is an ice-cream manufacturer who sells their products to leading supermarkets in Australia.\n\nIncome Statement Extract for Bettle Pty Ltd year ended 30 June 2018"
                                        },
                                        {
                                            "type":  "table",
                                            "title":  "Income Statement Extract",
                                            "columns":  [
                                                            "",
                                                            "$"
                                                        ],
                                            "rows":  [
                                                         [
                                                             "Sales",
                                                             "100,000"
                                                         ],
                                                         [
                                                             "Cost of Goods Sold",
                                                             "40,000"
                                                         ],
                                                         [
                                                             "Gross Profit",
                                                             "60,000"
                                                         ],
                                                         [
                                                             "Wages",
                                                             "20,000"
                                                         ],
                                                         [
                                                             "Rent",
                                                             "10,000"
                                                         ],
                                                         [
                                                             "Advertising",
                                                             "8,000"
                                                         ],
                                                         [
                                                             "Research \u0026 Development",
                                                             "2,000"
                                                         ],
                                                         [
                                                             "Net Profit",
                                                             "20,000"
                                                         ]
                                                     ]
                                        },
                                        {
                                            "type":  "text",
                                            "text":  "Additional information:\nAccounts Receivable for 2018 = $12,000\nAccounts Receivable Turnover Industry Average = 35 days"
                                        }
                                    ]
                     },
        "question":  "Calculate and compare the accounts receivable turnover ratio (sales ÷ accounts receivable) for Bettle Pty Ltd.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Correctly calculates the accounts receivable turnover ratio and provides an accurate comparison to the industry average"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Correctly calculates the accounts receivable turnover ratio, or provides some relevant comparative information, but not both"
                         }
                     ],
        "keyPoints":  "A/R turnover = Sales ÷ Accounts Receivable = 100,000 ÷ 12,000 = 8.33 times ≈ 365 ÷ 8.33 = 44 days; compares unfavourably to the 35-day industry average, indicating Bettle is less efficient at collecting receivables.",
        "sampleAnswer": "Accounts Receivable Turnover = Sales ÷ Accounts Receivable = $100,000 ÷ $12,000 = 8.33 times, or 365 ÷ 8.33 ≈ 44 days. This compares unfavourably to the 35-day industry average, showing Bettle is slower than competitors at collecting debts, raising its risk of bad debts."
    },
    {
        "id":  "bs-4-knox18-3",
        "criteriaSource": "official",
        "marks":  4,
        "topic":  "Finance",
        "source":  "Knox 2018 Trial HSC (Q23b)",
        "stimulus":  {
                         "blocks":  [
                                        {
                                            "type":  "text",
                                            "text":  "Bettle Pty Ltd is an ice-cream manufacturer who sells their products to leading supermarkets in Australia.\n\nIncome Statement Extract for Bettle Pty Ltd year ended 30 June 2018"
                                        },
                                        {
                                            "type":  "table",
                                            "title":  "Income Statement Extract",
                                            "columns":  [
                                                            "",
                                                            "$"
                                                        ],
                                            "rows":  [
                                                         [
                                                             "Sales",
                                                             "100,000"
                                                         ],
                                                         [
                                                             "Cost of Goods Sold",
                                                             "40,000"
                                                         ],
                                                         [
                                                             "Gross Profit",
                                                             "60,000"
                                                         ],
                                                         [
                                                             "Wages",
                                                             "20,000"
                                                         ],
                                                         [
                                                             "Rent",
                                                             "10,000"
                                                         ],
                                                         [
                                                             "Advertising",
                                                             "8,000"
                                                         ],
                                                         [
                                                             "Research \u0026 Development",
                                                             "2,000"
                                                         ],
                                                         [
                                                             "Net Profit",
                                                             "20,000"
                                                         ]
                                                     ]
                                        },
                                        {
                                            "type":  "text",
                                            "text":  "Additional information:\nAccounts Receivable for 2018 = $12,000\nAccounts Receivable Turnover Industry Average = 35 days"
                                        }
                                    ]
                     },
        "question":  "Recommend TWO appropriate strategies to improve Bettle Pty Ltd\u0027s accounts receivable turnover ratio.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Provides well-reasoned recommendations in favour of TWO appropriate strategies to improve Bettle Pty Ltd\u0027s accounts receivable turnover ratio"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Provides reasons in favour of ONE appropriate strategy and some relevant information on a second strategy"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Provides reasons in favour of ONE appropriate strategy, or some relevant information on TWO strategies"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Provides some relevant information on at least ONE appropriate strategy"
                         }
                     ],
        "keyPoints":  "Strategies: factoring (sell receivables for immediate cash, ~80-90% upfront, no longer responsible for collection) and discounts for early payment (incentivises faster payment, builds customer goodwill); could also mention stricter credit policies.",
        "sampleAnswer": "Bettle could use factoring, selling its $12,000 of accounts receivable to a factoring company for around 80-90% of their value within 48 hours, immediately improving cash flow and removing the cost of chasing debts. Bettle could also offer discounts for early payment, giving supermarket customers a financial incentive to pay sooner. Together these strategies would speed up cash collection and help bring Bettle\u0027s turnover closer to the 35-day industry benchmark."
    },
    {
        "id":  "bs-4-knox18-4",
        "criteriaSource": "derived",
        "marks":  4,
        "topic":  "Finance",
        "source":  "Knox 2018 Trial HSC (Q23c)",
        "stimulus":  {
                         "blocks":  [
                                        {
                                            "type":  "text",
                                            "text":  "Bettle Pty Ltd is an ice-cream manufacturer who sells their products to leading supermarkets in Australia.\n\nIncome Statement Extract for Bettle Pty Ltd year ended 30 June 2018"
                                        },
                                        {
                                            "type":  "table",
                                            "title":  "Income Statement Extract",
                                            "columns":  [
                                                            "",
                                                            "$"
                                                        ],
                                            "rows":  [
                                                         [
                                                             "Sales",
                                                             "100,000"
                                                         ],
                                                         [
                                                             "Cost of Goods Sold",
                                                             "40,000"
                                                         ],
                                                         [
                                                             "Gross Profit",
                                                             "60,000"
                                                         ],
                                                         [
                                                             "Wages",
                                                             "20,000"
                                                         ],
                                                         [
                                                             "Rent",
                                                             "10,000"
                                                         ],
                                                         [
                                                             "Advertising",
                                                             "8,000"
                                                         ],
                                                         [
                                                             "Research \u0026 Development",
                                                             "2,000"
                                                         ],
                                                         [
                                                             "Net Profit",
                                                             "20,000"
                                                         ]
                                                     ]
                                        },
                                        {
                                            "type":  "text",
                                            "text":  "Additional information:\nAccounts Receivable for 2018 = $12,000\nAccounts Receivable Turnover Industry Average = 35 days"
                                        }
                                    ]
                     },
        "question":  "Explain how timing issues and capitalising expenses are considered a limitation to financial reports.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Relates cause and effect of how BOTH timing issues and capitalising expenses are considered a limitation to financial reports, with clear reference to the stimulus"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Relates cause and/or effect of how timing issues AND/OR capitalising expenses are considered a limitation to financial reports, with some reference to the stimulus"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Relates cause and/or effect of how timing issues OR capitalising expenses are considered a limitation to financial reports"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Provides some relevant information on how timing issues and/or capitalising expenses are a limitation to financial reports"
                         }
                     ],
        "keyPoints":  "Timing issues: ice-cream sales are seasonal (higher in summer, lower in winter), so a single financial year\u0027s report may not reflect true performance. Capitalising expenses: putting an expense (e.g. R\u0026D) onto the balance sheet as an asset instead of the income statement inflates the current year\u0027s profit and misleads stakeholders; Bettle has NOT capitalised its R\u0026D expense (it remains on the income statement), showing ethical reporting.",
        "sampleAnswer": "Timing issues are a limitation for Bettle because, as an ice-cream manufacturer, its sales likely fluctuate seasonally between summer and winter, so a single year\u0027s report may not reflect its true ongoing performance. Capitalising expenses occurs when a cost, such as the $2,000 spent on Research and Development, is recorded as an asset rather than an expense, which artificially inflates reported profit. Bettle has correctly left its R\u0026D cost on the income statement as an expense, showing it has not capitalised this cost to mislead stakeholders about its true profit."
    },
    {
        "id":  "bs-4-knox18-5",
        "criteriaSource": "official",
        "marks":  4,
        "topic":  "Marketing",
        "source":  "Knox 2018 Trial HSC (Q24a)",
        "stimulus":  "\u0027Fair Dinkum Burgers\u0027 is a successful fast food restaurant chain with locations across Australia. They are considering an expansion to the US.",
        "question":  "Explain the importance of people and processes when developing the marketing plan for the US.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Details the strategies of people and processes and their impact at Fair Dinkum Burgers"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Provides characteristics and features of the strategies of people and processes at Fair Dinkum Burgers"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Details the strategy of people OR processes and its impact at Fair Dinkum Burgers, or provides some information on both"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Provides limited information on people or processes"
                         }
                     ],
        "keyPoints":  "People: quality of staff/customer interaction builds loyalty, repeat sales and word of mouth; need well-trained, knowledgeable US staff. Processes: systems for delivering the service efficiently, e.g. automated/customised ordering, fast kitchen scheduling, linking with operations for quick turnaround, important for the fast-food customer experience.",
        "sampleAnswer": "People refers to the interaction between Fair Dinkum Burgers\u0027 (FDB) staff and customers; well-trained US staff who take orders efficiently and handle complaints professionally build customer loyalty and positive word of mouth, increasing sales in the new market. Processes refers to the systems that deliver the service, such as an automated, customised ordering platform that ensures orders are prepared quickly and accurately - critical in fast food, where a quick turnaround shapes the customer experience. Together, strong people and processes help FDB meet customer expectations as it expands into the US."
    },
    {
        "id":  "bs-6-knox18-3",
        "criteriaSource": "derived",
        "marks":  6,
        "topic":  "Marketing",
        "source":  "Knox 2018 Trial HSC (Q24b)",
        "stimulus":  "\u0027Fair Dinkum Burgers\u0027 is a successful fast food restaurant chain with locations across Australia. They are considering an expansion to the US.\n\nThe management team of Fair Dinkum Burgers is deciding whether to use customisation or standardisation as its marketing strategy for the expansion.",
        "question":  "Analyse how marketing and finance would be linked in management\u0027s decision to customise or standardise.",
        "criteria":  [
                         {
                             "marks":  6,
                             "descriptor":  "Clearly and comprehensively draws out and relates the implications of the link between marketing and finance in the decision to customise or standardise, with detailed analysis of both options"
                         },
                         {
                             "marks":  5,
                             "descriptor":  "Clearly draws out and relates the implications of the link between marketing and finance in the decision to customise or standardise"
                         },
                         {
                             "marks":  4,
                             "descriptor":  "Explains the link between marketing and finance in Fair Dinkum Burgers\u0027 decision to customise or standardise"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Explains some link between marketing and finance in relation to customisation or standardisation"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Sketches in general terms information about marketing and finance"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Provides limited information on marketing and/or finance"
                         }
                     ],
        "keyPoints":  "Marketing and finance are interdependent in pursuit of profit maximisation. Customisation better meets US customer needs (higher sales potential, supports growth objective) but is more expensive (loses economies of scale). Standardisation is cheaper but may achieve lower sales. Finance must conduct cost-benefit analysis to decide which option maximises profit; pricing strategy decisions (e.g. penetration/loss leader) also require finance\u0027s input on short vs long term profit trade-offs.",
        "sampleAnswer": "Marketing and finance are interdependent at Fair Dinkum Burgers (FDB) in pursuing profit maximisation. Customisation would tailor FDB\u0027s menu to US tastes, better meeting customer needs and supporting higher sales, but requires additional recipe development, local sourcing and staff training, which raises costs and reduces the economies of scale gained from a standardised menu. Standardisation keeps costs lower by using the same recipes and supply chain as Australia, but risks lower sales if the menu does not appeal to US customers. Finance must conduct a cost-benefit analysis of both options to determine which maximises long-term profit, while marketing must weigh the sales potential of each against what finance can afford to fund. Pricing decisions, such as using penetration pricing to enter the US market, also require finance\u0027s input on trading off lower short-term profit against long-term market share. This shows marketing and finance cannot be decided in isolation."
    },
    {
        "id":  "bs-2-knox19-1",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Human Resources",
        "source":  "Knox 2019 Trial HSC (Q21a)",
        "stimulus":  null,
        "question":  "Distinguish between negotiation and mediation as methods to resolve workplace disputes.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Correctly distinguishes between negotiation and mediation as methods to resolve workplace disputes, using a connective word (e.g. \u0027whereas\u0027) to directly compare the two"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Provides some relevant information on negotiation and/or mediation, without clearly distinguishing between the two"
                         }
                     ],
        "keyPoints":  "Negotiation = formal/informal discussion or bargaining process directly between employer and employee to reach a compromise. Mediation = confidential discussion of issues in a non-threatening environment facilitated by a neutral/objective third party, used to resolve disputes before escalation to more costly resolution methods. Must use a connective (e.g. \u0027whereas\u0027) to earn full marks.",
        "sampleAnswer": "Negotiation is a discussion or bargaining process directly between employer and employee to reach a compromise, whereas mediation is a confidential discussion facilitated by a neutral third party in a non-threatening environment, typically used to resolve disputes before they escalate to more costly resolution methods."
    },
    {
        "id":  "bs-4-knox19-1",
        "criteriaSource": "official",
        "marks":  4,
        "topic":  "Human Resources",
        "source":  "Knox 2019 Trial HSC (Q21b)",
        "stimulus":  {
                         "blocks":  [
                                        {
                                            "type":  "text",
                                            "text":  "Human resource data collected at Flexatron Manufacturing."
                                        },
                                        {
                                            "type":  "table",
                                            "title":  "Flexatron Manufacturing HR data",
                                            "columns":  [
                                                            "Measures",
                                                            "2018",
                                                            "2019"
                                                        ],
                                            "rows":  [
                                                         [
                                                             "Absenteeism",
                                                             "8 days",
                                                             "18 days"
                                                         ],
                                                         [
                                                             "Staff turnover",
                                                             "8%",
                                                             "18%"
                                                         ],
                                                         [
                                                             "Levels of disputation",
                                                             "5%",
                                                             "24%"
                                                         ],
                                                         [
                                                             "Corporate culture",
                                                             "13%",
                                                             "13%"
                                                         ],
                                                         [
                                                             "Training spent per employee",
                                                             "$1500",
                                                             "$200"
                                                         ],
                                                         [
                                                             "Accidents",
                                                             "10%",
                                                             "20%"
                                                         ]
                                                     ]
                                        }
                                    ]
                     },
        "question":  "To what extent is human resource management effective at Flexatron Manufacturing?",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Makes a comprehensive judgement on the effectiveness of HRM at Flexatron Manufacturing, with effective integration of at least two pieces of stimulus data"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Makes some judgement on the effectiveness of HRM at Flexatron Manufacturing, with some integration of stimulus data"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Relates cause and effect of HRM using one example from the stimulus data"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Provides limited information on HRM"
                         }
                     ],
        "keyPoints":  "HRM is largely ineffective: disputes rose sharply (5% to 24%), absenteeism doubled (8 to 18 days), staff turnover more than doubled (8% to 18%), accidents doubled (10% to 20%), and training spend per employee fell dramatically ($1500 to $200) - all interconnected, e.g. less training linked to more accidents and lower satisfaction. Corporate culture remained stable at 13%, suggesting one area of relative effectiveness/leadership stability. Overall judgement should weigh both effective and ineffective indicators and reach a conclusion (\u0027to what extent\u0027).",
        "sampleAnswer": "HRM at Flexatron Manufacturing has become largely ineffective. Between 2018 and 2019, levels of disputation almost quintupled from 5% to 24%, absenteeism more than doubled from 8 to 18 days, and staff turnover more than doubled from 8% to 18%, while training spend per employee collapsed from $1,500 to $200, likely contributing to accidents doubling from 10% to 20%. Corporate culture remained stable at 13%, suggesting some consistency in leadership. Overall, given the sharp deterioration across almost every measure, HRM at Flexatron is largely ineffective and requires urgent intervention."
    },
    {
        "id":  "bs-4-knox19-2",
        "criteriaSource": "official",
        "marks":  4,
        "topic":  "Human Resources",
        "source":  "Knox 2019 Trial HSC (Q21c)",
        "stimulus":  {
                         "blocks":  [
                                        {
                                            "type":  "text",
                                            "text":  "Human resource data collected at Flexatron Manufacturing."
                                        },
                                        {
                                            "type":  "table",
                                            "title":  "Flexatron Manufacturing HR data",
                                            "columns":  [
                                                            "Measures",
                                                            "2018",
                                                            "2019"
                                                        ],
                                            "rows":  [
                                                         [
                                                             "Absenteeism",
                                                             "8 days",
                                                             "18 days"
                                                         ],
                                                         [
                                                             "Staff turnover",
                                                             "8%",
                                                             "18%"
                                                         ],
                                                         [
                                                             "Levels of disputation",
                                                             "5%",
                                                             "24%"
                                                         ],
                                                         [
                                                             "Corporate culture",
                                                             "13%",
                                                             "13%"
                                                         ],
                                                         [
                                                             "Training spent per employee",
                                                             "$1500",
                                                             "$200"
                                                         ],
                                                         [
                                                             "Accidents",
                                                             "10%",
                                                             "20%"
                                                         ]
                                                     ]
                                        }
                                    ]
                     },
        "question":  "Recommend TWO human resource strategies that could be used by Flexatron Manufacturing to improve the effectiveness measures.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Comprehensively provides reasons in favour of TWO HR strategies specifically linked to Flexatron Manufacturing\u0027s stimulus data"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Provides reasons in favour of TWO HR strategies, with some reference to Flexatron Manufacturing"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Provides reasons in favour of ONE HR strategy using Flexatron Manufacturing, or some information on TWO HR strategies"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Provides limited information on HR strategies or Flexatron Manufacturing"
                         }
                     ],
        "keyPoints":  "Strategies: training and development (address rising accidents 20% and turnover 18% through induction, coaching, WH\u0026S training); workplace dispute resolution/grievance procedures (address disputes rising 5% to 24%); performance management (reduce accidents through evaluation and feedback); rewards/maintenance strategies (monetary and non-monetary rewards to reduce absenteeism and turnover). Must include reasons in favour and reference the stimulus data.",
        "sampleAnswer": "Flexatron should invest in training and development, since the fall in spending from $1,500 to $200 per employee is likely linked to the rise in accidents from 10% to 20%; restoring induction and WHS training would improve safety and reduce disruption. Flexatron should also implement formal grievance and dispute resolution procedures, given disputation rose from 5% to 24%, providing employees a clear process to raise concerns before they escalate, which should also help reduce the sharp rise in absenteeism and turnover."
    },
    {
        "id":  "bs-2-knox19-2",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Operations",
        "source":  "Knox 2019 Trial HSC (Q22a)",
        "stimulus":  "Mixon Manufacturing is a leading car manufacturer based in Australia and is considering expanding its production capability in its Australian facility to meet demand requirements for the market in China.",
        "question":  "Outline how legal regulations may influence Mixon Manufacturing in its operations management.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Correctly sketches in general terms how a legal regulation may impact Mixon Manufacturing\u0027s operations management"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Provides limited information on a legal influence"
                         }
                     ],
        "keyPoints":  "E.g. Work Health and Safety Act 2011 requires MM to provide safe machinery, materials and training, incurring compliance costs; or Competition and Consumer Act 2010 requires goods to meet safety/labelling standards.",
        "sampleAnswer": "The Work Health and Safety Act 2011 requires Mixon Manufacturing to provide safe machinery, materials and training for its workers, meaning expanding production will increase compliance costs as new equipment and staff must meet these legal safety standards."
    },
    {
        "id":  "bs-4-knox19-3",
        "criteriaSource": "official",
        "marks":  4,
        "topic":  "Operations",
        "source":  "Knox 2019 Trial HSC (Q22b)",
        "stimulus":  "Mixon Manufacturing is a leading car manufacturer based in Australia and is considering expanding its production capability in its Australian facility to meet demand requirements for the market in China.",
        "question":  "Analyse the supply chain management strategies that may need to be considered as part of this expansion.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Comprehensively draws out and relates the implications of at least TWO supply chain management strategies that may need to be considered as part of the expansion, with clear reference to the stimulus"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Draws out and relates the implications of TWO supply chain management strategies, with some reference to the stimulus"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Relates cause and effect of ONE supply chain management strategy that may need to be considered"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Provides limited information on supply chain management"
                         }
                     ],
        "keyPoints":  "Strategies: logistics (transport/warehousing/distribution of finished cars to China, e.g. Automated Warehouse Trucks improving speed); e-commerce/e-procurement (online ordering and automatic restocking, improving efficiency but costly to set up); global sourcing (sourcing inputs such as steel, glass, tyres from overseas for cost/quality benefits, but risk of exchange rate movements and supply chain complexity). Needs reference to Mixon/China/car manufacturing context.",
        "sampleAnswer": "Global sourcing would let Mixon source inputs such as steel, glass and tyres from overseas suppliers for cost or quality benefits, though this exposes the business to exchange rate risk and a more complex supply chain as it expands to serve China. Logistics is also critical, as Mixon must manage the transport, warehousing and distribution of finished cars to Chinese markets, potentially using automated warehouse systems to improve speed and accuracy. Both strategies must be carefully planned to support reliable, cost-effective expansion into a new international market."
    },
    {
        "id":  "bs-4-knox19-4",
        "criteriaSource": "official",
        "marks":  4,
        "topic":  "Operations",
        "source":  "Knox 2019 Trial HSC (Q22c)",
        "stimulus":  "Mixon Manufacturing is a leading car manufacturer based in Australia and is considering expanding its production capability in its Australian facility to meet demand requirements for the market in China.",
        "question":  "How can Mixon Manufacturing demonstrate environmental sustainability and social responsibility in its operations?",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Comprehensively details how Mixon Manufacturing can demonstrate BOTH environmental sustainability and social responsibility in its operations, with specific reference to the stimulus"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Details how Mixon Manufacturing can demonstrate environmental sustainability and social responsibility in its operations"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Details ONE of environmental sustainability OR social responsibility"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Provides limited information on corporate social responsibility"
                         }
                     ],
        "keyPoints":  "Environmental sustainability: e.g. installing solar panels/renewable energy at the manufacturing plant, developing eco-friendly products like electric cars, reducing carbon emissions. Social responsibility: ensuring ethical, safe working conditions and fair treatment of workers in its supply chain (e.g. metal/leather sourcing), paying above minimum legal requirements, transparency in reporting.",
        "sampleAnswer": "Mixon can demonstrate environmental sustainability by installing solar panels at its manufacturing plant and developing eco-friendly products such as electric vehicles, reducing its carbon emissions as it expands production. It can demonstrate social responsibility by ensuring ethical, safe working conditions and fair treatment of workers throughout its supply chain, including suppliers of materials like leather and metal used in car production, and by being transparent in its reporting. Together these actions help Mixon build a sustainable, ethical reputation as it grows into the Chinese market."
    },
    {
        "id":  "bs-2-knox19-3",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Finance",
        "source":  "Knox 2019 Trial HSC (Q23a)",
        "stimulus":  "3Tel Ltd. is a financial services firm. An external audit was recently conducted and indicated that discrepancies exist in the financial accounts.",
        "question":  "Examine ONE ethical financial reporting practice that 3Tel Ltd. needs to consider to address concerns raised.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Comprehensively examines ONE ethical financial reporting practice that 3Tel Ltd. needs to consider, clearly linked to the stimulus (discrepancies in the accounts)"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Provides some information on ONE ethical financial reporting practice"
                         }
                     ],
        "keyPoints":  "E.g. internal audits (systematic review of systems and processes to identify risks and ensure procedures are followed) or record keeping (ensuring adequate systems/training so transactions are accurately recorded) - must be beyond the mandatory external audit already mentioned in the stimulus.",
        "sampleAnswer": "3Tel should conduct regular internal audits, a systematic review of its accounting systems and processes to identify risks and ensure procedures are properly followed. This would help detect and prevent the discrepancies uncovered in the external audit before they recur, improving the accuracy and reliability of 3Tel\u0027s financial reports."
    },
    {
        "id":  "bs-4-knox19-5",
        "criteriaSource": "official",
        "marks":  4,
        "topic":  "Finance",
        "source":  "Knox 2019 Trial HSC (Q23b)",
        "stimulus":  {
                         "blocks":  [
                                        {
                                            "type":  "text",
                                            "text":  "Balance Sheet at 30 June 2019 - Echo Industries Pty Limited"
                                        },
                                        {
                                            "type":  "table",
                                            "title":  "Balance Sheet",
                                            "columns":  [
                                                            "",
                                                            "$",
                                                            "",
                                                            "$"
                                                        ],
                                            "rows":  [
                                                         [
                                                             "Current Assets",
                                                             "",
                                                             "Current Liabilities",
                                                             ""
                                                         ],
                                                         [
                                                             "Cash",
                                                             "5,000",
                                                             "Accounts Payable",
                                                             "10,000"
                                                         ],
                                                         [
                                                             "Accounts Receivable",
                                                             "35,000",
                                                             "Overdraft",
                                                             "5,000"
                                                         ],
                                                         [
                                                             "Inventory",
                                                             "20,000",
                                                             "",
                                                             ""
                                                         ],
                                                         [
                                                             "Non-Current Assets",
                                                             "",
                                                             "Non-Current Liabilities",
                                                             ""
                                                         ],
                                                         [
                                                             "Plant \u0026 Equipment",
                                                             "10,000",
                                                             "Mortgage",
                                                             "200,000"
                                                         ],
                                                         [
                                                             "Land \u0026 Buildings",
                                                             "210,000",
                                                             "",
                                                             ""
                                                         ],
                                                         [
                                                             "R\u0026D",
                                                             "20,000",
                                                             "Owners Equity",
                                                             ""
                                                         ],
                                                         [
                                                             "",
                                                             "",
                                                             "Share Capital",
                                                             "50,000"
                                                         ],
                                                         [
                                                             "",
                                                             "",
                                                             "Retained Earnings",
                                                             "35,000"
                                                         ]
                                                     ]
                                        },
                                        {
                                            "type":  "text",
                                            "text":  "Additional information:\nSales in year ended 30 June 2019 = $350,000\nIndustry averages:\n- Current ratio (Current assets ÷ Current liabilities) = 2:1\n- Debt to Equity Ratio (Total Liabilities ÷ Total Equity) = 1:1\n- Accounts Receivable Turnover Ratio (Sales ÷ Accounts Receivable) = 15 days"
                                        }
                                    ]
                     },
        "question":  "Assess TWO potential financial risks for Echo Industries.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Makes a comprehensive judgement of the value/outcome of TWO potential financial risks for Echo Industries, with clear reference to the financial figures and industry benchmarks"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Makes some judgement of the value/outcome of TWO potential financial risks for Echo Industries"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Makes a judgement of ONE potential financial risk, or relates cause and effect of potential risks in general terms"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Provides limited information on the potential risks"
                         }
                     ],
        "keyPoints":  "Current ratio = (5,000+35,000+20,000)/(10,000+5,000) = 60,000/15,000 = 4:1, well above the 2:1 industry average, risking excess idle current assets, high accounts receivable (risk of bad debts) and high inventory (risk of obsolescence). Debt to equity ratio = total liabilities (10,000+5,000+200,000=215,000) / total equity (50,000+35,000=85,000) ≈ 2.53:1, far above the 1:1 benchmark, indicating high risk of insolvency and reduced ability to raise further debt.",
        "sampleAnswer": "Echo\u0027s current ratio is $60,000 ÷ $15,000 = 4:1, well above the 2:1 industry average, indicating too many idle current assets - its $35,000 in accounts receivable risks bad debts and its $20,000 inventory risks obsolescence, both tying up funds that could be used more productively. Echo\u0027s debt to equity ratio is $215,000 ÷ $85,000 ≈ 2.53:1, far above the 1:1 benchmark, indicating a high risk of insolvency and a reduced ability to secure further debt if needed."
    },
    {
        "id":  "bs-4-knox19-6",
        "criteriaSource": "official",
        "marks":  4,
        "topic":  "Finance",
        "source":  "Knox 2019 Trial HSC (Q23c)",
        "stimulus":  {
                         "blocks":  [
                                        {
                                            "type":  "text",
                                            "text":  "Balance Sheet at 30 June 2019 - Echo Industries Pty Limited"
                                        },
                                        {
                                            "type":  "table",
                                            "title":  "Balance Sheet",
                                            "columns":  [
                                                            "",
                                                            "$",
                                                            "",
                                                            "$"
                                                        ],
                                            "rows":  [
                                                         [
                                                             "Current Assets",
                                                             "",
                                                             "Current Liabilities",
                                                             ""
                                                         ],
                                                         [
                                                             "Cash",
                                                             "5,000",
                                                             "Accounts Payable",
                                                             "10,000"
                                                         ],
                                                         [
                                                             "Accounts Receivable",
                                                             "35,000",
                                                             "Overdraft",
                                                             "5,000"
                                                         ],
                                                         [
                                                             "Inventory",
                                                             "20,000",
                                                             "",
                                                             ""
                                                         ],
                                                         [
                                                             "Non-Current Assets",
                                                             "",
                                                             "Non-Current Liabilities",
                                                             ""
                                                         ],
                                                         [
                                                             "Plant \u0026 Equipment",
                                                             "10,000",
                                                             "Mortgage",
                                                             "200,000"
                                                         ],
                                                         [
                                                             "Land \u0026 Buildings",
                                                             "210,000",
                                                             "",
                                                             ""
                                                         ],
                                                         [
                                                             "R\u0026D",
                                                             "20,000",
                                                             "Owners Equity",
                                                             ""
                                                         ],
                                                         [
                                                             "",
                                                             "",
                                                             "Share Capital",
                                                             "50,000"
                                                         ],
                                                         [
                                                             "",
                                                             "",
                                                             "Retained Earnings",
                                                             "35,000"
                                                         ]
                                                     ]
                                        },
                                        {
                                            "type":  "text",
                                            "text":  "Additional information:\nSales in year ended 30 June 2019 = $350,000\nIndustry averages:\n- Current ratio (Current assets ÷ Current liabilities) = 2:1\n- Debt to Equity Ratio (Total Liabilities ÷ Total Equity) = 1:1\n- Accounts Receivable Turnover Ratio (Sales ÷ Accounts Receivable) = 15 days"
                                        }
                                    ]
                     },
        "question":  "Recommend TWO methods that Echo Industries can implement to improve its debt to equity ratio.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Provides well-reasoned recommendations, explicitly linked to the stimulus financial figures, for TWO methods that would improve Echo Industries\u0027 debt to equity ratio"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Provides reasons in favour of TWO methods which explicitly improve the debt to equity ratio, but does not use financial information from the stimulus"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Provides reasons in favour of ONE method which explicitly improves the debt to equity ratio"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Identifies a method that may improve the debt to equity ratio but provides no reasons or explanation of how/why it would improve"
                         }
                     ],
        "keyPoints":  "Sale and leaseback of Land \u0026 Buildings ($210,000) to repay the $200,000 mortgage, substantially cutting liabilities; increasing equity via a new share issue (e.g. raising $70,000+ and using it to repay debt); reducing liabilities via factoring/discounts for early payment on the $35,000 accounts receivable to pay down current liabilities and part of the mortgage.",
        "sampleAnswer": "Echo could use a sale and leaseback of its $210,000 Land \u0026 Buildings to repay its $200,000 mortgage, substantially cutting total liabilities and improving the ratio. Echo could also raise additional equity through a new share issue, using the funds raised to pay down debt, which increases the denominator of the ratio while reducing the numerator. Both strategies would help bring Echo\u0027s debt to equity ratio closer to the 1:1 industry average and reduce its financial risk."
    },
    {
        "id":  "bs-4-knox19-7",
        "criteriaSource": "official",
        "marks":  4,
        "topic":  "Marketing",
        "source":  "Knox 2019 Trial HSC (Q24a)",
        "stimulus":  "Supersize Burgers is a new fast food restaurant chain that has entered the Australian market. Products are oversized burgers, chips, with various sauces, and mega sized thick shakes. Their tagline is \"Burgers to make your heart scream\".",
        "question":  "Examine TWO ethical issues in marketing that Supersize Burgers must consider.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Comprehensively examines TWO ethical issues that Supersize Burgers must consider, with specific reference to the stimulus"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Examines TWO ethical issues that Supersize Burgers must consider"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Examines ONE ethical issue, or sketches in general terms TWO ethical issues that Supersize Burgers must consider"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Provides limited information on ethical issues"
                         }
                     ],
        "keyPoints":  "Ethical issues: products that may damage health (mega-sized thick shakes/oversized burgers linked to health problems such as heart disease, particularly concerning if marketed to children); truth and accuracy in advertising (must ensure burgers/chips match what is advertised, not smaller than shown).",
        "sampleAnswer": "One ethical issue is that Supersize Burgers\u0027 products, such as its mega-sized thick shakes and oversized burgers, may damage consumers\u0027 health if eaten regularly, particularly concerning given the tagline \u0027Burgers to make your heart scream\u0027 seems to make light of this risk. A second issue is truth and accuracy in advertising, as Supersize Burgers must ensure its actual burgers and chips match what is shown in its marketing, rather than being smaller or different from advertised, to avoid misleading customers."
    },
    {
        "id":  "bs-6-knox19-1",
        "criteriaSource": "derived",
        "marks":  6,
        "topic":  "Marketing",
        "source":  "Knox 2019 Trial HSC (Q24b)",
        "stimulus":  "Supersize Burgers is a new fast food restaurant chain that has entered the Australian market. Products are oversized burgers, chips, with various sauces, and mega sized thick shakes. Their tagline is \"Burgers to make your heart scream\".",
        "question":  "Evaluate the promotions mix that could be used by Supersize Burgers.",
        "criteria":  [
                         {
                             "marks":  6,
                             "descriptor":  "Makes a comprehensive, balanced judgement on at least TWO elements of the promotions mix that could be used by Supersize Burgers, with an introduction, conclusion and thorough stimulus integration throughout"
                         },
                         {
                             "marks":  5,
                             "descriptor":  "Makes a detailed judgement on at least TWO elements of the promotions mix that could be used by Supersize Burgers, with good stimulus integration"
                         },
                         {
                             "marks":  4,
                             "descriptor":  "Makes a judgement on at least TWO elements of the promotions mix that could be used by Supersize Burgers"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Relates cause and effect of the promotions mix, or provides ONE detailed judgement of a promotions element"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Sketches in general terms the promotions mix that could be used by Supersize Burgers"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Provides limited information on the promotions mix"
                         }
                     ],
        "keyPoints":  "Elements: advertising (paid non-personal mass communication, e.g. social media ads raising awareness but potentially costly); sales promotion (direct inducements e.g. coupons/loyalty deals boosting short-term sales but can erode margins); relationship marketing (newsletters/loyalty building repeat sales among existing customers but doesn\u0027t reach new customers). Should evaluate effectiveness (positive and negative) with an intro and conclusion.",
        "sampleAnswer": "Supersize Burgers could use several elements of the promotions mix to build its brand in the Australian market. Advertising, such as paid social media campaigns, would effectively raise broad awareness of its tagline and oversized products, though this can be costly for a new entrant with a limited budget. Sales promotion, such as launch-week discounts or loyalty coupons, could quickly drive trial and short-term sales, but frequent discounting risks eroding profit margins and cheapening the brand. Relationship marketing, such as a loyalty app or email newsletter, would help build repeat business among existing customers, though it does little to reach new customers unfamiliar with the brand. On balance, a combination of advertising to build initial awareness and sales promotion to drive trial would be most effective for a new entrant like Supersize Burgers, with relationship marketing added once a loyal customer base has been established."
    },
    {
        "id":  "bs-2-cherry13-1",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Operations",
        "source":  "Cherrybrook Tech 2013 Trial HSC (Q21a)",
        "stimulus":  "In response to an economic downturn, \"We\u0027re Fair Furniture\" is looking to implement new transformation processes to reduce costs, in order to maintain sales levels that sustain its market share.",
        "question":  "Outline ONE role of operations management.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Outlines ONE role of operations management (e.g. coordinating the transformation of inputs into final goods/services by value adding, minimising waste, operating at low cost to maximise profits, integrating environmental awareness/ecologically sustainable practices, cost leadership)"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Identifies ONE role of operations management"
                         }
                     ],
        "keyPoints":  "Roles: coordinating the transformation process (value adding), minimising waste, operating at low cost to maximise profits, integrating environmental awareness and sustainable practices, achieving cost leadership.",
        "sampleAnswer": "One role of operations management is coordinating the transformation of inputs into final goods and services in a way that adds value, such as helping We\u0027re Fair Furniture redesign its transformation process to cut costs while still producing furniture that meets customer needs and sustains sales."
    },
    {
        "id":  "bs-3-cherry13-1",
        "criteriaSource": "official",
        "marks":  3,
        "topic":  "Operations",
        "source":  "Cherrybrook Tech 2013 Trial HSC (Q21b)",
        "stimulus":  "In response to an economic downturn, \"We\u0027re Fair Furniture\" is looking to implement new transformation processes to reduce costs, in order to maintain sales levels that sustain its market share.",
        "question":  "Describe how globalisation can influence the operations management of \u0027We\u0027re Fair Furniture\u0027.",
        "criteria":  [
                         {
                             "marks":  3,
                             "descriptor":  "Describes how globalisation can influence the operations management of \u0027We\u0027re Fair Furniture\u0027, with reference to more than one relevant point"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Outlines how globalisation can influence operations management"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Defines globalisation, or identifies a way in which globalisation can influence operations management"
                         }
                     ],
        "keyPoints":  "Globalisation definition; opportunity to meet needs of global consumers (may require standardising production, reducing expenses); opportunity to seek cheaper suppliers through a global web of suppliers; fosters growth opportunities through innovation.",
        "sampleAnswer": "Globalisation is the increasing integration and interdependence of national economies through freer trade. It can influence We\u0027re Fair Furniture\u0027s operations by giving it access to a global web of suppliers, allowing it to source cheaper materials and reduce production costs during the downturn. It may also create the opportunity to sell furniture to global consumers, though this could require standardising production to keep costs down. Globalisation can also foster growth through exposure to new production technologies and ideas from overseas competitors."
    },
    {
        "id":  "bs-4-cherry13-1",
        "criteriaSource": "derived",
        "marks":  4,
        "topic":  "Operations",
        "source":  "Cherrybrook Tech 2013 Trial HSC (Q21c)",
        "stimulus":  "In response to an economic downturn, \"We\u0027re Fair Furniture\" is looking to implement new transformation processes to reduce costs, in order to maintain sales levels that sustain its market share.",
        "question":  "Recommend TWO operational processes that management would implement to improve the transformation process AND maintain sales levels.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Gives clear reasons in favour of TWO operations processes that management would implement to improve the transformation process and maintain sales"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Gives reasons in favour of TWO operations processes that management would implement, with less developed reasoning"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Gives reasons in favour of ONE operations process that management would implement, or sketches in general terms ONE process"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Identifies ONE operations process"
                         }
                     ],
        "keyPoints":  "E.g. sequencing and scheduling (improve efficiency of production order); technology, task design and layout (invest in more efficient equipment/workspace layout to reduce costs); monitoring, control and improvement (continually review and adjust processes to reduce waste and maintain quality/sales).",
        "sampleAnswer": "We\u0027re Fair Furniture could improve sequencing and scheduling, reordering production tasks to reduce downtime and produce furniture more efficiently, cutting costs without reducing output or missing delivery deadlines that could cost sales. It could also invest in more efficient technology and workspace layout, reducing waste and labour time in the transformation process. Together these changes would lower production costs during the downturn while maintaining the quality and delivery reliability needed to sustain market share."
    },
    {
        "id":  "bs-1-cherry13-1",
        "criteriaSource": "official",
        "marks":  1,
        "topic":  "Marketing",
        "source":  "Cherrybrook Tech 2013 Trial HSC (Q22a)",
        "stimulus":  null,
        "question":  "Identify ONE illegal marketing practice under Australian consumer law.",
        "criteria":  [
                         {
                             "marks":  1,
                             "descriptor":  "Identifies ONE illegal marketing practice under Australian consumer law"
                         }
                     ],
        "keyPoints":  "E.g. deceptive and misleading advertising, price discrimination, unacceptable quality under implied conditions, exclusion of warranties.",
        "sampleAnswer": "One illegal marketing practice under Australian consumer law is deceptive and misleading advertising."
    },
    {
        "id":  "bs-2-cherry13-2",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Marketing",
        "source":  "Cherrybrook Tech 2013 Trial HSC (Q22b)",
        "stimulus":  null,
        "question":  "Outline how psychological factors can influence consumer choice.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Outlines how psychological factors can influence consumer choice, addressing at least two relevant factors"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Identifies a means by which psychological factors can influence consumer choice"
                         }
                     ],
        "keyPoints":  "Psychological factors: motivation, perception, lifestyle, personality, attitude. Better responses address at least two factors and explain how they influence consumer choice.",
        "sampleAnswer": "Psychological factors include motivation, the internal drive that leads a consumer to seek out a product to satisfy a need, and perception, how a consumer interprets and responds to marketing stimuli based on their own experiences and beliefs, both of which shape which products they ultimately choose."
    },
    {
        "id":  "bs-2-cherry13-3",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Marketing",
        "source":  "Cherrybrook Tech 2013 Trial HSC (Q22c)",
        "stimulus":  null,
        "question":  "Describe ONE ethical criticism of marketing.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Describes ONE ethical criticism of marketing"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Identifies ONE ethical criticism of marketing"
                         }
                     ],
        "keyPoints":  "E.g. truth, accuracy and good taste in advertising; products that may damage health; engaging in fair competition; sugging (selling under the guise of market research).",
        "sampleAnswer": "One ethical criticism of marketing is that some businesses promote products that can damage consumers\u0027 health, such as unhealthy food or tobacco, prioritising sales and profit over the wellbeing of the very customers the marketing is designed to attract."
    },
    {
        "id":  "bs-4-cherry13-2",
        "criteriaSource": "derived",
        "marks":  4,
        "topic":  "Marketing",
        "source":  "Cherrybrook Tech 2013 Trial HSC (Q22d)",
        "stimulus":  null,
        "question":  "Explain how a situational analysis can be used to determine appropriate marketing strategies.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Explains how a situational analysis can be used to determine appropriate marketing strategies, addressing both SWOT analysis and the product life cycle"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Explains how a situational analysis can be used to determine appropriate marketing strategies, with some development"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Outlines how a situational analysis can be used to determine appropriate marketing strategies"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Identifies how a situational analysis can be used to determine appropriate marketing strategies"
                         }
                     ],
        "keyPoints":  "Situational analysis includes SWOT analysis (identifying strengths, weaknesses, opportunities, threats) and analysis of the product life cycle (introduction, growth, maturity, decline), both of which help a business determine which marketing strategies are most appropriate given its current position.",
        "sampleAnswer": "A situational analysis includes a SWOT analysis, identifying a business\u0027s internal strengths and weaknesses alongside external opportunities and threats, and an analysis of the product life cycle stage - introduction, growth, maturity or decline - that a product is currently in. Together these tools give management a clear picture of the business\u0027s current position, allowing it to select marketing strategies suited to its situation, such as heavy promotion during the growth stage or price discounting to extend a product in decline."
    },
    {
        "id":  "bs-2-cherry13-4",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Finance",
        "source":  "Cherrybrook Tech 2013 Trial HSC (Q23a)",
        "stimulus":  {
                         "blocks":  [
                                        {
                                            "type":  "text",
                                            "text":  "The Income Statement of Brisk Café is shown below."
                                        },
                                        {
                                            "type":  "table",
                                            "title":  "Income Statement for the year ending",
                                            "columns":  [
                                                            "",
                                                            "2012",
                                                            "2011"
                                                        ],
                                            "rows":  [
                                                         [
                                                             "Sales",
                                                             "160 000",
                                                             "200 000"
                                                         ],
                                                         [
                                                             "Opening stock",
                                                             "43 000",
                                                             "25 000"
                                                         ],
                                                         [
                                                             "Purchases",
                                                             "26 000",
                                                             "32 000"
                                                         ],
                                                         [
                                                             "Closing stock",
                                                             "34 000",
                                                             "47 000"
                                                         ],
                                                         [
                                                             "Selling expenses",
                                                             "20 000",
                                                             "36 000"
                                                         ],
                                                         [
                                                             "Administrative expenses",
                                                             "6 000",
                                                             "5 000"
                                                         ],
                                                         [
                                                             "Interest",
                                                             "4 000",
                                                             "4 000"
                                                         ]
                                                     ]
                                        }
                                    ]
                     },
        "question":  "Calculate the gross profit (GP ÷ sales) AND net profit (NP ÷ sales) ratios for 2012.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Correctly calculates both the gross profit ratio and net profit ratio for 2012, with correct COGS, gross profit and net profit workings"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Correctly calculates either the gross profit ratio OR the net profit ratio for 2012"
                         }
                     ],
        "keyPoints":  "COGS = Opening stock + Purchases − Closing stock = 43,000+26,000−34,000 = $35,000. Gross profit = Sales − COGS = 160,000−35,000 = $125,000; GP ratio = 125,000/160,000 = 0.78125:1 (78%). Net profit = Gross profit − Expenses (20,000+6,000+4,000=30,000) = $95,000; NP ratio = 95,000/160,000 = 0.59375:1 (59%).",
        "sampleAnswer": "COGS = Opening stock + Purchases − Closing stock = $43,000 + $26,000 − $34,000 = $35,000. Gross profit = $160,000 − $35,000 = $125,000, so GP ratio = 125,000 ÷ 160,000 = 78%. Net profit = $125,000 − ($20,000 + $6,000 + $4,000) = $95,000, so NP ratio = 95,000 ÷ 160,000 ≈ 59%."
    },
    {
        "id":  "bs-2-cherry13-5",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Finance",
        "source":  "Cherrybrook Tech 2013 Trial HSC (Q23b)",
        "stimulus":  {
                         "blocks":  [
                                        {
                                            "type":  "text",
                                            "text":  "The Income Statement of Brisk Café is shown below."
                                        },
                                        {
                                            "type":  "table",
                                            "title":  "Income Statement for the year ending",
                                            "columns":  [
                                                            "",
                                                            "2012",
                                                            "2011"
                                                        ],
                                            "rows":  [
                                                         [
                                                             "Sales",
                                                             "160 000",
                                                             "200 000"
                                                         ],
                                                         [
                                                             "Opening stock",
                                                             "43 000",
                                                             "25 000"
                                                         ],
                                                         [
                                                             "Purchases",
                                                             "26 000",
                                                             "32 000"
                                                         ],
                                                         [
                                                             "Closing stock",
                                                             "34 000",
                                                             "47 000"
                                                         ],
                                                         [
                                                             "Selling expenses",
                                                             "20 000",
                                                             "36 000"
                                                         ],
                                                         [
                                                             "Administrative expenses",
                                                             "6 000",
                                                             "5 000"
                                                         ],
                                                         [
                                                             "Interest",
                                                             "4 000",
                                                             "4 000"
                                                         ]
                                                     ]
                                        }
                                    ]
                     },
        "question":  "Distinguish between debt and equity finance.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Distinguishes between debt and equity finance by providing two related points of difference for both sources"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Distinguishes between debt and equity by providing one related point of difference for both sources, or correctly defines either debt or equity finance"
                         }
                     ],
        "keyPoints":  "Debt finance is from external sources, must be repaid with interest, involves no loss of ownership. Equity finance can be internal or external, does not need to be repaid until profits are generated (dividends) or the owner leaves the business, and involves a loss of ownership.",
        "sampleAnswer": "Debt finance is sourced externally and must be repaid with interest over an agreed term, without any loss of ownership, whereas equity finance can come from internal or external sources, does not need to be repaid until profits are made or the owner exits, but involves giving up part ownership of the business."
    },
    {
        "id":  "bs-2-cherry13-6",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Finance",
        "source":  "Cherrybrook Tech 2013 Trial HSC (Q23c)",
        "stimulus":  {
                         "blocks":  [
                                        {
                                            "type":  "text",
                                            "text":  "The Income Statement of Brisk Café is shown below."
                                        },
                                        {
                                            "type":  "table",
                                            "title":  "Income Statement for the year ending",
                                            "columns":  [
                                                            "",
                                                            "2012",
                                                            "2011"
                                                        ],
                                            "rows":  [
                                                         [
                                                             "Sales",
                                                             "160 000",
                                                             "200 000"
                                                         ],
                                                         [
                                                             "Opening stock",
                                                             "43 000",
                                                             "25 000"
                                                         ],
                                                         [
                                                             "Purchases",
                                                             "26 000",
                                                             "32 000"
                                                         ],
                                                         [
                                                             "Closing stock",
                                                             "34 000",
                                                             "47 000"
                                                         ],
                                                         [
                                                             "Selling expenses",
                                                             "20 000",
                                                             "36 000"
                                                         ],
                                                         [
                                                             "Administrative expenses",
                                                             "6 000",
                                                             "5 000"
                                                         ],
                                                         [
                                                             "Interest",
                                                             "4 000",
                                                             "4 000"
                                                         ]
                                                     ]
                                        }
                                    ]
                     },
        "question":  "Using the expense ratio (total expenses ÷ sales), comment on \u0027Brisk Café\u0027s\u0027 efficiency in 2012.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Correctly calculates the expense ratio for Brisk Café AND correctly comments on Brisk Café\u0027s efficiency in 2012"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Correctly calculates the expense ratio for Brisk Café without commenting on efficiency, or makes a comment without reference to a calculation"
                         }
                     ],
        "keyPoints":  "Expense ratio = Total expenses ÷ Sales = 30,000/160,000 = 0.1875:1 (18.75%); low ratio indicates Brisk Café is highly efficient, as it only requires 18.75% of sales revenue to cover its expenses.",
        "sampleAnswer": "The expense ratio measures total expenses as a proportion of sales. Brisk Café\u0027s 2012 expense ratio = $30,000 ÷ $160,000 = 18.75%. This low ratio indicates Brisk Café is highly efficient, as it only needs 18.75% of its sales revenue to cover its total expenses."
    },
    {
        "id":  "bs-4-cherry13-3",
        "criteriaSource": "derived",
        "marks":  4,
        "topic":  "Finance",
        "source":  "Cherrybrook Tech 2013 Trial HSC (Q23d)",
        "stimulus":  {
                         "blocks":  [
                                        {
                                            "type":  "text",
                                            "text":  "The Income Statement of Brisk Café is shown below."
                                        },
                                        {
                                            "type":  "table",
                                            "title":  "Income Statement for the year ending",
                                            "columns":  [
                                                            "",
                                                            "2012",
                                                            "2011"
                                                        ],
                                            "rows":  [
                                                         [
                                                             "Sales",
                                                             "160 000",
                                                             "200 000"
                                                         ],
                                                         [
                                                             "Opening stock",
                                                             "43 000",
                                                             "25 000"
                                                         ],
                                                         [
                                                             "Purchases",
                                                             "26 000",
                                                             "32 000"
                                                         ],
                                                         [
                                                             "Closing stock",
                                                             "34 000",
                                                             "47 000"
                                                         ],
                                                         [
                                                             "Selling expenses",
                                                             "20 000",
                                                             "36 000"
                                                         ],
                                                         [
                                                             "Administrative expenses",
                                                             "6 000",
                                                             "5 000"
                                                         ],
                                                         [
                                                             "Interest",
                                                             "4 000",
                                                             "4 000"
                                                         ]
                                                     ]
                                        }
                                    ]
                     },
        "question":  "Recommend TWO financial strategies that \u0027Brisk Café\u0027 can implement to improve its profitability.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Clearly recommends TWO strategies with reasons in favour that Brisk Café can implement to improve its profitability"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Puts forward reasons in favour of ONE strategy to improve profitability, and sketches in general terms a second appropriate profitability strategy"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Identifies a strategy that could be used to improve profitability, with some development"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Identifies a strategy that could be used to improve profitability"
                         }
                     ],
        "keyPoints":  "Strategies: implementing cost centres, expense minimisation, revenue controls (e.g. sales mix, pricing policy), managing fixed versus variable costs.",
        "sampleAnswer": "Brisk Café could implement cost centres, dividing the business into departments such as food preparation and service, to track and identify which areas are generating excessive costs like the $20,000 in selling expenses, then apply expense minimisation to reduce them. Brisk Café could also use revenue controls, such as adjusting its pricing policy or sales mix to promote higher-margin menu items, particularly important given sales fell from $200,000 in 2011 to $160,000 in 2012."
    },
    {
        "id":  "bs-1-cherry13-2",
        "criteriaSource": "official",
        "marks":  1,
        "topic":  "Human Resources",
        "source":  "Cherrybrook Tech 2013 Trial HSC (Q24a)",
        "stimulus":  "\u0027Futurz Graphics\u0027 is a large business with 300 employees. The recent economic downturn has forced management to reduce costs. Management has decided to outsource its accounting and administration functions to Malaysia. They have also decided to reduce non-monetary benefits such as training expenses and flexible working hours. The company\u0027s employees have threatened to go on strike unless managers allow them to be part of the decision-making process.",
        "question":  "Outline ONE influence on employment relations at this business.",
        "criteria":  [
                         {
                             "marks":  1,
                             "descriptor":  "Outlines ONE influence on employment relations at this business (e.g. economic, stakeholders, social, legal, technological, ethics/CSR), with specific reference to the case study"
                         }
                     ],
        "keyPoints":  "Influences: economic (downturn forcing cost reduction), stakeholders (employees/trade unions threatening strike), social, legal, technological, ethics and corporate social responsibility. Must reference the Futurz Graphics case study.",
        "sampleAnswer": "One influence is the economic downturn, which has forced Futurz Graphics to cut costs by outsourcing and reducing staff benefits."
    },
    {
        "id":  "bs-3-cherry13-2",
        "criteriaSource": "derived",
        "marks":  3,
        "topic":  "Human Resources",
        "source":  "Cherrybrook Tech 2013 Trial HSC (Q24b)",
        "stimulus":  "\u0027Futurz Graphics\u0027 is a large business with 300 employees. The recent economic downturn has forced management to reduce costs. Management has decided to outsource its accounting and administration functions to Malaysia. They have also decided to reduce non-monetary benefits such as training expenses and flexible working hours. The company\u0027s employees have threatened to go on strike unless managers allow them to be part of the decision-making process.",
        "question":  "Describe how a high staff turnover can impact training costs and profitability.",
        "criteria":  [
                         {
                             "marks":  3,
                             "descriptor":  "Describes how a high staff turnover can impact BOTH training costs and profitability, with clear cause and effect"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Describes how a high staff turnover can impact training costs and profitability, with some development"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Identifies that a high staff turnover will increase costs and/or reduce profits"
                         }
                     ],
        "keyPoints":  "High staff turnover increases the need to acquire and train new staff, increasing training costs; new/less experienced staff may be less productive/effective, further reducing profitability.",
        "sampleAnswer": "High staff turnover forces Futurz Graphics to repeatedly recruit and induct new employees, increasing training costs as each new starter must be trained from scratch rather than building on existing experience. This also reduces profitability, because new staff are typically less productive and make more errors than experienced employees, meaning revenue-generating work is completed more slowly. Combined with the outsourcing and reduced benefits already occurring at Futurz Graphics, ongoing high turnover would further strain the business\u0027s costs and profits."
    },
    {
        "id":  "bs-4-cherry13-4",
        "criteriaSource": "derived",
        "marks":  4,
        "topic":  "Human Resources",
        "source":  "Cherrybrook Tech 2013 Trial HSC (Q24c)",
        "stimulus":  "\u0027Futurz Graphics\u0027 is a large business with 300 employees. The recent economic downturn has forced management to reduce costs. Management has decided to outsource its accounting and administration functions to Malaysia. They have also decided to reduce non-monetary benefits such as training expenses and flexible working hours. The company\u0027s employees have threatened to go on strike unless managers allow them to be part of the decision-making process.",
        "question":  "Explain ONE advantage and ONE disadvantage of global outsourcing.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Explains ONE advantage AND ONE disadvantage of global outsourcing, with clear cause and effect for both"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Explains ONE advantage and ONE disadvantage of global outsourcing, with less developed reasoning for one"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Outlines ONE advantage and/or ONE disadvantage of global outsourcing"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Identifies ONE advantage or ONE disadvantage of global outsourcing"
                         }
                     ],
        "keyPoints":  "Advantage: e.g. access to expertise (vendors specialise, faster/better quality output), ability to concentrate on core processes, reduced operational/recruitment costs. Disadvantage: e.g. risk of exposing confidential data, loss of domestic jobs, hidden costs, lack of customer focus from a vendor juggling multiple clients.",
        "sampleAnswer": "One advantage of global outsourcing for Futurz Graphics is reduced costs, as outsourcing its accounting and administration functions to Malaysia allows it to access cheaper labour while freeing internal resources to focus on its core graphics business. One disadvantage is the risk of exposing confidential financial data to an external overseas provider, and the loss of direct control over the quality and consistency of the outsourced work, which could affect the accuracy of Futurz Graphics\u0027 accounts."
    },
    {
        "id":  "bs-4-cherry13-5",
        "criteriaSource": "derived",
        "marks":  4,
        "topic":  "Human Resources",
        "source":  "Cherrybrook Tech 2013 Trial HSC (Q24d)",
        "stimulus":  "\u0027Futurz Graphics\u0027 is a large business with 300 employees. The recent economic downturn has forced management to reduce costs. Management has decided to outsource its accounting and administration functions to Malaysia. They have also decided to reduce non-monetary benefits such as training expenses and flexible working hours. The company\u0027s employees have threatened to go on strike unless managers allow them to be part of the decision-making process.",
        "question":  "Recommend TWO human resource strategies \u0027Futurz Graphics\u0027 can implement to improve employment relations.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Recommends TWO possible strategies Futurz Graphics can implement to improve employment relations, with reasons in favour of each"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Recommends TWO possible strategies Futurz Graphics can implement to improve employment relations, with less developed reasoning"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Recommends ONE possible strategy with reasons in favour, or identifies TWO strategies Futurz Graphics can implement to improve employment relations"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Identifies ONE possible strategy Futurz Graphics can implement to improve employment relations"
                         }
                     ],
        "keyPoints":  "Strategies: adopting a more democratic/participative leadership style (addresses staff\u0027s desire to be part of decision-making), job design (job enrichment to increase responsibility/ownership); also possible: recruitment, training and development, performance management, rewards, communication.",
        "sampleAnswer": "Futurz Graphics should adopt a more democratic, participative leadership style, involving employees in decision-making, which directly addresses their demand to be part of the decision-making process and should reduce the threat of strike action. It should also use job design strategies such as job enrichment, giving remaining staff more responsibility and variety in their roles after the outsourcing and redundancies, which can help rebuild morale and commitment during this period of change."
    },
    {
        "id":  "bs-2-riverview14-1",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Marketing",
        "source":  "Riverview 2014 Trial HSC (Q21a)",
        "stimulus":  "Manny is thinking about expanding his business selling printed t-shirts. He currently has a small shop selling the shirts at the front of his factory.",
        "question":  "Outline a distribution channel Manny could use to expand his business.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Outlines ONE distribution channel, showing the route(s) taken to distribute the product to the end consumer"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Identifies ONE distribution channel"
                         }
                     ],
        "keyPoints":  "Possible channels: producer-consumer (including online), producer-wholesaler-consumer, producer-retailer-consumer",
        "sampleAnswer": "Manny could use a producer-retailer-consumer distribution channel, selling his printed t-shirts through independent clothing retailers or department stores rather than only from his factory shop. This would allow his t-shirts to reach a wider range of customers across different locations than his current single outlet."
    },
    {
        "id":  "bs-2-riverview14-2",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Marketing",
        "source":  "Riverview 2014 Trial HSC (Q21b)",
        "stimulus":  "Manny is thinking about expanding his business selling printed t-shirts. He currently has a small shop selling the shirts at the front of his factory.",
        "question":  "Describe ONE physical distribution issue that may impact Manny\u0027s expansion.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Correctly describes ONE physical distribution issue that would be relevant for Manny\u0027s t-shirt business"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Correctly outlines ONE physical distribution issue that would be relevant for Manny\u0027s t-shirt business"
                         }
                     ],
        "keyPoints":  "Possible issues: transport (road, air, rail, sea); warehousing (receiving, storing and dispatching goods efficiently); inventory control",
        "sampleAnswer": "One physical distribution issue is transport, as Manny would need to decide how to move his t-shirts from his factory to new retail outlets, for example by road freight, which affects delivery speed, cost and reliability as his business expands beyond his single shopfront."
    },
    {
        "id":  "bs-6-riverview14-1",
        "criteriaSource": "derived",
        "marks":  6,
        "topic":  "Marketing",
        "source":  "Riverview 2014 Trial HSC (Q21c)",
        "stimulus":  "Manny is thinking about expanding his business selling printed t-shirts. He currently has a small shop selling the shirts at the front of his factory. Manny wants to offer a new design service where he custom designs and produces t-shirts for individuals and teams, meeting their specific needs.",
        "question":  "How can Manny\u0027s strategies for people, processes and physical evidence ensure this new service is a success?",
        "criteria":  [
                         {
                             "marks":  6,
                             "descriptor":  "Correctly and thoroughly explains how all THREE strategies (people, processes, physical evidence) can ensure Manny\u0027s new design service is a success"
                         },
                         {
                             "marks":  5,
                             "descriptor":  "Correctly explains how the THREE strategies can ensure Manny\u0027s business success, with slightly less depth or development"
                         },
                         {
                             "marks":  4,
                             "descriptor":  "Correctly explains TWO strategies that may be relevant to Manny\u0027s business"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Correctly explains ONE strategy, or provides a general explanation of two strategies, relevant to Manny\u0027s business"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Identifies and briefly outlines ONE or more strategies that may be relevant to Manny\u0027s business"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Identifies ONE strategy that may or may not be relevant to Manny\u0027s business"
                         }
                     ],
        "keyPoints":  "People - qualified, competent staff providing excellent customer service and design advice; Processes - efficient, customisable flow of activities from initial enquiry to final delivery of the custom t-shirt; Physical evidence - the environment in which the service is delivered (clean, safe, presentable factory/shopfront), plus packaging and labelling that reinforce the brand",
        "sampleAnswer": "People are central to the success of Manny\u0027s new custom design service, as staff need design expertise and strong customer service skills to accurately interpret and deliver each customer\u0027s or team\u0027s specific requirements, building trust and repeat business. Processes must be efficient and flexible, covering the full journey from initial design enquiry, through approval of a mock-up, to production and delivery, ensuring custom orders are completed accurately and on time despite their more variable nature than standard t-shirts. Physical evidence, such as a clean, professional factory and shopfront and well-presented packaging and labelling, reinforces the quality and credibility of the new service, giving customers confidence in a service they cannot inspect before ordering. When these three elements work together, customers experience a seamless, professional process from enquiry to finished product, helping Manny successfully establish his design service in a competitive market."
    },
    {
        "id":  "bs-2-riverview14-3",
        "criteriaSource": "derived",
        "marks":  2,
        "topic":  "Operations",
        "source":  "Riverview 2014 Trial HSC (Q22a)",
        "stimulus":  "ZenPlastic Pty Ltd manufactures a range of plastic goods at their plant in Blacktown. They are reviewing their operations process after being fined for poor waste disposal practices.",
        "question":  "Outline ONE legal regulation that may affect operations management at ZenPlastic.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Identifies a relevant legal regulation and outlines its general impact on operations at ZenPlastic"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Identifies a relevant legal regulation only, with little or no explanation of its impact on operations"
                         }
                     ],
        "keyPoints":  "Possible regulations: Work Health and Safety Act (duty of care over workplace safety); Fair Work Act (rostering, overtime, rest breaks); Environmental Protection and Biodiversity Conservation Act (standards for waste management and resource use); Workers Compensation Act (compulsory insurance for workplace injuries)",
        "sampleAnswer": "The Environmental Protection and Biodiversity Conservation Act sets standards for waste management and resource use that ZenPlastic must comply with in its manufacturing operations, meaning it must properly dispose of plastic waste or face further penalties, as it has already experienced after being fined."
    },
    {
        "id":  "bs-2-riverview14-4",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Operations",
        "source":  "Riverview 2014 Trial HSC (Q22b)",
        "stimulus":  "ZenPlastic Pty Ltd manufactures a range of plastic goods at their plant in Blacktown. They are reviewing their operations process after being fined for poor waste disposal practices.",
        "question":  "How could environmental sustainability influence ZenPlastic\u0027s operation process?",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Provides a cause and effect relationship between environmental sustainability and its impact on ZenPlastic\u0027s operations process"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Defines environmental sustainability and/or attempts to link it to the operations process, without clearly demonstrating a cause and effect relationship"
                         }
                     ],
        "keyPoints":  "Environmental sustainability means reducing unnecessary waste, increasing efficiency in transforming inputs into outputs, and/or changing inputs to be more environmentally friendly",
        "sampleAnswer": "Environmental sustainability means reducing unnecessary waste and increasing efficiency in transforming inputs into outputs. This could influence ZenPlastic\u0027s operations process by encouraging it to switch to recycled or biodegradable plastic inputs and adopt more efficient production methods, reducing the waste that led to its recent fine."
    },
    {
        "id":  "bs-6-riverview14-2",
        "criteriaSource": "derived",
        "marks":  6,
        "topic":  "Operations",
        "source":  "Riverview 2014 Trial HSC (Q22c)",
        "stimulus":  "ZenPlastic Pty Ltd manufactures a range of plastic goods at their plant in Blacktown. They are reviewing their operations process after being fined for poor waste disposal practices. ZenPlastic are considering outsourcing some production to Germany to access highly skilled labour, machinery and proximity to new markets.",
        "question":  "Explain TWO influences on operations that may have led to this decision.",
        "criteria":  [
                         {
                             "marks":  6,
                             "descriptor":  "Provides a clear cause and effect relationship between EACH of TWO influences and ZenPlastic\u0027s decision to outsource production to Germany (3 marks per influence)"
                         },
                         {
                             "marks":  5,
                             "descriptor":  "Provides a strong explanation of TWO influences with mostly clear cause and effect links, with minor gaps"
                         },
                         {
                             "marks":  4,
                             "descriptor":  "Explains ONE influence with a clear cause and effect relationship, and sketches the second influence in general terms"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Sketches in general terms the relationship between TWO influences and the decision to outsource"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Sketches in general terms the relationship between ONE influence and the decision to outsource, with limited reference to a second"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Identifies ONE influence relevant to the decision to outsource, with minimal explanation"
                         }
                     ],
        "keyPoints":  "Possible influences: technology (superior German machinery, CAD/CAM improving accuracy and efficiency); quality expectations (access to highly skilled labour improving quality); globalisation (proximity to new international markets, reduced trade barriers)",
        "sampleAnswer": "Technology is one influence on ZenPlastic\u0027s decision to outsource to Germany, as German manufacturers often use superior CAD/CAM machinery, which would allow ZenPlastic to produce plastic goods with greater precision and less waste than its current Blacktown plant, improving quality and helping avoid further environmental penalties. Quality expectations are a second influence, as outsourcing to Germany gives ZenPlastic access to highly skilled labour capable of meeting stricter production and safety standards, improving the overall quality and consistency of its plastic products. Globalisation is a further influence, as outsourcing to Germany places ZenPlastic closer to new European markets and reduces trade barriers, allowing it to distribute its goods more efficiently once expanded. Together, these influences suggest ZenPlastic\u0027s move to Germany is driven by a desire to access better technology and skilled labour while positioning itself for global growth, directly responding to the operational problems that led to its recent fine."
    },
    {
        "id":  "bs-2-riverview14-5",
        "criteriaSource": "derived",
        "marks":  2,
        "topic":  "Human Resources",
        "source":  "Riverview 2014 Trial HSC (Q23a)",
        "stimulus":  "Harris Pty Ltd is a successful luxury boat construction business with 30 full time and 15 casual employees.",
        "question":  "Identify one common law obligation of employers, and ONE common law obligation of employees.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Correctly identifies ONE common law obligation of employers AND ONE common law obligation of employees (1 mark each)"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Correctly identifies ONE common law obligation of EITHER employers OR employees"
                         }
                     ],
        "keyPoints":  "Employer obligations: duty of care, duty to pay the agreed wage, duty to provide work. Employee obligations: duty to obey lawful instructions, duty to work with skill, duty to disclose relevant information",
        "sampleAnswer": "One common law obligation of Harris Pty Ltd as employer is to exercise a duty of care for its employees\u0027 health and safety. One common law obligation of its employees is to obey the lawful and reasonable instructions given by their employer."
    },
    {
        "id":  "bs-4-riverview14-1",
        "criteriaSource": "official",
        "marks":  4,
        "topic":  "Human Resources",
        "source":  "Riverview 2014 Trial HSC (Q23b)",
        "stimulus":  "Harris Pty Ltd is a successful luxury boat construction business with 30 full time and 15 casual employees.",
        "question":  "Distinguish between an award and an enterprise agreement.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Clearly distinguishes the differences between awards and enterprise agreements"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Shows how awards and enterprise agreements are similar or different"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Sketches in general terms the difference between awards and enterprise agreements"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Identifies a difference between enterprise agreements and awards"
                         }
                     ],
        "keyPoints":  "Award = legal document prescribed by the Fair Work Commission outlining minimum wages and conditions for a whole industry. Enterprise agreement = negotiated, documented agreement between one or more employers and their employees, registered by Fair Work Australia only if employees are Better Off Overall (BOOT) than under the relevant award",
        "sampleAnswer": "An award is a legal document set by the Fair Work Commission that outlines minimum wages and conditions for an entire industry, such as the boat-building industry Harris Pty Ltd operates in. An enterprise agreement, by contrast, is negotiated directly between an individual employer, like Harris Pty Ltd, and its employees, and can only be registered by Fair Work Australia if it leaves employees better off overall than they would be under the relevant award. Unlike an award, an enterprise agreement is tailored specifically to one workplace\u0027s needs."
    },
    {
        "id":  "bs-4-riverview14-2",
        "criteriaSource": "derived",
        "marks":  4,
        "topic":  "Human Resources",
        "source":  "Riverview 2014 Trial HSC (Q23c)",
        "stimulus":  "Harris Pty Ltd is a successful luxury boat construction business with 30 full time and 15 casual employees.",
        "question":  "Explain how economic influences may impact the human resource processes of acquisition and maintenance at Harris Pty Ltd.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Relates cause and effect from an economic influence to the impact on BOTH the acquisition and maintenance processes, specifically in relation to Harris Pty Ltd and its situation"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Relates cause and effect from an economic influence to the impact on acquisition and maintenance, but with no reference to the stimulus or with a weaker understanding of one concept"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Relates cause and effect from an economic influence to the impact on EITHER acquisition OR maintenance, with reasonable development"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Relates cause and effect from an economic influence to the impact on EITHER acquisition OR maintenance, in a limited way"
                         }
                     ],
        "keyPoints":  "Economic influences: business cycle, interest rates, inflation. A boom increases demand for boats, requiring Harris to expand its workforce (acquisition - planning, recruitment, selection), while competitors also try to poach staff with higher pay, forcing Harris to review rewards to retain staff (maintenance)",
        "sampleAnswer": "An economic boom increases demand for luxury boats, which would require Harris Pty Ltd to expand its workforce through the acquisition process - planning, recruiting and selecting new staff to meet rising production needs. At the same time, competing boat builders may also try to poach skilled staff by offering higher pay during the boom, forcing Harris to review its rewards and conditions through the maintenance process to retain its existing 30 full-time and 15 casual employees."
    },
    {
        "id":  "bs-2-riverview14-6",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Finance",
        "source":  "Riverview 2014 Trial HSC (Q24a)",
        "stimulus":  {
                         "blocks":  [
                                        {
                                            "type":  "text",
                                            "text":  "Balance Sheet for Dunn\u0027s Drums\nAs at 30 June 2014"
                                        },
                                        {
                                            "type":  "table",
                                            "title":  "Balance Sheet",
                                            "columns":  [
                                                            "",
                                                            "$",
                                                            "$"
                                                        ],
                                            "rows":  [
                                                         [
                                                             "Current Assets",
                                                             "",
                                                             ""
                                                         ],
                                                         [
                                                             "Cash",
                                                             "6,000",
                                                             ""
                                                         ],
                                                         [
                                                             "Accounts Receivable",
                                                             "15,000",
                                                             ""
                                                         ],
                                                         [
                                                             "Stock",
                                                             "14,000",
                                                             "35,000"
                                                         ],
                                                         [
                                                             "Non-Current Assets",
                                                             "",
                                                             ""
                                                         ],
                                                         [
                                                             "Property, Plant \u0026 Equipment",
                                                             "25,000",
                                                             ""
                                                         ],
                                                         [
                                                             "Motor Vehicle",
                                                             "20,000",
                                                             "45,000"
                                                         ],
                                                         [
                                                             "Total Assets",
                                                             "",
                                                             "80,000"
                                                         ],
                                                         [
                                                             "Current Liabilities",
                                                             "",
                                                             ""
                                                         ],
                                                         [
                                                             "Credit Card",
                                                             "4,000",
                                                             ""
                                                         ],
                                                         [
                                                             "Accounts Payable",
                                                             "18,000",
                                                             "22,000"
                                                         ],
                                                         [
                                                             "Non-Current Liabilities",
                                                             "",
                                                             ""
                                                         ],
                                                         [
                                                             "Loan",
                                                             "",
                                                             "20,000"
                                                         ],
                                                         [
                                                             "Owners Equity",
                                                             "",
                                                             ""
                                                         ],
                                                         [
                                                             "Capital",
                                                             "20,000",
                                                             ""
                                                         ],
                                                         [
                                                             "Retained Profits",
                                                             "18,000",
                                                             "38,000"
                                                         ],
                                                         [
                                                             "Total Liabilities \u0026 Owners Equity",
                                                             "",
                                                             "80,000"
                                                         ]
                                                     ]
                                        }
                                    ]
                     },
        "question":  "Calculate the Current Ratio (Current Assets ÷ Current Liabilities) for this business. Show all working correct to one decimal place.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Correctly calculates the ratio with all working shown"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Correctly calculates the ratio but does not show working"
                         }
                     ],
        "keyPoints":  "Current Ratio = Current Assets ÷ Current Liabilities = $35,000 ÷ $22,000 = 1.6:1",
        "sampleAnswer": "Current Ratio = Current Assets ($35,000) ÷ Current Liabilities ($22,000) = 1.6:1."
    },
    {
        "id":  "bs-2-riverview14-7",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Finance",
        "source":  "Riverview 2014 Trial HSC (Q24b)",
        "stimulus":  {
                         "blocks":  [
                                        {
                                            "type":  "text",
                                            "text":  "Balance Sheet for Dunn\u0027s Drums\nAs at 30 June 2014"
                                        },
                                        {
                                            "type":  "table",
                                            "title":  "Balance Sheet",
                                            "columns":  [
                                                            "",
                                                            "$",
                                                            "$"
                                                        ],
                                            "rows":  [
                                                         [
                                                             "Current Assets",
                                                             "",
                                                             ""
                                                         ],
                                                         [
                                                             "Cash",
                                                             "6,000",
                                                             ""
                                                         ],
                                                         [
                                                             "Accounts Receivable",
                                                             "15,000",
                                                             ""
                                                         ],
                                                         [
                                                             "Stock",
                                                             "14,000",
                                                             "35,000"
                                                         ],
                                                         [
                                                             "Non-Current Assets",
                                                             "",
                                                             ""
                                                         ],
                                                         [
                                                             "Property, Plant \u0026 Equipment",
                                                             "25,000",
                                                             ""
                                                         ],
                                                         [
                                                             "Motor Vehicle",
                                                             "20,000",
                                                             "45,000"
                                                         ],
                                                         [
                                                             "Total Assets",
                                                             "",
                                                             "80,000"
                                                         ],
                                                         [
                                                             "Current Liabilities",
                                                             "",
                                                             ""
                                                         ],
                                                         [
                                                             "Credit Card",
                                                             "4,000",
                                                             ""
                                                         ],
                                                         [
                                                             "Accounts Payable",
                                                             "18,000",
                                                             "22,000"
                                                         ],
                                                         [
                                                             "Non-Current Liabilities",
                                                             "",
                                                             ""
                                                         ],
                                                         [
                                                             "Loan",
                                                             "",
                                                             "20,000"
                                                         ],
                                                         [
                                                             "Owners Equity",
                                                             "",
                                                             ""
                                                         ],
                                                         [
                                                             "Capital",
                                                             "20,000",
                                                             ""
                                                         ],
                                                         [
                                                             "Retained Profits",
                                                             "18,000",
                                                             "38,000"
                                                         ],
                                                         [
                                                             "Total Liabilities \u0026 Owners Equity",
                                                             "",
                                                             "80,000"
                                                         ]
                                                     ]
                                        }
                                    ]
                     },
        "question":  "Calculate the Debt to Equity Ratio (Total Liabilities ÷ Total Equity). Show all working correct to one decimal place.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Correctly calculates the ratio with all working shown"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Correctly calculates the ratio but does not show working"
                         }
                     ],
        "keyPoints":  "Total Liabilities = $22,000 + $20,000 = $42,000; Total Equity = $38,000; Debt to Equity Ratio = $42,000 ÷ $38,000 = 1.1:1 (approximately 52.5% financed by debt)",
        "sampleAnswer": "Total Liabilities = $22,000 + $20,000 = $42,000; Total Equity = $38,000. Debt to Equity Ratio = $42,000 ÷ $38,000 = 1.1:1."
    },
    {
        "id":  "bs-2-riverview14-8",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Finance",
        "source":  "Riverview 2014 Trial HSC (Q24c)",
        "stimulus":  null,
        "question":  "Why is it important for a business to control its debt to equity ratio?",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Correctly explains why it is important for a business to control its debt to equity ratio"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Provides a brief outline of why controlling the debt to equity ratio matters"
                         }
                     ],
        "keyPoints":  "Debt to equity ratio measures long-term financial stability and ability to meet liabilities; a higher ratio means the business is more unstable and vulnerable to rising interest expenses, particularly when interest rates increase",
        "sampleAnswer": "The debt to equity ratio measures a business\u0027s long-term financial stability by comparing its total liabilities to total equity. It is important to control because a higher ratio means the business relies more heavily on debt, making it more vulnerable to rising interest costs and increasing the risk it cannot meet its long-term liabilities."
    },
    {
        "id":  "bs-4-riverview14-3",
        "criteriaSource": "derived",
        "marks":  4,
        "topic":  "Finance",
        "source":  "Riverview 2014 Trial HSC (Q24d)",
        "stimulus":  null,
        "question":  "Discuss the use of debt and equity financing.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Correctly provides a description of both debt and equity finance, with advantages and disadvantages of each, discussing their relative merits"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Provides a good description of debt and equity finance with some advantages and disadvantages of each"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Provides details of debt and equity finance and may provide some advantages/disadvantages"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Briefly identifies debt and/or equity finance with limited detail"
                         }
                     ],
        "keyPoints":  "Debt: interest tax-deductible, doesn\u0027t dilute ownership, but can be expensive, requires immediate repayments, may need personal guarantees and good credit history. Equity: doesn\u0027t need to be repaid, no interest, no immediate repayments, but dilutes ownership, not tax-deductible, and shares future profits with new owners",
        "sampleAnswer": "Debt finance, borrowed from external sources, has the advantage that interest payments are tax-deductible and ownership is not diluted, but it must be repaid on a fixed schedule regardless of profit and often requires personal guarantees or a strong credit history. Equity finance, from internal or external owners, does not need to be repaid and involves no interest, but it dilutes ownership and means future profits must be shared with new owners. The best choice depends on the business\u0027s need to retain control versus its ability to service regular debt repayments."
    },
    {
        "id":  "bs-2-shore15-1",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Operations",
        "source":  "Shore 2015 Trial HSC (Q21a)",
        "stimulus":  null,
        "question":  "Identify ONE transformed and ONE transforming resource used in the production of a cup of coffee.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Names ONE transformed resource AND ONE transforming resource"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Names ONE (or two) transformed resources OR ONE (or two) transforming resources only"
                         }
                     ],
        "keyPoints":  "Transformed resources: materials, information, customers. Transforming resources: human resources, facilities",
        "sampleAnswer": "A transformed resource used in making a cup of coffee is the coffee beans and water, which are converted into the final product. A transforming resource is the barista, whose labour and skill operates the coffee machine to carry out the transformation process."
    },
    {
        "id":  "bs-4-shore15-1",
        "criteriaSource": "official",
        "marks":  4,
        "topic":  "Operations",
        "source":  "Shore 2015 Trial HSC (Q21b)",
        "stimulus":  null,
        "question":  "Explain how technology could influence the operations processes of a business.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Defines technology and clearly links the effect of technology on the inputs, operations processes and outputs of a business, linking its use to efficiency and effective production, with an example"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Defines technology and sketches in general terms its effect on the inputs, operations processes and outputs of a business"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Defines technology in detail, OR outlines the effect of technology on the inputs, operations processes and outputs of a business"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Mentions technology or its impact on the operations process"
                         }
                     ],
        "keyPoints":  "Technology in the transformation process; leading edge vs established technology; examples such as CAD/CAM improving quality and reducing costs",
        "sampleAnswer": "Technology is the application of scientific knowledge to improve inputs, transformation processes and outputs. Using leading-edge or established technology, such as computer-aided design and manufacturing (CAD/CAM), can improve the efficiency of a business\u0027s operations process by increasing the speed and precision of production while reducing human error and waste. For example, a car manufacturer using CAD/CAM to design and cut components can reduce material waste and production time, lowering costs and improving quality compared to manual methods."
    },
    {
        "id":  "bs-4-shore15-2",
        "criteriaSource": "official",
        "marks":  4,
        "topic":  "Operations",
        "source":  "Shore 2015 Trial HSC (Q21c)",
        "stimulus":  null,
        "question":  "Explain why corporate social responsibility is a key concern of operations management.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Defines corporate social responsibility and relates the effect of CSR on customer perception of the business, sales and profits, linking CSR with the financial, social and environmental goals of the business (triple bottom line)"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Defines corporate social responsibility and sketches in general terms its link to customer perception, sales and profits"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Defines corporate social responsibility, OR relates the effect of CSR to customer perception, sales and profits"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Outlines corporate social responsibility"
                         }
                     ],
        "keyPoints":  "CSR = going beyond legal compliance to consider environmental sustainability and social responsibility (triple bottom line); affects public perception, brand image, sales and profits",
        "sampleAnswer": "Corporate social responsibility (CSR) is a business\u0027s commitment to ethical behaviour that goes beyond its legal obligations, considering its impact on the environment and community alongside its financial performance - the triple bottom line. CSR is a key concern in operations management because customers increasingly favour businesses seen to source and produce goods responsibly, so demonstrating CSR, such as using sustainable materials, can improve customer perception and brand image, which flows through to increased sales and profits. Neglecting CSR risks damaging reputation and reducing sales."
    },
    {
        "id":  "bs-1-shore15-1",
        "criteriaSource": "official",
        "marks":  1,
        "topic":  "Human Resources",
        "source":  "Shore 2015 Trial HSC (Q22a)",
        "stimulus":  null,
        "question":  "Identify TWO stakeholders of the human resource function.",
        "criteria":  [
                         {
                             "marks":  1,
                             "descriptor":  "Names TWO stakeholders of the human resource function"
                         }
                     ],
        "keyPoints":  "Employers, employees, unions, employer associations, government organisations, society",
        "sampleAnswer": "Two stakeholders of the human resource function are employees and trade unions."
    },
    {
        "id":  "bs-2-shore15-2",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Human Resources",
        "source":  "Shore 2015 Trial HSC (Q22b)",
        "stimulus":  null,
        "question":  "Outline TWO minimum employment standards a Human Resource department should be aware of when re-negotiating a new enterprise agreement.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Sketches in general terms TWO minimum employment standards"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Sketches in general terms ONE minimum employment standard"
                         }
                     ],
        "keyPoints":  "National Employment Standards (NES) include: maximum weekly hours, flexible work requests, parental leave, annual leave, personal/carer\u0027s and compassionate leave, community service leave, long service leave, public holidays, notice of termination, provision of a Fair Work Information Statement",
        "sampleAnswer": "Two minimum employment standards under the National Employment Standards are maximum weekly hours, generally capped at 38 hours per week, and annual leave, which entitles full-time employees to at least four weeks of paid leave each year. An enterprise agreement cannot offer conditions worse than these standards."
    },
    {
        "id":  "bs-3-shore15-1",
        "criteriaSource": "official",
        "marks":  3,
        "topic":  "Human Resources",
        "source":  "Shore 2015 Trial HSC (Q22c)",
        "stimulus":  null,
        "question":  "How do unions influence human resource management? In your answer, identify a specific union.",
        "criteria":  [
                         {
                             "marks":  3,
                             "descriptor":  "Provides how unions influence human resources including a relevant example"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Describes a union with limited reference to its influence on human resource management, OR sketches in general terms the main features of a union and names one relevant union"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Sketches in general terms the main features of a union, OR names one relevant union"
                         }
                     ],
        "keyPoints":  "Unions act on behalf of employees in collective bargaining, advise on unfair dismissals and discrimination, make safety net wage claims, negotiate agreements, and lobby government. Example: ACTU, Transport Workers Union",
        "sampleAnswer": "Unions influence human resource management by representing employees in collective bargaining over wages and conditions, advising members on issues such as unfair dismissal or discrimination, and lobbying government for changes to workplace laws. For example, the Transport Workers\u0027 Union negotiates on behalf of transport industry employees during enterprise agreement negotiations and campaigns to improve safety standards in the industry, directly shaping the HR policies businesses in that sector must adopt."
    },
    {
        "id":  "bs-4-shore15-3",
        "criteriaSource": "official",
        "marks":  4,
        "topic":  "Human Resources",
        "source":  "Shore 2015 Trial HSC (Q22d)",
        "stimulus":  null,
        "question":  "Explain ONE advantage and ONE disadvantage of globally outsourcing.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Defines global outsourcing and relates cause and effect of ONE advantage and ONE disadvantage of global outsourcing, making a clear link between each and its effect on the business"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Defines global outsourcing and sketches in general terms ONE advantage and ONE disadvantage, OR relates cause and effect of ONE advantage and ONE disadvantage without a full definition"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Sketches in general terms ONE advantage and ONE disadvantage of global outsourcing, OR defines global outsourcing and sketches ONE advantage or disadvantage"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Defines global outsourcing only"
                         }
                     ],
        "keyPoints":  "Advantages: cost savings, economies of scale, regulatory differences, access to new ideas, allows business to focus on core activity. Disadvantages: ethical considerations/reputation risk, loss of quality, communication issues, logistics complexity, cultural differences",
        "sampleAnswer": "Global outsourcing is the practice of contracting a business function to an external provider overseas. One advantage is cost savings, as labour and other expenses are often cheaper overseas, allowing the business to reduce operating costs and focus on its core activities. One disadvantage is the ethical risk to reputation if the overseas provider is found to use poor labour conditions, as well as potential quality and communication issues arising from cultural and language differences with a distant provider."
    },
    {
        "id":  "bs-2-shore15-3",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Marketing",
        "source":  "Shore 2015 Trial HSC (Q23a)",
        "stimulus":  "Bronie and Debs own a coffee shop in Bondi. They specialise in the sale of organic coffee. An international franchise has opened a coffee shop in the area in response to the growing population. As a result, Bronie and Debs are unsure how to market their business successfully.",
        "question":  "What is ONE possible weakness of Bronie and Debs\u0027 coffee shop?",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Clear identification of ONE possible weakness of Bronie and Deb\u0027s coffee shop, with supporting reasons"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Identification of ONE possible weakness of Bronie and Deb\u0027s coffee shop, without supporting reasons"
                         }
                     ],
        "keyPoints":  "Possible weaknesses: limited/niche market for organic coffee, limited product range, smaller marketing budget than an international franchise, less brand recognition",
        "sampleAnswer": "One possible weakness of Bronie and Debs\u0027 coffee shop is its narrow, niche focus on organic coffee, which limits its potential customer base compared with the wider product range and greater brand recognition offered by the new international franchise entering their area."
    },
    {
        "id":  "bs-4-shore15-4",
        "criteriaSource": "official",
        "marks":  4,
        "topic":  "Marketing",
        "source":  "Shore 2015 Trial HSC (Q23b)",
        "stimulus":  "Bronie and Debs own a coffee shop in Bondi. They specialise in the sale of organic coffee. An international franchise has opened a coffee shop in the area in response to the growing population. As a result, Bronie and Debs are unsure how to market their business successfully.",
        "question":  "Explain how Bronie and Debs would implement, monitor and control their marketing process.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Clear explanation of how Bronie and Debs would implement, monitor and control their marketing process"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Good explanation of how Bronie and Debs would implement, monitor and control their marketing process"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Weak explanation of how Bronie and Debs would implement, monitor and control their marketing process"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Poor/limited explanation of how Bronie and Debs would implement, monitor and control their marketing process"
                         }
                     ],
        "keyPoints":  "Implementation = putting the marketing plan into action (financial forecasts, deciding how/where/when strategies are carried out); Monitoring = checking how implementation is translating into results (e.g. sales); Control = comparing planned versus actual performance and revising the plan where needed",
        "sampleAnswer": "Implementation involves putting the marketing plan into action, such as Bronie and Debs deciding how, where and when to promote their organic coffee, supported by a financial forecast for the campaign. Monitoring involves regularly checking how this implementation is translating into results, such as tracking daily coffee sales after a new promotion begins. Control involves comparing this actual performance against the planned targets and revising the marketing strategy if results fall short, for example changing pricing or promotion if sales don\u0027t recover after the franchise opens."
    },
    {
        "id":  "bs-4-shore15-5",
        "criteriaSource": "official",
        "marks":  4,
        "topic":  "Marketing",
        "source":  "Shore 2015 Trial HSC (Q23c)",
        "stimulus":  "Bronie and Debs own a coffee shop in Bondi. They specialise in the sale of organic coffee. An international franchise has opened a coffee shop in the area in response to the growing population. As a result, Bronie and Debs are unsure how to market their business successfully.",
        "question":  "Discuss ONE price strategy Bronie and Debs could use to respond to the threat posed by the opening of the international franchise in the area.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Discusses ONE price strategy Bronie and Debs could use to respond to the threat, with points for and against the strategy"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Discusses ONE price strategy with limited discussion of points for and against"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Discusses ONE price strategy without discussion of both for and against"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Weak answer identifying ONE price strategy Bronie and Debs could use to respond to the threat"
                         }
                     ],
        "keyPoints":  "Possible strategies: price skimming, price penetration, loss leaders, price points - should weigh benefits (differentiation, higher margin/premium positioning) against drawbacks (risk of losing price-sensitive customers)",
        "sampleAnswer": "Bronie and Debs could use price skimming, setting a premium price that reflects the quality of their specialty organic coffee compared to a mass-market franchise. This could reinforce their point of difference and protect their profit margins from an international competitor. However, a premium price risks losing price-sensitive customers to the more affordable franchise, particularly given the growing local population may include many new, less loyal customers. On balance, this strategy could work if paired with strong promotion of their organic quality."
    },
    {
        "id":  "bs-2-shore15-4",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Finance",
        "source":  "Shore 2015 Trial HSC (Q24a)",
        "stimulus":  null,
        "question":  "What is the role of the Australian Securities and Investment Commission (ASIC)?",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Describes the role of the ASIC"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Sketches in general terms the role of the ASIC"
                         }
                     ],
        "keyPoints":  "ASIC is an independent statutory government body that enforces and administers the Corporations Act 2001, protects consumers in investment, life and general insurance, superannuation and banking, aims to reduce fraud and unfair practices in financial markets, and ensures companies adhere to the law",
        "sampleAnswer": "ASIC (the Australian Securities and Investments Commission) is an independent government body that administers the Corporations Act 2001, regulating companies and financial markets. It protects consumers in investment, insurance, superannuation and banking, and works to reduce fraud and unfair practices in financial markets."
    },
    {
        "id":  "bs-2-shore15-5",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Finance",
        "source":  "Shore 2015 Trial HSC (Q24b)",
        "stimulus":  null,
        "question":  "What is a derivative and explain how it might be used by a business.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Explains what a derivative is and how it might be used by a business"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Sketches in general terms what a derivative is"
                         }
                     ],
        "keyPoints":  "A derivative is a financial instrument based on (derived from) another commodity or financial instrument; used by businesses to hedge against risks such as currency fluctuations by locking in a rate today for a future date",
        "sampleAnswer": "A derivative is a financial instrument whose value is based on, or derived from, another underlying asset or financial instrument, such as a currency or commodity. A business might use a derivative to hedge against risk, for example locking in today\u0027s exchange rate for a future international payment to protect against unfavourable currency movements."
    },
    {
        "id":  "bs-2-shore15-6",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Finance",
        "source":  "Shore 2015 Trial HSC (Q24c)",
        "stimulus":  null,
        "question":  "Explain why it is important to match the terms and source of finance to business purpose.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Explains why it is important to match the terms and source of finance to business purpose"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Attempts to explain why it is important to match the terms and source of finance to business purpose"
                         }
                     ],
        "keyPoints":  "Matching terms and source of finance ensures the most efficient use of available funds; long-term finance should fund long-term assets and short-term finance should fund short-term assets, minimising unnecessary interest costs",
        "sampleAnswer": "Matching the terms and source of finance to business purpose means using long-term finance, such as a mortgage, to fund long-term assets like property, and short-term finance, such as an overdraft, to fund short-term needs. This ensures the most efficient use of funds and avoids paying unnecessary interest on a loan that is longer or larger than needed."
    },
    {
        "id":  "bs-4-shore15-6",
        "criteriaSource": "official",
        "marks":  4,
        "topic":  "Finance",
        "source":  "Shore 2015 Trial HSC (Q24d)",
        "stimulus":  null,
        "question":  "Recommend ONE working capital management strategy and ONE cost control strategy available to businesses.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Recommends and clearly justifies ONE working capital management strategy AND ONE cost control strategy"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Recommends with general justification ONE working capital management strategy AND ONE cost control strategy"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Recommends with weak justification ONE working capital strategy OR ONE cost control strategy, OR lists ONE of each without justification"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Lists ONE working capital strategy OR ONE cost control strategy"
                         }
                     ],
        "keyPoints":  "Working capital strategies: control of current assets, control of current liabilities, leasing, sale and lease back. Cost controls: fixed and variable cost management, cost centres, expense minimisation",
        "sampleAnswer": "A suitable working capital management strategy is control of current assets, such as tightening credit terms on accounts receivable to speed up cash collection and ensure the business has enough liquid funds for daily operations. A suitable cost control strategy is expense minimisation, regularly reviewing and cutting unnecessary spending, such as renegotiating supplier contracts, to reduce costs without cutting into the quality of goods or services offered. Together, these strategies help a business remain both liquid and cost-efficient."
    },
    {
        "id":  "bs-2-shore19-1",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Operations",
        "source":  "Shore 2019 Trial HSC (Q21a)",
        "stimulus":  null,
        "question":  "Outline how operations is interdependent with finance.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Sketches in general terms the interdependence of operations and finance"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Defines operations OR finance OR defines interdependence"
                         }
                     ],
        "keyPoints":  "Interdependence is the mutual dependence key business functions have on one another; operations depends on finance to fund the transformed and transforming resources used in production; finance depends on operations to produce a good/service that can be sold to generate future funds.",
        "sampleAnswer": "Interdependence is the mutual reliance business functions have on one another. Operations depends on finance to fund the transformed and transforming resources used in production, while finance depends on operations producing goods or services that can be sold to generate the revenue needed to fund the business."
    },
    {
        "id":  "bs-4-shore19-1",
        "criteriaSource": "official",
        "marks":  4,
        "topic":  "Operations",
        "source":  "Shore 2019 Trial HSC (Q21b)",
        "stimulus":  null,
        "question":  "Using an example, explain how a business might monitor and control its operations process.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Clearly shows the effect of how a business might monitor and control its operations process, with reference to an example"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Shows the effect of how a business might monitor and control its operations process, with reference to an example"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Sketches in general terms how a business might monitor and control its operations process"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Reference to how an operations manager might monitor and control its operations process"
                         }
                     ],
        "keyPoints":  "Monitoring is measuring actual performance against planned performance; control occurs when KPIs are assessed against predetermined targets and corrective action taken if targets are not met; illustrate with a concrete example of a KPI being tracked and acted on.",
        "sampleAnswer": "Monitoring involves measuring actual performance against planned performance, while control involves comparing key performance indicators (KPIs) against predetermined targets and taking corrective action if targets are not met. For example, a manufacturer may monitor its defect rate weekly against a target of under 2%; if the actual rate rises to 5%, control would involve investigating the cause, such as faulty machinery, and taking corrective action like retraining staff or servicing equipment to bring performance back on target."
    },
    {
        "id":  "bs-4-shore19-2",
        "criteriaSource": "official",
        "marks":  4,
        "topic":  "Operations",
        "source":  "Shore 2019 Trial HSC (Q21c)",
        "stimulus":  null,
        "question":  "With reference to a business you have studied, explain how globalisation can influence the operations management of this business.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "With reference to a business, clearly shows how globalisation can influence the operations management of this business"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "With reference to a business, shows how globalisation can influence the operations management of this business"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Sketches in general terms how globalisation can influence operations management"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Makes reference to how globalisation can influence operations"
                         }
                     ],
        "keyPoints":  "Globalisation is the removal of trade barriers between nations, leading to a global market; it lets a business source inputs/materials via a global supply chain (the \u0027global web\u0027), globally outsource parts of production to reduce costs, and sell outputs to a wider global market, potentially achieving economies of scale.",
        "sampleAnswer": "Globalisation, the removal of trade barriers leading to a global market, has significantly influenced the operations management of businesses such as Nike. It has allowed Nike to source materials via a global web of suppliers, choosing manufacturers in countries like Vietnam for lower-cost, quality inputs. Nike has also globally outsourced much of its production to reduce labour costs, while selling its outputs to a worldwide customer base, allowing it to achieve economies of scale that lower its per-unit production costs and strengthen its competitive position."
    },
    {
        "id":  "bs-2-shore19-2",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Finance",
        "source":  "Shore 2019 Trial HSC (Q22a)",
        "stimulus":  null,
        "question":  "Outline the strategic role of financial management.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Sketches in general terms the strategic role of financial management"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Attempts to define financial management"
                         }
                     ],
        "keyPoints":  "The strategic role of financial management is the long-term planning and monitoring of a business\u0027s financial resources to allow the business to achieve its overall financial objective, typically profit maximisation.",
        "sampleAnswer": "The strategic role of financial management is the long-term planning and monitoring of a business\u0027s financial resources to help it achieve its overall financial objectives, typically profit maximisation, by ensuring funds are available to support the business\u0027s broader corporate strategy."
    },
    {
        "id":  "bs-4-shore19-3",
        "criteriaSource": "official",
        "marks":  4,
        "topic":  "Finance",
        "source":  "Shore 2019 Trial HSC (Q22b)",
        "stimulus":  null,
        "question":  "Using a business you have studied, recommend TWO cash flow management strategies this business could use to improve its cash flow.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Provides reasons in favour of TWO cash flow management strategies a business could use to improve its cash flow AND links to a case study"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Provides characteristics and features of TWO cash flow management strategies a business could use to improve cash flow AND links to a case study"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Indicates the features of ONE cash flow management strategy a business could use to improve its cash flow OR identifies TWO cash flow management strategies a business could use to improve cash flow"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Identifies ONE cash flow management strategy a business could use to reduce its cash flow"
                         }
                     ],
        "keyPoints":  "Cash flow management strategies could include: distribution of payments (spreading large expenses over the year into instalments), discounts for early payments, and factoring; recommendation should be linked to a real case study business.",
        "sampleAnswer": "A business such as a small retailer could use discounts for early payment, offering customers a small percentage off if they pay their account within a shorter period, which speeds up cash inflow. It could also use distribution of payments, spreading large annual expenses like insurance into smaller monthly instalments rather than one lump sum, smoothing out cash outflows across the year. Together these strategies would help the business maintain a more consistent and manageable cash flow throughout the year."
    },
    {
        "id":  "bs-4-shore19-4",
        "criteriaSource": "official",
        "marks":  4,
        "topic":  "Finance",
        "source":  "Shore 2019 Trial HSC (Q22c)",
        "stimulus":  null,
        "question":  "Explain why it is important for a business to match the terms and source of finance to business purpose.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Clearly makes evident the relationship between the Term (long or short) of the debt finance and the life of the assets (property, furniture and fittings) AND makes evident the relationship between the Source (Debt) of the finance and the Purpose of finance (costs of finance/capital structure/advantages of using long term debt finance)"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Sketches in general terms the relationship between the Term (long or short) of the finance and the life of the assets OR makes evident the relationship between the Source (Debt) of the finance and the Purpose of finance"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Sketches in general terms a type of debt finance and/or the terms of the debt finance"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Identifies a source of finance"
                         }
                     ],
        "keyPoints":  "Term of finance should relate to the purpose the business needs finance for, considering type of asset (current/non-current) and size of loan required; short-term sources (e.g. overdraft) suit quick access to relatively small amounts, while long-term sources (e.g. mortgage) suit larger amounts and longer-life assets; mismatching term and source increases costs (unnecessary interest/fees) through an inappropriate loan.",
        "sampleAnswer": "The term of finance should match the life of the asset it funds - short-term finance, such as an overdraft, suits short-term needs like current assets, while long-term finance, such as a mortgage, suits long-life assets like property. The source of finance, such as debt, should also match its purpose and cost, since debt carries interest obligations regardless of profit. Mismatching term and source, such as funding a long-term asset with a short-term loan, increases costs through unnecessary refinancing fees and interest."
    },
    {
        "id":  "bs-2-shore19-3",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Human Resources",
        "source":  "Shore 2019 Trial HSC (Q23a)",
        "stimulus":  "Nedbank Ltd is a large business with over 450 employees across Australia. Management at Nedbank Ltd need to reduce company costs due to its falling profits. Management has decided to outsource aspects of its Human Resource function to Manilla which will result in a number of redundancies. It is also due to re-negotiate the company\u0027s enterprise agreement with its staff.",
        "question":  "Identify the TWO stakeholders in the human resource process.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Correctly identifies the TWO stakeholders in the human resource process"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Correctly identifies ONE stakeholder in the human resource process"
                         }
                     ],
        "keyPoints":  "Answers could include: employers, employees, unions, employer associations, government, and society.",
        "sampleAnswer": "Two stakeholders in Nedbank Ltd\u0027s human resource process are its employees, over 450 of whom are affected by the outsourcing and redundancies, and the government, whose employment laws Nedbank must comply with when renegotiating its enterprise agreement and managing the redundancy process."
    },
    {
        "id":  "bs-4-shore19-5",
        "criteriaSource": "official",
        "marks":  4,
        "topic":  "Human Resources",
        "source":  "Shore 2019 Trial HSC (Q23b)",
        "stimulus":  "Nedbank Ltd is a large business with over 450 employees across Australia. Management at Nedbank Ltd need to reduce company costs due to its falling profits. Management has decided to outsource aspects of its Human Resource function to Manilla which will result in a number of redundancies. It is also due to re-negotiate the company\u0027s enterprise agreement with its staff.",
        "question":  "Explain how Nedbank Ltd should manage the process of separation.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Clearly shows how Nedbank Ltd should manage the process of separation"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Attempts to show how Nedbank Ltd would manage the process of separation"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Sketches in general terms separation"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Identifies types of separation"
                         }
                     ],
        "keyPoints":  "Separation is where an employee leaves a business, voluntarily or involuntarily; Nedbank\u0027s redundancies are involuntary separation; HR must be legally compliant (National Employment Standards minimum notice, up to 5 weeks\u0027 notice and up to 16 weeks\u0027 redundancy pay based on length of service); management should be transparent, communicate reasons clearly and in a timely manner, and consider the effect on the morale of remaining staff.",
        "sampleAnswer": "Separation occurs when an employee leaves a business, either voluntarily or involuntarily; Nedbank\u0027s redundancies are involuntary separations resulting from outsourcing its HR function to Manila. Nedbank must be legally compliant with the National Employment Standards, providing the required minimum notice period and redundancy pay based on each employee\u0027s length of service. Management should also be transparent, communicating the reasons for the redundancies clearly and in a timely manner, and consider the impact on the morale of remaining staff to maintain trust during the transition."
    },
    {
        "id":  "bs-4-shore19-6",
        "criteriaSource": "official",
        "marks":  4,
        "topic":  "Human Resources",
        "source":  "Shore 2019 Trial HSC (Q23c)",
        "stimulus":  "Nedbank Ltd is a large business with over 450 employees across Australia. Management at Nedbank Ltd need to reduce company costs due to its falling profits. Management has decided to outsource aspects of its Human Resource function to Manilla which will result in a number of redundancies. It is also due to re-negotiate the company\u0027s enterprise agreement with its staff.",
        "question":  "Describe TWO legal influences on human resource management at NedBank Ltd.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Provides characteristics and features of TWO legal influences on human resource management at Nedbank Ltd"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Sketches in general terms TWO legal influences on human resource management at Nedbank Ltd OR provides characteristics and features of ONE legal influence and identifies another legal influence"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Identifies TWO legal influences on human resource management OR sketches in general terms ONE legal influence on human resource management"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Identifies ONE legal influence on human resource management"
                         }
                     ],
        "keyPoints":  "Answers could include: the employment contract/common law (rights and obligations of employers and employees), minimum employment standards (National Employment Standards), minimum wage rates, awards, enterprise agreements, other employment contracts; work health and safety and workers compensation; anti-discrimination and equal employment opportunity.",
        "sampleAnswer": "One legal influence is the National Employment Standards, which set minimum entitlements such as notice periods and redundancy pay that Nedbank must provide to the employees affected by its outsourcing decision. A second legal influence is anti-discrimination and equal employment opportunity legislation, which requires Nedbank to ensure the selection of employees for redundancy, and the renegotiation of its enterprise agreement, does not unfairly discriminate against particular staff on the basis of characteristics like age or gender."
    },
    {
        "id":  "bs-2-shore19-4",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Marketing",
        "source":  "Shore 2019 Trial HSC (Q24a)",
        "stimulus":  null,
        "question":  "Outline the production approach to marketing.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Sketches in general terms the production approach to marketing"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Defines production"
                         }
                     ],
        "keyPoints":  "The production approach focuses business efforts on improving production methods rather than on customers or sales; it assumes that if a business produces goods and services, customers will buy them.",
        "sampleAnswer": "The production approach to marketing focuses a business\u0027s efforts on improving its production methods and efficiency rather than on customer needs or sales. It assumes that if a business produces goods, customers will automatically want to buy them, regardless of whether the goods meet consumer needs."
    },
    {
        "id":  "bs-2-shore19-5",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Marketing",
        "source":  "Shore 2019 Trial HSC (Q24b)",
        "stimulus":  null,
        "question":  "Using an example, describe how a business would use e-marketing to promote itself to its target market.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Gives characteristics and features of e-marketing and demonstrates how it can be used to promote a business to its target market. Must use an example"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Defines e-marketing, may use an example"
                         }
                     ],
        "keyPoints":  "E-marketing (electronic marketing) is the use of the internet to perform marketing activities; an example is using social media advertising to target and reach specific segments of the target market efficiently.",
        "sampleAnswer": "E-marketing is the use of the internet to carry out marketing activities. For example, a business could use targeted social media advertising to reach specific segments of its target market based on their online interests and behaviour, promoting its products more efficiently than traditional media."
    },
    {
        "id":  "bs-6-shore19-1",
        "criteriaSource": "derived",
        "marks":  6,
        "topic":  "Marketing",
        "source":  "Shore 2019 Trial HSC (Q24c)",
        "stimulus":  null,
        "question":  "With reference to a business you have studied, explain how this business could use different pricing strategies to market its goods and services.",
        "criteria":  [
                         {
                             "marks":  6,
                             "descriptor":  "(5-6 marks) Relates cause and effect of one or more pricing strategies on the marketing objectives of a business. Clearly defines at least one appropriate strategy AND links the use of this strategy to the business\u0027s marketing. Answer must refer to a case study business, showing how the strategy has resulted in achieving a marketing objective"
                         },
                         {
                             "marks":  4,
                             "descriptor":  "(3-4 marks) Sketches in general terms an appropriate price strategy and attempts to link it to a marketing objective. Refers to a case study business in the answer"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "(1-2 marks) May identify an appropriate price strategy, may refer to a case study business"
                         }
                     ],
        "keyPoints":  "Pricing strategies could include: price skimming, price points, penetration pricing and loss leaders; explanation should define at least one strategy and link its use to a case study business achieving a marketing objective (e.g. building market share, targeting different customer segments).",
        "sampleAnswer": "Apple uses price skimming as a pricing strategy, setting a high initial price for new products such as the iPhone when first released, to maximise revenue from customers willing to pay a premium for the latest technology before the price is gradually lowered. This links directly to Apple\u0027s marketing objective of maximising profit and reinforcing its premium brand image, since a high price signals exclusivity and quality to consumers. As competitors release similar products and demand from early adopters is satisfied, Apple gradually reduces the price, which then attracts more price-sensitive customers and extends the product\u0027s sales into a wider market segment. This shows how price skimming allows Apple to capture maximum revenue across different customer segments over the product\u0027s life, directly supporting its objectives of profit maximisation and maintaining a premium market position relative to competitors."
    },
    {
        "id":  "bs-1-shore20-1",
        "criteriaSource": "official",
        "marks":  1,
        "topic":  "Operations",
        "source":  "Shore 2020 Trial HSC (Q21a)",
        "stimulus":  null,
        "question":  "Identify TWO transformed resources.",
        "criteria":  [
                         {
                             "marks":  1,
                             "descriptor":  "Correctly identifies two transformed resources"
                         }
                     ],
        "keyPoints":  "Transformed resources are inputs that are converted, consumed or transformed by the business; examples include materials, information and customers",
        "sampleAnswer": "Two transformed resources are materials and information."
    },
    {
        "id":  "bs-4-shore20-1",
        "criteriaSource": "official",
        "marks":  4,
        "topic":  "Operations",
        "source":  "Shore 2020 Trial HSC (Q21b)",
        "stimulus":  null,
        "question":  "Explain how the use of sequencing and scheduling could improve the efficiency of the operations process.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Clearly shows the effect of how a business\u0027s use of sequencing and scheduling can improve the efficiency of an operations process"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Shows the effect of how a business\u0027s use of sequencing and scheduling can improve the efficiency of an operations process"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Sketches in general terms sequencing and scheduling as part of the operations process"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Provides some relevant information regarding sequencing and/or scheduling"
                         }
                     ],
        "keyPoints":  "Sequencing = the order in which tasks/activities are carried out; scheduling = the length of time allocated to each activity; tools such as Gantt charts and critical path analysis; link to improved quality, speed, customisation, cost and therefore overall efficiency",
        "sampleAnswer": "Sequencing is the order in which production tasks are carried out, while scheduling is the length of time allocated to each task. Using tools such as Gantt charts or critical path analysis, a business can plan tasks in the most logical order and allocate realistic timeframes, reducing idle time and bottlenecks in production. This improves the efficiency of the operations process by increasing speed and dependability, ensuring resources are used effectively and products are delivered to customers on time."
    },
    {
        "id":  "bs-5-shore20-1",
        "criteriaSource": "derived",
        "marks":  5,
        "topic":  "Operations",
        "source":  "Shore 2020 Trial HSC (Q21c)",
        "stimulus":  null,
        "question":  "With reference to a business you have studied, evaluate the use of technology by this business as an effective operations strategy.",
        "criteria":  [
                         {
                             "marks":  5,
                             "descriptor":  "With reference to a business, provides a clear, well-reasoned judgement based on criteria regarding the effective use of technology as an operations strategy"
                         },
                         {
                             "marks":  4,
                             "descriptor":  "With reference to a business, provides detailed characteristics and features of technology as an operations strategy, with some judgement"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "With reference to a business, provides characteristics and features of technology as an operations strategy"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Sketches in general terms how technology is used as an operations strategy; may refer to a business"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Provides some relevant information about technology as an operations strategy"
                         }
                     ],
        "keyPoints":  "Technology = application of improved inputs, transformation processes and outputs (often via automation); distinguish leading-edge vs established technology; link to improved quality, speed, dependability, customisation and cost; case study evidence/statistics; overall judgement on effectiveness",
        "sampleAnswer": "Toyota has used technology, such as robotic assembly lines and computer-aided manufacturing, as an operations strategy to improve the efficiency of its transformation process. This leading-edge technology increases the speed and dependability of production, as robots can work continuously with minimal error, while also improving quality by reducing the human error involved in repetitive assembly tasks. The investment has allowed Toyota to achieve significant economies of scale, lowering the cost per vehicle produced and strengthening its price competitiveness against rivals. However, the high upfront cost of installing and maintaining such technology can be a significant financial burden, and heavy automation can reduce the flexibility to customise vehicles for smaller, specialised orders. Overall, Toyota\u0027s use of technology has been a highly effective operations strategy, as the gains in quality, speed and cost efficiency have clearly outweighed the drawbacks, helping it maintain its position as one of the world\u0027s largest car manufacturers."
    },
    {
        "id":  "bs-2-shore20-1",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Finance",
        "source":  "Shore 2020 Trial HSC (Q22a)",
        "stimulus":  null,
        "question":  "Outline a debenture as an external source of finance.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Sketches in general terms a debenture as an external source of debt finance"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Recognises a debenture is a long-term source of debt finance"
                         }
                     ],
        "keyPoints":  "A debenture is an external, long-term source of debt finance; issued by a company (a corporate bond) at a fixed rate of interest for a fixed period of time before the principal is repaid",
        "sampleAnswer": "A debenture is an external, long-term source of debt finance issued by a company, similar to a corporate bond, at a fixed rate of interest for a set period before the principal is repaid to the investor."
    },
    {
        "id":  "bs-3-shore20-1",
        "criteriaSource": "official",
        "marks":  3,
        "topic":  "Finance",
        "source":  "Shore 2020 Trial HSC (Q22b)",
        "stimulus":  null,
        "question":  "Explain the interdependence between finance and operations.",
        "criteria":  [
                         {
                             "marks":  3,
                             "descriptor":  "Clearly explains why and how finance and operations are interdependent"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Sketches in general terms how finance and operations are interdependent"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Provides some relevant information about finance and/or operations"
                         }
                     ],
        "keyPoints":  "Interdependence = mutual reliance of business functions on one another; finance provides operations with funds to produce goods/services; efficient, quality operations generate revenue and profit which flows back to finance; both work together to achieve overall business goals",
        "sampleAnswer": "Interdependence is the mutual reliance business functions have on one another in pursuing overall business goals. Finance and operations are interdependent because finance provides the funds needed to purchase the transformed and transforming resources operations requires to produce goods and services, while efficient, quality operations generate the sales revenue and profit that flow back to finance. Without adequate financing, operations cannot produce effectively, and without efficient operations, finance has no revenue to fund future activities."
    },
    {
        "id":  "bs-4-shore20-2",
        "criteriaSource": "official",
        "marks":  4,
        "topic":  "Finance",
        "source":  "Shore 2020 Trial HSC (Q22c)",
        "stimulus":  null,
        "question":  "Describe TWO limitations of financial reports.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Provides characteristics and features of TWO limitations of financial reports"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Provides characteristics and features of ONE limitation of a financial report and sketches in general terms ONE other limitation of a financial report"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Sketches in general terms ONE limitation of financial reports, OR identifies TWO limitations of financial reports"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Identifies a limitation of financial reports"
                         }
                     ],
        "keyPoints":  "Possible limitations: normalised earnings, capitalising expenses, valuing assets, timing issues, debt repayments and notes to financial statements; describe what each limitation is and why it distorts or reduces the reliability/comparability of financial reports",
        "sampleAnswer": "One limitation is valuing assets at historical cost rather than current market value, meaning a business\u0027s balance sheet may not reflect what its assets, such as property, are actually worth today. A second limitation is timing issues, as financial reports only reflect a business\u0027s position at a single point in time or over one period, and may not capture significant changes that occur shortly before or after the reporting date, reducing the reliability of the report for ongoing decision-making."
    },
    {
        "id":  "bs-1-shore20-2",
        "criteriaSource": "official",
        "marks":  1,
        "topic":  "Human Resources",
        "source":  "Shore 2020 Trial HSC (Q23a)",
        "stimulus":  "Kulula Airways is a global airline company that is in the process of renegotiating its employment contracts with its employees.",
        "question":  "Identify ONE legal influence on human resources at Kulula Airways.",
        "criteria":  [
                         {
                             "marks":  1,
                             "descriptor":  "Correctly identifies one legal influence on human resources at Kulula Airways"
                         }
                     ],
        "keyPoints":  "Legal influences could include: the employment contract/common law (rights and obligations of employers and employees), minimum employment standards, minimum wage rates, awards, enterprise agreements and other employment contracts; work health and safety and workers compensation; anti-discrimination and equal employment opportunity",
        "sampleAnswer": "One legal influence is the employment contract, which sets out the legal rights and obligations of Kulula Airways and its employees."
    },
    {
        "id":  "bs-4-shore20-3",
        "criteriaSource": "official",
        "marks":  4,
        "topic":  "Human Resources",
        "source":  "Shore 2020 Trial HSC (Q23b)",
        "stimulus":  "Kulula Airways is a global airline company that is in the process of renegotiating its employment contracts with its employees.",
        "question":  "Describe TWO types of employment contracts Kulula Airways could implement across its workforce.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Provides characteristics and features of TWO types of employment contracts that could be used at Kulula Airways"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Provides characteristics and features of ONE type of employment contract that could be used at Kulula Airways, and sketches in general terms ONE other type of employment contract"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Sketches in general terms ONE type of employment contract, OR identifies TWO types of employment contracts"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Identifies an employment contract"
                         }
                     ],
        "keyPoints":  "Possible contracts: common law contract, award, enterprise agreement (single, multi, greenfield), independent contractors, casual and part-time contracts; describe features and explain suitability for different parts of Kulula\u0027s workforce (e.g. baggage handlers vs pilots vs managers)",
        "sampleAnswer": "Kulula Airways could use an enterprise agreement, negotiated directly between the airline and its employees such as cabin crew, which must leave staff better off overall than the relevant award before being registered by Fair Work Australia. It could also use individual common law contracts for senior staff such as pilots or managers, allowing terms like pay and conditions to be tailored to each employee, though these must still meet minimum standards set by the National Employment Standards."
    },
    {
        "id":  "bs-5-shore20-2",
        "criteriaSource": "official",
        "marks":  5,
        "topic":  "Human Resources",
        "source":  "Shore 2020 Trial HSC (Q23c)",
        "stimulus":  "Kulula Airways is a global airline company that is in the process of renegotiating its employment contracts with its employees.",
        "question":  "Explain how economic factors could influence human resource management at Kulula Airways.",
        "criteria":  [
                         {
                             "marks":  5,
                             "descriptor":  "Demonstrates a detailed understanding of how economic factors could influence human resource management at Kulula Airways"
                         },
                         {
                             "marks":  4,
                             "descriptor":  "Demonstrates an understanding of how economic factors could influence human resource management at Kulula Airways"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Demonstrates some understanding of how economic factors could influence human resource management at Kulula Airways"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Demonstrates limited understanding of how economic factors could influence human resource management at Kulula Airways"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Lists an economic factor"
                         }
                     ],
        "keyPoints":  "Economic factors: the economic cycle (boom/recession), structural change, globalisation; link specifically to HR processes such as acquisition (recruitment during a boom), development (training/redeployment), maintenance and separation (voluntary/involuntary redundancies) at Kulula Airways",
        "sampleAnswer": "Economic factors, such as the business cycle, can significantly influence human resource management at Kulula Airways. During a downturn, reduced demand for air travel would likely force Kulula to reduce its acquisition of new staff and instead focus on separation, potentially making cabin crew or ground staff redundant to cut costs, similar to the cost pressures already prompting it to renegotiate its employment contracts. Conversely, during an economic boom, rising demand for travel would require Kulula to increase acquisition, recruiting and training new staff quickly to meet demand, while also reviewing its maintenance strategies, such as pay and conditions, to retain skilled staff like pilots who may be attracted to competing airlines offering higher wages. Globalisation, a related economic influence, may also affect Kulula\u0027s HRM by exposing it to international competition for skilled aviation staff, requiring internationally competitive contracts and conditions to attract and retain talent across the markets in which it operates."
    },
    {
        "id":  "bs-2-shore20-2",
        "criteriaSource": "official",
        "marks":  2,
        "topic":  "Marketing",
        "source":  "Shore 2020 Trial HSC (Q24a)",
        "stimulus":  null,
        "question":  "Distinguish between an industrial and resource market.",
        "criteria":  [
                         {
                             "marks":  2,
                             "descriptor":  "Makes a clear distinction between an industrial and resource market"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Sketches in general terms EITHER the industrial market OR the resource market"
                         }
                     ],
        "keyPoints":  "Resource market = individuals/groups engaged in primary production (mining, agriculture, forestry, fishing); industrial market = industries/businesses that purchase products to use in the production of other products or in daily operations",
        "sampleAnswer": "The resource market consists of individuals or groups engaged in primary production, such as mining, agriculture or fishing, whereas the industrial market consists of businesses that purchase products to use in the production of other goods or in their daily operations."
    },
    {
        "id":  "bs-4-shore20-4",
        "criteriaSource": "official",
        "marks":  4,
        "topic":  "Marketing",
        "source":  "Shore 2020 Trial HSC (Q24b)",
        "stimulus":  null,
        "question":  "Explain how a business would conduct a situational analysis as part of the marketing process.",
        "criteria":  [
                         {
                             "marks":  4,
                             "descriptor":  "Clearly shows the relationship or effect of the situational analysis as part of the marketing process"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Shows the relationship or effect of a situational analysis as part of the marketing process"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Sketches in general terms how a business would conduct a situational analysis as part of the marketing process"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Makes reference to how a business would conduct a situational analysis as part of the marketing process"
                         }
                     ],
        "keyPoints":  "Situational analysis = SWOT analysis (internal strengths/weaknesses, external opportunities/threats) plus Product Life Cycle analysis (introduction, growth, maturity, decline); purpose is to give management a precise understanding of the business\u0027s current position and direction, informing the rest of the marketing process",
        "sampleAnswer": "A situational analysis involves conducting a SWOT analysis, identifying a business\u0027s internal strengths and weaknesses alongside external opportunities and threats, and analysing the product life cycle stage a product is in, whether introduction, growth, maturity or decline. Together these give management a precise understanding of the business\u0027s current market position, which then informs the rest of the marketing process, such as setting appropriate marketing objectives and selecting strategies suited to where the product currently sits in its life cycle."
    },
    {
        "id":  "bs-5-shore20-3",
        "criteriaSource": "official",
        "marks":  5,
        "topic":  "Marketing",
        "source":  "Shore 2020 Trial HSC (Q24c)",
        "stimulus":  null,
        "question":  "With reference to a business you have studied, explain how consumer laws could influence the marketing of a business\u0027 products.",
        "criteria":  [
                         {
                             "marks":  5,
                             "descriptor":  "Clearly shows the relationship or effect of consumer laws and how they could influence the marketing of a business\u0027 products, with reference to an example"
                         },
                         {
                             "marks":  4,
                             "descriptor":  "Shows the relationship or effect of consumer laws and how they could influence the marketing of a business\u0027 products, with reference to an example"
                         },
                         {
                             "marks":  3,
                             "descriptor":  "Sketches in general terms how consumer laws could influence the marketing of a business\u0027 products, with reference to an example"
                         },
                         {
                             "marks":  2,
                             "descriptor":  "Sketches in general terms how consumer laws could influence the marketing of a business\u0027 products, with no example"
                         },
                         {
                             "marks":  1,
                             "descriptor":  "Makes reference to consumer laws"
                         }
                     ],
        "keyPoints":  "Consumer laws could include: deceptive and misleading advertising, price discrimination, implied conditions, warranties; explain the purpose of the law and its impact on how a real business markets its products, supported by a specific case example",
        "sampleAnswer": "Consumer laws, such as the prohibition on deceptive and misleading advertising under the Australian Consumer Law, significantly influence how businesses market their products. This law requires businesses to ensure their advertising accurately represents their goods or services, preventing them from exaggerating claims or hiding important information that could mislead consumers into a purchase. For example, Volkswagen was penalised by the Australian Competition and Consumer Commission after making false claims about its vehicles\u0027 emissions compliance, damaging its reputation and resulting in significant fines. This shows that consumer laws directly shape the content and honesty of marketing campaigns, as businesses that breach these laws risk not only financial penalties but also serious long-term damage to consumer trust and brand reputation, ultimately affecting future sales and marketing effectiveness."
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = QUESTIONS;
}

