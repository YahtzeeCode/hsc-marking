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
      sampleAnswer: "One government policy that affects operations management is environmental protection legislation, which requires businesses to meet emission and waste-disposal standards in their production processes."
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
      sampleAnswer: "One performance objective of operations management is quality — producing goods or services that are free of errors and consistently meet customer expectations."
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
      sampleAnswer: "An overdraft is a source of short-term debt finance, allowing a business to withdraw more money from its account than it holds, up to an agreed limit."
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
      sampleAnswer: "One financial objective of a business is profitability — maximising the business's profit relative to the level of funds invested."
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
      sampleAnswer: "One ethical influence on marketing is avoiding products that may damage health. Businesses have a responsibility to market products in a way that does not encourage harmful consumption or misuse, such as promoting junk food to children. Ethical marketing ensures consumer safety and helps build trust with the public."
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
      sampleAnswer: "Total Equity (TE) = Total Assets (TA) − Total Liabilities (TL)\nTE = $18 million − $10 million = $8 million\n\nDebt to equity ratio = TL ÷ TE = $10 million ÷ $8 million = 1.25:1 or 125%"
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
      sampleAnswer: "Two transformed resources used in a business's operations process are materials (for example, raw timber and fittings) and information (for example, customer specifications), both of which are converted through the transformation process into a finished product or service."
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
      sampleAnswer: "Return on equity = net profit ÷ total equity = $60 000 ÷ $230 000 = 0.26:1 or 26%"
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
      sampleAnswer: "Absenteeism can be used to measure the effectiveness of human resource management, as a high rate of absenteeism may be an indicator of employee dissatisfaction, poor job design, conflict, or a negative workplace environment."
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
      sampleAnswer: "E-commerce is important in supply chain management because it allows businesses to communicate and transact with suppliers and customers online in real time, improving the speed and accuracy of ordering, tracking and payment. This reduces lead times and errors caused by manual processing, allowing businesses to hold lower inventory levels and respond more quickly to changes in demand, which lowers costs and improves customer service."
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
      sampleAnswer: "One method of workplace dispute resolution is mediation, where an independent third party facilitates a discussion between the employer and employee(s) to help them reach a mutually acceptable resolution. The mediator does not impose a decision but assists both parties to communicate and negotiate a solution, which helps preserve the working relationship."
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
      sampleAnswer: "When living standards rise, people's income and quality of life improve. This may influence employers as there will be increased pressure to provide higher wages and working conditions that enable work-life balance. Employers must adapt to meet these increased expectations and offer competitive salaries if they wish to retain staff and encourage productivity."
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
      sampleAnswer: "By comparing financial ratios across different years, a business can identify trends, strengths, and areas that may require attention. Benchmarking against industry standards allows for an evaluation of how well a company is performing in relation to established norms, helping to gauge competitiveness and efficiency. For example, if a business's return on equity is lower compared to both industry standards and the previous year's performance, this may signal potential inefficiencies. Armed with this information, the business can make informed decisions to enhance its financial health."
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
      sampleAnswer: "A business can implement effective cost control strategies, specifically looking at its expenses. By minimising expenses, the company can enhance profitability without necessarily having to increase revenue. This may include reducing wage expenses by outsourcing certain business functions or looking for alternative suppliers to reduce the cost of goods sold."
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
      sampleAnswer: "GRC Candles should use premium (prestige) pricing for its new range, setting a high price that reflects the luxury positioning, rare oils and sustainable materials used. Because the candles are sold exclusively through GRC's own retail store as part of a selective distribution strategy, a high price reinforces the exclusive, high-quality image the business is trying to build and signals superior quality to target customers, who are likely to be less price-sensitive and motivated by status and quality rather than cost. This pricing strategy is also consistent with GRC's positioning as an eco-friendly, premium brand rather than a mass-market one."
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
      sampleAnswer: "Adopting a selective channel choice means GRC Candles limits the number of outlets through which its premium range is sold, in this case selling exclusively through its own retail store. This gives the business greater control over how the product is presented, priced and sold, helping to protect and reinforce the luxury brand image that supports its premium pricing strategy — customers experience the brand in a controlled environment consistent with its eco-friendly, high-quality positioning. However, a selective channel choice also limits the number of customers who can access the product, which restricts potential sales volume and market share compared to a more intensive distribution strategy that uses multiple retailers. GRC Candles must weigh the benefit of protecting its premium image and higher margins against the opportunity cost of reduced market reach."
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
      sampleAnswer: "Shares issued under a share purchase plan allow existing shareholders to buy shares in the business at a discount, usually up to a set dollar limit per shareholder. Rights issue shares are also offered to existing shareholders, but instead of a fixed dollar limit, they are offered in proportion to each shareholder's existing shareholding. As a result, a rights issue does not dilute the ownership of shareholders who take up their entitlement to purchase shares, whereas larger shareholders can have their proportional ownership diluted under a share purchase plan if they do not participate to the same extent as smaller shareholders."
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
      sampleAnswer: "The ASX is the primary market in Australia through which public companies raise equity finance by issuing shares to investors. Listing on the ASX would allow the business to access a much larger pool of capital than is available through private or debt sources, supporting expansion. However, the ASX also imposes ongoing disclosure and reporting obligations under the Corporations Act and ASX Listing Rules, requiring the business to regularly report its financial performance to shareholders and the market. This increases transparency and accountability, but it also increases compliance costs and exposes the business's share price to investor sentiment and broader market fluctuations."
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
      sampleAnswer: "Internal recruitment allows existing employees the opportunity for career progression within a business. This reduces the need for external recruitment, which can be time-consuming and costly. It allows a business to invest in training and developing existing employees, which can improve staff morale and encourage productivity. Existing employees are also familiar with the corporate culture, which can reduce time spent on lengthy induction periods. Internal recruitment also helps ensure a stable, competent workforce where employees are motivated to improve, knowing they may be rewarded with new positions or promotions."
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
      sampleAnswer: "Rainbow Wetsuits has its own retail outlets, and it can use physical evidence by changing the appearance of these stores as an effective way to promote its business. By using layouts, colours, lighting, and sound that appeal to its target market, Rainbow Wetsuits can attract more customers into its stores. An impact of this will be higher sales, which will lead to greater market share for Rainbow Wetsuits."
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
      sampleAnswer: "By outsourcing recruitment to a third party, a business can take advantage of the specialist skills of another business to achieve a reduction in costs, greater efficiencies, higher quality services and strategic business expertise. It also enables a business to focus on its essential activities. However, outsourcing can increase the risk of cost overruns, loss of quality in the service provided, communication issues, difficulties effectively coordinating and monitoring the quality and reliability of the service, and, in the long run, legal or workplace conflict for the business."
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
      sampleAnswer: "Developmental performance management is a forward-looking human resources approach that focuses on using data to assist individual employees to develop their skills and abilities to ensure that they can meet the current and future requirements of the job. This is compared to administrative performance management, which is a more traditional human resource approach focused on measuring past performance to ensure that job requirements and objectives are met. Appraisals, ratings, reviews, and rewards for improvement are used in administrative performance management to promote accountability by employees, which can be demotivating as it does not focus on expanding employee skills and capabilities. Developmental performance management, however, involves using feedback, coaching, and training, which may lead to increased employee knowledge and engagement, greater motivation, and job satisfaction — although these strategies require a more significant time commitment due to the continuous process of evaluation and development."
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
      sampleAnswer: "By using recycled inputs, GreenBuild Renovations is being more environmentally sustainable in its renovation process. This is extremely important because it can significantly impact the business's ability to achieve cost leadership: using existing timber, tiles and cabinetry can reduce input costs and the need to dispose of items in landfill. Minimising expenses such as raw materials and inputs means the business can be more price competitive and increase efficiency. Providing a service that is environmentally sustainable also reflects the attitudes of society and customers, who may potentially choose GreenBuild for its service differentiation. Overall, environmental sustainability plays a strategically important role, supporting both cost leadership and differentiation, though it requires ongoing sourcing effort to ensure suitable recycled materials remain reliably available."
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
      sampleAnswer: "Mediation is generally an effective method of workplace dispute resolution because it uses an impartial third party to help the employer and employee communicate directly and reach their own mutually acceptable outcome, rather than having a decision imposed on them. This collaborative approach tends to preserve trust and the working relationship between the parties, as neither side simply 'loses' the dispute. It is also typically faster and less costly than external options such as arbitration through the Fair Work Commission. However, mediation relies on both parties being willing to negotiate in good faith — where there has been a serious breach of trust or a significant power imbalance, mediation may fail to resolve the underlying conflict, and a more formal, binding process such as conciliation or arbitration may be needed. Overall, mediation is most effective for relatively minor or communication-based disputes, but less so for serious breaches of trust."
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
      sampleAnswer: "Two financial management strategies the business could use are cash flow management and working capital management. Firstly, the business could better manage its cash flow by preparing a cash flow statement to forecast future shortfalls and offering discounts for early payment from customers, which brings cash in sooner and reduces the mismatch between when revenue is earned and when cash is actually received. Secondly, the business could improve its management of working capital by tightening control over receivables — for example, reducing the credit terms offered to customers — and negotiating longer payment terms with its own suppliers, which frees up cash in the short term. Both strategies are likely to be effective because they directly target the timing gap between profit, which is an accounting measure, and actual cash in the bank. However, offering early payment discounts and tighter credit terms may also reduce sales if it makes the business less attractive to credit-reliant customers, so the business would need to balance improved liquidity against the risk of lost sales."
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
      sampleAnswer: "Global sourcing allows businesses to access lower-cost materials and labour from different parts of the world, directly impacting cost-related performance objectives. By sourcing goods from countries with cheaper production costs, businesses can reduce their overall production expenses. This allows them to offer competitive pricing or improve profit margins. Additionally, global sourcing enables access to specialised materials or skills that may not be available locally, further supporting quality and reducing costs. However, businesses must also consider potential risks such as supply chain disruptions or longer lead times, which can undermine the speed and dependability objectives. When managed effectively, global sourcing can significantly lower costs and improve financial performance while still meeting quality expectations."
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
      sampleAnswer: "By charging high prices when products are released and gradually lowering them, Rainbow Wetsuits is using a price skimming strategy. This allows the business to make greater profits from customers who want new-season products as soon as they are available and are less price-sensitive. However, charging a higher price initially is likely to lead to lower sales at the start of the season, which could have a negative impact on market share if competitors capture price-sensitive customers early on. Rainbow Wetsuits needs to consider whether the sales made later in the season, once prices fall, are enough to build market share, or whether it is losing sales to competitors at the beginning of the season and therefore undermining its market share objective. An implication of instead charging lower prices from the outset to prioritise market share would be lower profit margins, showing the trade-off between Rainbow Wetsuits' profit and market share objectives."
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
      sampleAnswer: "Influencer marketing, where the business pays social media personalities to promote its products to their followers, is likely to be an effective promotion strategy for reaching the 18–30 target market, who spend significant time on social media platforms and often trust influencer recommendations more than traditional advertising. This can build brand awareness quickly and create a sense of authenticity and social proof, which supports the marketing objective of increasing sales and market share among this demographic. However, its effectiveness depends heavily on selecting influencers whose audience and values align closely with the brand — a poor match, or an influencer scandal, can damage brand reputation rather than build it. Additionally, results can be difficult to measure precisely compared with more traceable strategies such as direct online advertising, and influencer marketing can become costly if the business relies on high-profile influencers with large followings. Overall, influencer marketing is likely to be effective if the business partners with credible, well-matched influencers and combines this strategy with other, more measurable promotion tools to track its true impact on sales."
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
    "sampleAnswer": "The intermediate market consists of wholesalers and retailers who purchase finished products in order to resell them and make a profit, rather than purchasing them for personal consumption. For example, Metcash is a wholesaler that purchases grocery products in bulk from manufacturers and on-sells them to independent supermarkets such as IGA, which then retail the products to the final consumer."
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
    "sampleAnswer": "Implied conditions are basic legal rights, such as acceptable quality and fitness for purpose, that automatically apply to a product or service regardless of whether they are stated in a contract. A business needs to ensure implied conditions are met because it is a legal requirement under the Australian Consumer Law, and failing to do so can result in fines, legal action and compensation claims. Meeting implied conditions also helps the business maintain positive relationships with customers and protect its reputation, as consumers are more likely to trust and make repeat purchases from a business whose products consistently do what they claim to do."
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
    "sampleAnswer": "Branding is a marketing strategy that involves creating a unique name, symbol or design that identifies and differentiates a business's products from those of its competitors. Branding assists consumers in easily identifying the products they want to purchase and allows them to evaluate the quality of a product before buying it, which reduces the level of perceived risk involved in the purchase - consumers often associate a trusted brand, such as Mercedes-Benz, with a guaranteed level of quality. As a result, branding encourages repeat purchases and builds brand loyalty, because satisfied customers are more likely to trust and return to a brand they recognise. This loyalty also makes it easier for a business to introduce new products under an already trusted brand name, as seen when Lexus used its established reputation to successfully launch its first fully electric vehicle. Consequently, effective branding increases the likelihood of a new product being accepted by the market, as promotion becomes more effective when built on existing brand recognition."
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
    "sampleAnswer": "One disadvantage of outsourcing production for this electronics manufacturer and retailer is a potential loss of control over the quality of the finished goods. Because production is carried out by an external supplier rather than the business itself, it becomes more difficult to monitor and enforce consistent quality standards, which may result in defective products reaching customers and damaging the business's reputation."
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
    "sampleAnswer": "Warranties are important in the operations process of this business because they act as a promise to repair, replace or refund a faulty product, which helps to assess the effectiveness of the operations process itself - a high number of warranty claims can indicate problems in production or quality control that need to be addressed. Warranties can also be used as a key performance indicator, allowing the business to track the number of claims over time and identify trends in product reliability. In addition, offering strong warranties can increase customers' perception of quality, which is particularly important for this business as it competes with less expensive alternatives on the market."
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
    "sampleAnswer": "Although the decision to outsource production will help this business reduce costs and offer more competitive prices, it is likely to have an overall negative impact on its corporate social responsibility. By shifting production to a low-wage country, the business risks being associated with the exploitation of overseas workers, including poor pay and working conditions, which can seriously damage its reputation among increasingly ethically-conscious Australian consumers. Furthermore, outsourcing production overseas means the business is failing to uphold its responsibilities to its existing Australian workforce, many of whom are likely to be made redundant as a direct result of this decision. While the cost savings may benefit shareholders and allow the business to remain price-competitive, the negative social consequences for both overseas and domestic stakeholders suggest that, on balance, outsourcing undermines this business's corporate social responsibility."
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
    "sampleAnswer": "The strategic role of financial management is to ensure that this business achieves its overall goals and objectives. This can only be accomplished if the business's finances are managed effectively, including setting appropriate financial objectives and planning how financial resources will be raised and used to achieve them. Strategic planning of financial resources, such as the $100 million required for international expansion, is essential to this business's ongoing success."
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
    "sampleAnswer": "Global market influences are largely beyond the control of the business. The global economic outlook refers to the projected changes in the level of economic growth throughout the world. A more positive outlook, where world economic growth is expected to increase, will potentially increase demand for this company's output, requiring it to expand its operations internationally. A positive global outlook could also help maintain low interest rates, as there is less risk associated with any debt finance the business acquires to fund its expansion. However, if global economic conditions do not improve, this business could face reduced demand for its output and higher interest rates, making the $100 million expansion more difficult and costly to finance."
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
    "sampleAnswer": "Equity finance is a suitable source of finance to enable this company's international expansion. As a private company, it could undertake a new issue by listing on the Australian Securities Exchange for the first time, raising the required $100 million by selling ordinary shares to the public and becoming a public company. Unlike debt finance, equity finance does not add to the business's debt levels, meaning it preserves the company's capacity to obtain debt finance or further equity in the future if required, and does not require ongoing interest payments that would reduce cash flow during the expansion. Given the company's proven track record of success, it should be well placed to attract shareholders and secure the full $100 million, reducing the risk of undersubscription. For these reasons, equity finance is a low-risk and appropriate method of raising the substantial funds needed for this expansion."
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
    "sampleAnswer": "Work health and safety deals with the safety, protection and welfare of employees in the workplace, whereas workers compensation provides a range of benefits, such as medical expenses and income replacement, to an employee who suffers an injury or disease related to their work."
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
    "sampleAnswer": "External recruitment involves filling job vacancies with people from outside the business, and would be a useful strategy for Mill Services as it expands and invests in new technology. A key advantage is that it provides access to a wider pool of applicants, bringing new ideas, perspectives and skills into the business that may not currently exist among its staff, as well as the specific technical skills needed to operate the new technology. External recruitment can also reduce training costs where suitably skilled candidates are hired, dilute internal politics that can arise from promoting existing staff, and improve diversity within the business, supporting equal employment opportunity. However, there are drawbacks Mill Services should consider. Recruiting externally carries the risk of hiring unknown staff whose true capabilities and fit with the business culture are uncertain, and new employees typically experience a loss of productivity during their initial orientation and induction phase. The recruitment process itself also takes considerable time and effort to advertise, screen and interview candidates. On balance, external recruitment is likely to benefit Mill Services by providing the new skills required for its expansion, provided the business is prepared to invest the time needed to induct new staff effectively."
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
    "sampleAnswer": "Training and development is an important strategy for Mill Services as it expands and invests in new technology. Training focuses on building employees' current skills, knowledge and attitudes to improve their performance in their existing roles, while development prepares employees for future responsibilities within the business as a result of changes in its strategies or growth in its size. Given that Mill Services will need to employ more staff and introduce new technology, training will be critical to ensure existing and new employees have the skills needed to operate this technology effectively and safely. Development will also help prepare staff, including future managers, for the increased responsibilities that come with a larger, expanded business. While training and development involves an upfront cost, it is likely to be cost-effective in the long term, as it improves employee performance, productivity and efficiency, and can also act as an important motivating factor when attracting and retaining new staff. Overall, training and development is a highly important strategy for Mill Services, as it directly addresses the skills gap created by expansion and new technology, and better prepares the business for anticipated future changes."
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
    "sampleAnswer": "Transformed resources are the inputs that are changed, converted or consumed during the operations process, such as materials, information and customers. Transforming resources, on the other hand, are the inputs that act upon and carry out the change to the transformed resources, such as human resources (employees) and facilities like equipment, machinery and buildings. The key distinguishing feature is that transformed resources are the inputs being changed, while transforming resources are the inputs doing the changing."
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
    "sampleAnswer": "Variation in demand refers to the amount of a product or service desired by customers at a given time, which often fluctuates due to factors such as seasonality. Where demand varies significantly, a business must adjust its sequencing and scheduling of production to cope with peaks and troughs in customer orders, and may need to alter the technology, task design and process layout used to increase or decrease output. Businesses must also strengthen their monitoring, control and improvement processes during periods of high variation to maintain quality and efficiency, and accurately predict demand so that sufficient inputs - including raw materials from suppliers, skilled and flexible labour, and enough capital equipment such as machinery - are available to meet the anticipated increase in production volume."
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
    "sampleAnswer": "There is often an inherent trade-off between cost and quality in operations strategy: as the quality of a product increases, the cost of producing it also tends to rise, since higher-quality inputs, more skilled labour and more rigorous quality control processes are generally more expensive. Businesses pass on some of these higher costs to consumers through higher prices, meaning a business must carefully balance its desired quality objective against its cost objective to remain competitive and profitable.\n\nThis balance is evident in the operations strategy of Cochlear Limited, an Australian manufacturer of hearing implant devices. Because Cochlear's products are safety-critical medical devices, the business prioritises quality above cost, investing heavily in research and development, rigorous quality assurance and quality control testing, and highly skilled labour to ensure its implants are reliable and meet strict international medical standards. This focus on quality allows Cochlear to charge premium prices and maintain its reputation and market leadership, even though it results in significantly higher production costs than a low-cost competitor would incur.\n\nAt the same time, Cochlear cannot ignore cost entirely, as excessively high costs would make its products unaffordable and reduce its competitiveness in international markets. To manage this, Cochlear uses strategies such as economies of scale in manufacturing and efficient supply chain management to offset some of the costs associated with its high-quality inputs and processes, without compromising on the safety and reliability of its products.\n\nThis demonstrates that businesses do not need to treat cost and quality as mutually exclusive; rather, an effective operations strategy seeks an appropriate balance based on the nature of the product and the expectations of its target market. For a business like Cochlear, where product failure could have serious consequences for customers, prioritising quality over cost is justified, whereas a business selling low-involvement, price-sensitive products may reasonably choose to prioritise cost efficiency over premium quality. Ultimately, the appropriate balance depends on the performance objectives most valued by the business's customers and the level of risk associated with quality failures."
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
    "sampleAnswer": "Working capital = Current Assets − Current Liabilities.\nWorking capital 2020 = $37,000 − $16,000 = $21,000\nWorking capital 2021 = $54,000 − $16,000 = $38,000\nChange in working capital = $38,000 − $21,000 = an increase of $17,000."
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
    "sampleAnswer": "Accounts Receivable Turnover Ratio = Sales ÷ Accounts Receivable\n2020: $156,000 ÷ $24,000 = 6.5 times (365 ÷ 6.5 ≈ 56.2 days)\n2021: $186,000 ÷ $20,000 = 9.3 times (365 ÷ 9.3 ≈ 39.2 days)\nThe efficiency of Local Couriers has improved from 2020 to 2021, as shown by the increase in the accounts receivable turnover ratio from 6.5 to 9.3 times per year. This means the average collection period for debtors decreased from approximately 56.2 days in 2020 to 39.2 days in 2021. This is a favourable trend, as the 2021 collection period of 39.2 days is now within the business's 40-day trade credit policy, whereas in 2020 the business was taking longer than its stated policy to collect payments from debtors, tying up cash that could otherwise be used elsewhere in the business."
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
    "sampleAnswer": "Return on Equity = Net Profit ÷ Total Equity × 100\n2020: $27,000 ÷ $61,000 × 100 = 44.3%\n2021: $42,000 ÷ $69,000 × 100 = 60.9%\nThe profitability of Local Couriers, as measured by return on equity, improved significantly from 2020 to 2021. In 2020, the owners earned a return of 44.3 cents for every dollar of equity invested in the business, which increased to 60.9 cents in 2021. Both results are favourable when compared to alternative low-risk investment options, such as bank interest rates, indicating that Local Couriers is generating a strong and improving return for its owners."
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
    "sampleAnswer": "Normalised earnings involves adjusting reported profit figures to remove the effect of irregular, one-off items or abnormal economic conditions, so that financial statements better reflect the business's true, ongoing earning capacity. For Local Couriers, this could mean adjusting its 2020 net profit figure to account for the unusual downturn in trade experienced during the COVID-19 pandemic, giving stakeholders a more accurate and comparable picture of the business's underlying performance across the two years, rather than one distorted by a temporary, external event.\n\nCapitalising expenses involves recording an expense, such as spending on research and development or major repairs, as an asset on the balance sheet rather than as an expense on the income statement. If Local Couriers were to capitalise an expense, its non-current assets on the balance sheet would increase, improving its reported financial position and asset base. At the same time, expenses on the income statement would decrease, which would inflate reported net profit and make the business's financial performance appear stronger than it might otherwise be. Both practices highlight a limitation of financial statements: figures can be manipulated within accounting standards to present a more favourable picture of a business's financial position and performance, so stakeholders should interpret Local Couriers' financial statements with this in mind."
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
    "sampleAnswer": "One strength of Merino Pty Ltd is its strong reputation for quality, being recognised as a market leader in manufacturing high-quality, Australian-made woollen garments."
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
    "sampleAnswer": "Before developing its new product range aimed at a younger target market, Merino Pty Ltd should undertake a structured market research process. The first step is determining its information needs, such as understanding the preferences, purchasing habits and price sensitivity of younger consumers who may differ significantly from its current 40+ customer base. Merino Pty Ltd would then collect data, using primary data collection methods such as surveys or focus groups with younger consumers to gain first-hand insight into what they want from woollen garments, as well as secondary data, such as industry reports on fashion trends among younger demographics, which is more cost-effective to obtain. Finally, Merino Pty Ltd would need to analyse and interpret this data to identify clear patterns and insights, which can then be used to inform decisions about the design, pricing, promotion and distribution of the new product range before it is launched to the younger target market."
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
    "sampleAnswer": "Merino Pty Ltd should use social media advertising as its promotional strategy to launch the new product range targeting a younger age group. Unlike its existing older customer base, which is reached effectively through department and specialty stores, younger consumers spend significant time on platforms such as Instagram and TikTok, making social media advertising a highly effective way to build awareness of the new range among this target market. Social media advertising would allow Merino Pty Ltd to use engaging visual and video content to showcase the new product range's style and quality, while also enabling precise targeting based on age, interests and location to ensure the promotional budget is spent efficiently on the intended younger audience. It would also allow the business to partner with social media influencers who appeal to younger consumers, lending credibility and trust to the new range in a way that traditional advertising in department stores may not achieve. Furthermore, social media advertising is generally more cost-effective than traditional mass media advertising, and provides Merino Pty Ltd with measurable data, such as engagement and click-through rates, allowing it to monitor the success of the campaign and make adjustments prior to and during the full launch of the new product range."
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
    "sampleAnswer": "J and K Pty Ltd's product is in the decline stage of the product life cycle. First, sales and profitability are falling, shown by the business's recent decline in performance – a key characteristic of decline is a sustained downturn in sales revenue as products lose appeal in the market. Second, customer satisfaction and loyalty are decreasing, evidenced by poor customer feedback about clothing quality and the refusal to accept returns; in the decline stage, competitors' offerings are increasingly preferred by consumers, causing a business's existing customer base to shrink."
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
    "sampleAnswer": "J and K Pty Ltd should adopt product/service differentiation by investing in quality control and offering a genuine returns and warranty policy. This is an appropriate strategy because the business's decline has been driven directly by poor product quality and its refusal to accept returns, which has damaged customer trust. By differentiating itself through demonstrably higher quality and better after-sales service, J and K can justify its premium price point, rebuild customer confidence and encourage repeat purchases, addressing the root causes of its declining sales and profitability."
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
    "sampleAnswer": "Under the Australian Consumer Law, consumers are entitled to statutory guarantees, including that goods are of acceptable quality and free from defects. J and K Pty Ltd is breaching these consumer protection laws by refusing to accept all returns from customers, even though the poor customer feedback indicates the clothing is faulty or not of acceptable quality. Because the business has an obligation to provide a remedy (repair, replace or refund) when goods do not meet these statutory guarantees, its blanket refusal to accept returns denies customers their legal rights under warranty provisions, exposing J and K to potential penalties and further reputational damage."
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
    "sampleAnswer": "J and K Pty Ltd's unethical behaviour of refusing to accept returns, despite marketing its clothing as high quality and charging premium prices, is causing customers to perceive the business as dishonest and untrustworthy. Because customers feel misled about the quality they are paying for and are denied a fair remedy when products are faulty, negative word of mouth and poor reviews are likely to spread, damaging J and K's reputation. This declining perception directly explains the drop in sales and profitability, as ethical failures erode the customer loyalty that a premium-priced brand depends on."
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
    "sampleAnswer": "Speed refers to how quickly a business can convert inputs into outputs and deliver goods or services to customers, minimising the time between order and delivery – for Kramer Constructions this means completing shopping centre builds within agreed timeframes. Quality, on the other hand, refers to the degree to which a good or service meets or exceeds customer expectations and is fit for purpose, such as ensuring buildings are structurally sound and defect-free. While speed focuses on minimising time, quality focuses on consistency and reliability of output, and the two objectives can conflict, as rushing construction to improve speed may compromise the quality of the finished building, which is exactly the trade-off Kramer Constructions is struggling to manage."
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
    "sampleAnswer": "Monitoring and controlling involves regularly checking actual performance against set standards and taking corrective action where necessary. For Kramer Constructions, monitoring project timelines against a schedule (such as through Gantt charts or critical path analysis) would allow management to identify delays early and reallocate labour or resources before deadlines are missed, directly reducing the risk of further legal action for late completion. Similarly, implementing quality control checkpoints throughout the construction process would allow defects to be identified and corrected before completion, rather than after handover, reducing rework, costs and reputational damage. By continuously comparing actual progress and quality against planned targets and adjusting operations accordingly, Kramer Constructions can improve both its speed and quality performance objectives, helping to rebuild client trust, avoid further lawsuits and support the business's recovery."
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
    "sampleAnswer": "One resistance to change factor Kramer Constructions must overcome is the financial cost associated with hiring more workers and purchasing more tools. Existing staff and management may resist this change because it increases short-term expenses and disrupts established routines, particularly if current employees fear that new workers threaten their job security or that new equipment requires retraining. This resistance can slow the implementation of solutions needed to address the business's speed and quality problems, prolonging the risk of further legal action. To overcome this, management would need to clearly communicate the reasons for change, such as the financial and reputational cost of continued lawsuits, and involve employees in planning the transition, for example through consultation on new equipment and staged recruitment, so that staff better understand and accept the necessity of the changes for the business's long-term survival."
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
    "sampleAnswer": "Productivity measures the output produced relative to the inputs used, such as the number of cars detailed per staff member per day. For Prestige Smash, if each of the five new staff members details an average of three cars per day, the business generates sufficient revenue to cover their wages and other costs and remain profitable. If productivity falls below this benchmark, revenue generated by each staff member decreases while labour costs remain fixed, reducing profit margins. Therefore, there is a direct relationship between productivity and profitability: as productivity increases, revenue generated per staff member rises relative to cost, improving profitability, while low productivity erodes profitability by increasing the cost of producing each unit of output."
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
    "sampleAnswer": "Outsourcing recruitment to a specialist human resources or recruitment agency could support Prestige Smash's acquisition process by allowing experts to advertise the five detailing positions, screen applicants and shortlist suitable candidates on the business's behalf. Because recruitment agencies have access to broader networks and more efficient screening technology, they can attract a larger pool of skilled applicants and reduce the time and cost involved in advertising, interviewing and reference-checking. This allows Prestige Smash's own managers to focus on their core function of running the smash repair and detailing business, while ensuring new detailing staff are appropriately skilled and placed in roles suited to their abilities, increasing the likelihood that new employees will be able to meet the required productivity target of three cars per day."
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
    "sampleAnswer": "McDonald's Australia has cultivated a strong corporate culture based on consistency, teamwork and structured people practices, which has contributed significantly to its success. Its culture emphasises structured training (through Hamburger University), clear values around service speed and food safety, and strong internal communication between crew and management. This shared culture ensures that employees across thousands of outlets consistently deliver McDonald's core operations objectives of speed, quality and cost-efficiency, regardless of location. Because staff understand and buy into these shared values, McDonald's benefits from lower staff turnover, faster onboarding of new employees and consistent customer experiences, which support McDonald's status as one of the most recognised and profitable fast food brands globally, demonstrating how a strong corporate culture directly underpins commercial success."
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
    "sampleAnswer": "In 2021, Bubs Australia has $4.20 of current assets for every $1 of current liabilities, an improvement on its 2020 ratio of $3.00 to $1. This is higher than the 2021 industry average of 3.50:1 ($3.50 to $1.00), meaning Bubs Australia holds proportionally more current assets relative to its current liabilities than its competitors. This indicates the business is in a strong position to meet its short-term debt obligations as they fall due, though holding excessive current assets, such as idle cash or inventory, could also suggest funds are not being used as efficiently as possible to generate returns."
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
    "sampleAnswer": "Bubs Australia could use a forward exchange contract to protect itself from currency fluctuations when exporting to the United States. This involves entering into an agreement with a financial institution to exchange Australian dollars for US dollars at a fixed exchange rate on a specified future date. By locking in the exchange rate in advance, Bubs Australia can accurately predict the Australian dollar value of its future US sales revenue, protecting itself from the risk that an appreciation of the Australian dollar would reduce the value of its export earnings once converted back into Australian dollars."
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
    "sampleAnswer": "A mortgage is a form of long-term debt finance secured against the property being purchased, typically used to finance the outright purchase of land and buildings such as a new production facility. Bubs Australia would make regular principal and interest repayments over an extended term (often 15–25 years), and once fully repaid, would own the facility outright as a non-current asset, which could later be used as security for further borrowing or sold to realise a capital gain. A lease, by contrast, allows Bubs Australia to use the production facility for an agreed period in exchange for periodic lease payments, without the business taking on ownership of the asset.\n\nBoth options are external sources of debt finance and both spread the cost of acquiring the facility over time rather than requiring a large upfront capital outlay, which suits Bubs Australia's need to fund rapid expansion in response to strong US demand without depleting its cash reserves. However, they differ significantly in their impact on the business's financial position. A mortgage would add a large non-current liability to Bubs Australia's balance sheet, further increasing its solvency ratio, which at 330% in 2021 is already well above the industry average of 200%, indicating high existing gearing and financial risk. Taking on an even larger secured debt could increase interest costs and financial risk further, particularly if interest rates rise. A lease, on the other hand, generally requires a smaller ongoing commitment and may not appear as a large liability on the balance sheet in the same way, helping to preserve Bubs Australia's solvency position and financial flexibility. However, over the long term, leasing is often more expensive than purchasing through a mortgage, and the business would not build equity in the facility or benefit from any appreciation in its value. Given Bubs Australia's already high gearing, a lease may be the more prudent option in the short to medium term, as it avoids further deteriorating its solvency ratio while still allowing the business to secure the additional production capacity needed to meet growing international demand."
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
    "sampleAnswer": "Common law attempts to protect the employee, by establishing obligations that employers must meet, such as providing a safe working environment and paying agreed wages."
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
    "sampleAnswer": "Under common law, employees have several obligations to their employer. First, employees must obey lawful and reasonable commands given by their employer, meaning they are required to follow reasonable instructions relating to their work duties. Second, employees must use care and skill in the performance of their work activities, ensuring that tasks are carried out competently and without unnecessary risk of harm or loss to the business."
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
    "sampleAnswer": "A significant workplace dispute in Australia occurred between Qantas and its pilots, engineers and baggage handlers, culminating in Qantas grounding its entire fleet in October 2011. The cause of the dispute was a disagreement over remuneration and job security: pilots and other unionised employees sought pay increases and guarantees against outsourcing and job losses, while Qantas management resisted these demands due to cost pressures and a desire to remain internationally competitive. Initially, negotiation was attempted between Qantas and the relevant unions, including the Australian and International Pilots Association, but this broke down as the two sides could not reach agreement, leading to a series of protected industrial actions by employees. In response, Qantas took the significant step of grounding its fleet, which forced the dispute into binding arbitration before Fair Work Australia, where an independent tribunal determined the terms of a new Enterprise Bargaining Agreement. The implications of this resolution were mixed: employees secured incremental pay increases, but did not achieve the job security guarantees they sought and had to accept some productivity trade-offs, while Qantas incurred substantial reputational damage and financial cost from the grounding, alongside the certainty of a binding agreement it could plan around. This case illustrates how unresolved negotiation can escalate into more disruptive industrial action, ultimately requiring formal arbitration to resolve deep-seated disputes over pay and job security."
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
    "sampleAnswer": "Operations is interdependent with human resources because operations relies on human resources to recruit, train and roster the staff needed to carry out production and service delivery tasks. In turn, human resources is dependent on operations because the number and type of jobs available within a business, along with the specific skills required, are determined by the operations processes the business uses, meaning that without operations there would be no employment for human resources to manage."
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
    "sampleAnswer": "The critical path is A–D–F–G, totalling 8 + 3 + 1 + 3 = 15 weeks. This is longer than the alternative paths of B–F–G (10 + 1 + 3 = 14 weeks) and C–E–F–G (2 + 4 + 1 + 3 = 10 weeks), so the critical path length for this project is 15 weeks."
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
    "sampleAnswer": "Critical path analysis is useful for managers of 'You Won't Whine' because it identifies the sequence of activities that determines the minimum time needed to complete the entire winemaking project, in this case 15 weeks. This allows managers to see which tasks, such as preparing the soil, tying and spraying new growth, labelling and harvesting, must be completed on time to avoid delaying the whole project, and which tasks, such as building casks or contacting retailers, have spare time and could be delayed slightly without affecting the overall schedule. By identifying the critical path, managers can prioritise resources and labour towards critical activities, better coordinate the timing of casual labour recruitment and harvesting, and reduce the risk of the wine season being delayed, ultimately helping the business to produce its product more efficiently, control costs and remain competitive."
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
    "sampleAnswer": "Technology is an important operations process that contributes to the success of a business. By investing in technology such as computer-aided design (CAD) and computer-aided manufacturing (CAM), robotics and information systems, a business can produce more complex and higher quality products with greater precision and fewer faults than manual production methods allow. Technology can also reduce production costs over time by decreasing reliance on manual labour and minimising waste and errors, while improving workplace safety by automating repetitive or hazardous tasks. For a business competing in a market with rising quality expectations and cost-based competition, effectively sourcing and using technology allows it to produce goods and services more efficiently and to a more consistent standard, helping it to compete more effectively, increase sales and ultimately maximise profit."
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
    "sampleAnswer": "The business is adopting a market-oriented approach to marketing. Two features of this approach are: first, conducting market research to find out what customers want and need before developing products, rather than relying on the business's own assumptions about what should be sold. Second, focusing on customer orientation and satisfying customer needs and wants as the central goal of business activity, ensuring that products, pricing and services are designed around the target market rather than production capabilities."
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
    "sampleAnswer": "One marketing objective this business could aim to achieve is to increase its market share in New South Wales by 10% within two years of establishing its Sydney warehouse, by attracting new customers away from competing beauty and hair suppliers in the region. A second marketing objective could be to increase sales to existing interstate customers by 5% over the next two years, by improving delivery times and product availability now that stock can be distributed from a closer Sydney location. Both objectives are specific and measurable, allowing management to track progress and adjust marketing strategies as needed."
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
    "sampleAnswer": "As the business aims to attract customers in its new Sydney market, it is recommended that it implement price penetration as a pricing strategy. This involves setting prices lower than competitors when entering the new market, which will attract price-sensitive customers to trial the business's products. Once brand awareness and customer loyalty are established in Sydney, prices can gradually be increased towards typical market levels, improving profit margins over time. A second recommended strategy is the use of a loss leader, where selected popular beauty or hair products are advertised and sold at a reduced price, or even at a loss, to draw customers into the business. Once customers are attracted by the discounted item, they are likely to purchase other full-priced products at the same time, increasing overall sales revenue and helping to build a loyal customer base in the new market."
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
    "sampleAnswer": "In 2012, Capex Ltd's debt to equity ratio was 0.8:1, meaning it had 80 cents of debt for every $1 of owner's equity. By 2013, total liabilities (overdraft $1,000,000 + accounts payable $9,600,000 + mortgage $15,000,000 = $25,600,000) divided by total equity ($16,500,000 + $950,000 = $17,450,000) gives a debt to equity ratio of approximately 1.47:1, or $1.47 of debt for every $1 of equity. This shows that Capex Ltd's gearing has significantly worsened between 2012 and 2013, meaning the business now relies more heavily on debt finance relative to owner's equity, which increases its financial risk and the level of interest repayments it must service, potentially making it harder to secure additional finance, such as for the new filtration equipment, without increasing risk further."
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
    "sampleAnswer": "Working capital = Current assets − Current liabilities = ($400,000 + $2,500,000 + $3,600,000) − ($1,000,000 + $9,600,000) = $6,500,000 − $10,600,000 = −$4,100,000. Capex Ltd has negative working capital of $4,100,000 in 2013."
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
    "sampleAnswer": "Debt finance is funding sourced externally to a business through borrowing from a financial institution or other lender, which must be repaid over an agreed period through both principal and interest repayments. It can be either short-term, such as an overdraft or commercial bill, or long-term, such as a mortgage or debentures. Unlike equity finance, debt finance does not result in any loss of ownership or control for the business's owners, but it does create a legal obligation to make repayments regardless of the business's profitability."
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
    "sampleAnswer": "Capex Ltd should raise the $10 million needed for the new filtration equipment by issuing new shares (equity finance) on the Australian Securities Exchange. As Capex is already highly geared, with a debt to equity ratio of approximately 1.47:1 in 2013 compared to the industry average of 1.5:1, and has negative working capital, taking on an additional $10 million in debt finance would push its gearing well above the industry average and further strain its ability to meet short-term obligations, increasing its financial risk. Issuing new shares would raise the required funds without adding to Capex Ltd's liabilities or interest repayment obligations, helping preserve its solvency and liquidity position while still allowing it to acquire the equipment needed to improve product quality and compete effectively in the American market."
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
    "sampleAnswer": "One global financial management strategy Capex Ltd should consider is using a letter of credit when purchasing the Hepa Filtration equipment from its American supplier. A letter of credit is a safer method of international payment as it involves a commitment by the importer's bank to pay the exporter once agreed shipping and delivery documents are presented, protecting both parties from the risk of non-payment or non-delivery. Given that Capex Ltd is committing $10 million to this purchase, using a letter of credit would reduce the financial risk associated with the transaction and provide greater certainty around payment terms, helping Capex Ltd to secure the equipment reliably and compete more effectively by ensuring its products meet the sterile production standards required in the American market."
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
    "sampleAnswer": "Two influences on the operations function of a business are technology and government policies/legal regulation. Advances in technology can allow a business to automate production processes, improve efficiency and reduce costs, while legal regulations such as work health and safety laws and environmental legislation require the business to operate within set standards, affecting how goods and services are produced."
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
    "sampleAnswer": "One advantage of using a just-in-time (JIT) approach to inventory management is that it minimises the amount of money tied up in holding stock. By ordering inventory only as it is needed for production or sale, a business reduces costs associated with warehousing, insurance and stock obsolescence, freeing up funds that can be used more productively elsewhere in the business."
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
    "sampleAnswer": "A business that provides high-quality customer service, meeting and exceeding customer expectations at every point of contact, builds customer loyalty and encourages repeat purchases. This helps the business retain existing customers while also attracting new ones through positive word-of-mouth and a strong reputation, which builds long-term relationships that underpin the ongoing success of the business."
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
    "sampleAnswer": "An operations manager can improve quality by implementing quality control, which involves inspecting or testing products at different stages of the production process to identify and remove defective items before they reach the customer. This helps the business maintain its reputation for reliable products and builds customer confidence, supporting higher sales. A second approach is quality assurance, where the business adopts a set of pre-determined standards, such as the international ISO 9000 standard, to ensure products are fit for their intended purpose. Achieving accreditation under such a standard signals quality to consumers and can be used as a marketing tool to attract more sales."
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
    "sampleAnswer": "PSL could offer flexible working arrangements, such as the ability to choose start and finish times, as a non-monetary benefit to help retain staff."
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
    "sampleAnswer": "PSL could introduce team briefings, where employees join together in direct, face-to-face communication with management on a regular basis. These meetings give staff the opportunity to share knowledge, skills and experience, and to help identify and solve workplace problems. This improves staff well-being at PSL because regular, open communication helps prevent conflicts before they escalate, builds a positive workplace culture, and gives employees a sense of ownership and shared purpose, which increases morale and job satisfaction."
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
    "sampleAnswer": "Family friendly work arrangements provide opportunities for home-based work, flexible working hours, job sharing, part-time work and career breaks that allow employees to balance work and family responsibilities more effectively. PSL could offer staff options such as flexible rostering, part-time hours around school pick-up times, or access to child care support.\n\nFor PSL's employees, these arrangements provide greater flexibility during working hours, and staff are likely to feel more valued, which increases morale and motivation. As a result, employees are likely to take less time off work, reducing absenteeism, and become more productive during the hours they do work. Staff are also more likely to be retained by PSL in the long term, increasing their opportunities for promotion and career development, which further increases job satisfaction.\n\nThe business also benefits from implementing family friendly work arrangements. Because staff are able to leave and re-enter the workforce around family commitments rather than resigning altogether, PSL reduces the costs of separation, recruitment and training of new staff. Daily costs associated with absenteeism and lost productivity are also minimised. Overall, this results in the retention of highly trained and motivated staff, a reduced risk of legal action from dissatisfied employees, and a more positive image for PSL in the wider community, which can also enhance its reputation as an employer and retailer."
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
    "sampleAnswer": "One consumer law is the Competition and Consumer Act 2010. One purpose of this Act is to protect consumers from misleading and deceptive advertising by prohibiting businesses from making false or exaggerated claims about their products."
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
    "sampleAnswer": "A business could use sales analysis to measure the success of its marketing plan by comparing the difference between forecast sales and actual sales achieved. If actual sales exceed the forecast sales figure, this indicates that the marketing plan has been effective in generating demand for the product."
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
    "sampleAnswer": "One communication process a business can use to reach its target market is the use of opinion leaders. A business can engage well-respected individuals, such as sports stars or celebrities, to endorse its product, allowing the marketing message to be delivered more credibly and effectively to a specific target market. For example, Gillette has targeted young men by using tennis star Roger Federer to advertise its razors. Although this endorsement is expensive, Gillette experienced a worldwide sales increase of around 10% following the campaign, largely due to the positive, trustworthy image Federer brought to the brand. This shows that using an opinion leader can be a highly effective communication process, as consumers are more likely to trust and act on a recommendation from someone they respect and admire, provided the opinion leader is well matched to the target market and the cost of the endorsement is justified by the resulting increase in sales."
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
    "sampleAnswer": "House Party's liquidity is calculated as current assets ($55,000 + $20,000 + $45,000 = $120,000) divided by current liabilities ($89,000 + $35,000 = $124,000), giving a current ratio of 0.97:1. This is well below the industry average of 2:1, indicating that House Party does not have sufficient current assets to comfortably cover its current liabilities, meaning the business may struggle to pay its short-term debts as they fall due."
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
    "sampleAnswer": "House Party's accounts receivable turnover ratio is calculated as (Accounts Receivable ÷ Sales) × 365 = ($45,000 ÷ $300,000) × 365 = approximately 54.75, or 55 days. This is more than double the industry average of 26 days, indicating that House Party is taking significantly longer than similar businesses to collect payment from its debtors, which reflects poor efficiency in managing its accounts receivable and could be contributing to its liquidity problems."
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
    "sampleAnswer": "House Party could improve its liquidity by tightening its credit policy, for example by reducing the credit period offered to debtors or requiring a deposit on large orders. This would speed up the collection of accounts receivable, increasing the amount of cash available in the business to meet its current liabilities, such as accounts payable and the overdraft, as they fall due."
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
    "sampleAnswer": "One strategy House Party could use to improve efficiency is offering discounts for early payment to its debtors. By providing a small discount to customers who pay their accounts before the due date, House Party would receive its accounts receivable amounts more quickly, which would reduce the accounts receivable turnover ratio and improve its efficiency, as well as its liquidity.\n\nA second strategy is factoring, where House Party sells its accounts receivable to a factoring company at a discounted rate in exchange for immediate cash. Although House Party would receive slightly less than the full value of the debt owed, this allows the business to access funds much more quickly and put them towards productive use, such as reducing its overdraft, which would also improve its efficiency and reduce reliance on debt finance."
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
    "sampleAnswer": "A sociocultural influence Naturally Wild needs to consider is that attitudes towards eating kangaroo and crocodile meat vary significantly across different Asian cultures and religions; some markets may view these meats as a novelty or delicacy, while others may find them culturally unacceptable due to religious beliefs or dietary customs. This means marketing management must carefully research the target country's cultural values before promoting the product, and may need to adapt its promotional messages, packaging, or even product range for different Asian markets to avoid causing offence and to maximise acceptance.\n\nA psychological influence Naturally Wild must consider is consumer perception, as unfamiliar meats such as kangaroo and crocodile can trigger hesitancy or negative associations for some consumers who are unused to eating these products. Marketing management may need to use promotional strategies such as sampling, educational advertising about the meat's taste and nutritional benefits (e.g. lean, low-fat protein), and positioning it as a premium or exotic product, in order to shift consumer attitudes and build a positive perception that encourages trial and repeat purchase."
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
    "sampleAnswer": "Globalisation, the increasing integration and interdependence of national economies, gives Naturally Wild access to new overseas markets such as Asia, but it also significantly affects the marketing management decisions the business must make. In terms of global marketing strategy, Naturally Wild must decide between standardisation, using the same product, branding and marketing message across all markets to reduce costs and build a consistent global brand, and customisation, adapting its product, packaging and promotion to suit local Asian tastes, cultural attitudes and dietary customs surrounding kangaroo and crocodile meat. Given the cultural sensitivities around these meats, some degree of customisation is likely necessary, for example altering flavourings, portion sizes or packaging information to suit different national markets, even while maintaining a consistent overall brand identity.\n\nGlobalisation also affects Naturally Wild's approach to global pricing, as the business must consider currency fluctuations, freight and tariff costs, and the price sensitivity of new Asian consumers when setting export prices, potentially requiring different pricing strategies in different countries. Additionally, globalisation increases competitive pressure, as Naturally Wild will now be competing against both local Asian meat producers and other international exporters, requiring marketing management to invest in competitive positioning and branding, such as emphasising Naturally Wild's clean, sustainable Australian origin as a point of difference, to succeed in these new, more competitive global markets."
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
    "sampleAnswer": "EucaLife's operations can be influenced by the Work Health and Safety Act, which requires the business to ensure the safe operation of its new machinery and provide employees with adequate training, supervision and protective equipment when manufacturing desks and cabinetry. This means EucaLife must invest in safety procedures and staff training around the new machinery it has purchased, which affects how its transformation process is designed and adds a compliance cost to its operations."
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
    "sampleAnswer": "One advantage of holding stock at EucaLife is that it allows the business to meet the recent increase in demand for desks and cabinetry even when high-quality timber is difficult to source due to the Australian bushfires, acting as a buffer against uncertain supply. Holding larger volumes of timber may also allow EucaLife to access bulk-buy discounts from suppliers, reducing the cost per unit of input.\n\nHowever, a disadvantage is that holding stock ties up capital in EucaLife's new, larger warehouse that could otherwise be used elsewhere in the business, and increases costs such as storage, insurance and handling of both the timber inputs and finished furniture. There is also a risk that finished desks and cabinetry may become obsolete or damaged while held in the warehouse before delivery, which would result in EucaLife having to sell this stock at a reduced price or write it off as a loss."
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
    "sampleAnswer": "Global sourcing would be a beneficial operations strategy for EucaLife, as it would allow the business to source high-quality timber from overseas suppliers, overcoming the current supply constraint caused by recent Australian bushfires and enabling it to keep pace with its increased demand for desks and cabinetry. By sourcing from a global web of suppliers rather than relying solely on the domestic market, EucaLife would gain greater flexibility and be able to secure inputs of consistent quality even during future local supply shocks, and may also access timber at a lower cost, improving the business's competitiveness.\n\nHowever, global sourcing may not be entirely appropriate for EucaLife, as importing timber increases lead times and transport costs, and introduces risks around the quality and sustainability certification of overseas timber, which is important given EucaLife's furniture-making reputation. It may also undermine EucaLife's positioning as an Australian-based manufacturer if a significant portion of its raw materials become imported. Overall, global sourcing is a useful strategy to manage the immediate supply shortage, but EucaLife should use it selectively alongside efforts to secure alternative domestic timber suppliers."
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
    "sampleAnswer": "One limitation of financial reports Lobe must consider is that Vibe Shoes' building is recorded on the balance sheet at $120,000, but this figure may be based on historical cost rather than current market value, meaning the true value of this asset could be significantly higher or lower than stated, which could lead Lobe to over- or under-value Vibe Shoes as part of the acquisition decision."
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
    "sampleAnswer": "As a company, Lobe must comply with the Corporations Act 2001 and is regulated by the Australian Securities and Investments Commission (ASIC), which requires Lobe to prepare and lodge annual financial statements and, if it raises finance through a new share issue to fund the Vibe Shoes acquisition, to submit a prospectus to ASIC. Lobe is also subject to company taxation, a direct tax levied on its profits, which reduces the funds available for the acquisition and must be factored into Lobe's financial planning and cash flow management."
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
    "sampleAnswer": "Given that Lobe already has a debt-to-equity ratio of 2.73:1, well above the industry average of 1:1, an appropriate source of finance to fund the acquisition of Vibe Shoes would be equity, such as a rights issue. A rights issue involves offering existing shareholders the right to purchase new shares in Lobe in proportion to their current shareholding, in order to raise additional capital.\n\nA key advantage of using a rights issue is that it does not increase Lobe's level of debt, meaning it would not worsen the business's already high gearing ratio, and would therefore not add further interest expenses or default risk. It is also generally easier and cheaper to raise funds from existing shareholders who are already familiar with and confident in Lobe's business model, and rights issues may not require the same level of regulatory approval as a full public share offer.\n\nHowever, a disadvantage of a rights issue is that it dilutes the ownership and earnings per share of the company, as more shares are issued to raise the same amount of capital, which may reduce the share price and be viewed negatively by the market. There is also a risk of undersubscription if existing shareholders do not take up their rights, meaning Lobe may not raise the full amount required to fund the acquisition. On balance, given Lobe's high existing gearing, equity finance such as a rights issue is a more appropriate strategy than further debt finance to fund the Vibe Shoes acquisition."
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
    "sampleAnswer": "An enterprise agreement would be justified at Mara Clothing because it can be tailored to the specific needs of its 1000 retail staff, for example by offering pay and conditions such as flexible rostering for weekend and overtime work that better suit the retail environment than the current award. Given that staff turnover has risen sharply to 18% and disputes between employees have increased, negotiating an enterprise agreement collectively with staff input would help address these underlying issues by improving conditions and including formal dispute resolution procedures, which should improve staff satisfaction, reduce turnover and restore productivity."
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
    "sampleAnswer": "Mara should use grievance procedures because they allow management to address individual employee complaints and disputes early and informally, before they escalate into more serious, costly and time-consuming formal resolution methods such as involvement of the Fair Work Commission, which would further reduce productivity. With 1000 staff and an increasing number of disputes, having a clear, transparent grievance procedure would give all employees confidence that their concerns are being taken seriously and resolved fairly, which should help address the causes of the rising 18% staff turnover and rebuild trust and morale within the workforce."
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
    "sampleAnswer": "One HR strategy Mara Clothing could use is training and development, providing retail staff with improved product knowledge, customer service and conflict-resolution skills. Given that staff turnover has increased and disputes have risen, better trained staff would be more confident in their roles and better equipped to resolve minor workplace issues themselves, which should reduce disputes, lower staff turnover and improve overall productivity across the 1000-strong workforce.\n\nA second strategy is improving Mara's rewards system, for example by introducing performance-based bonuses or recognition programs tied to sales or customer service targets. This would help address the underlying dissatisfaction likely contributing to the rise in staff turnover from 10% to 18%, by making employees feel more valued and motivated, which in turn should reduce the costs associated with high staff turnover, such as recruitment and training of replacement staff, and improve overall effectiveness measures such as productivity and staff retention."
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
    "sampleAnswer": "QTC's total liabilities are $100,000 (overdraft) + $50,000 (short-term loans) + $540,000 (accounts payable) + $2,000,000 (mortgage) = $2,690,000. Dividing this by owner's equity of $2,720,000 gives a debt-to-equity ratio of 0.99:1. This means that for every $1 of equity, QTC has $0.99 of debt, which is far higher than the industry average of 0.3:1. This indicates that QTC is highly geared and relies heavily on debt finance, placing it at greater risk of being unable to meet its financial obligations (insolvency) compared to other businesses in its industry."
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
    "sampleAnswer": "As QTC is highly geared, it is recommended that management use a sale and leaseback strategy to address its solvency problem. By selling the buildings, valued at $5,000,000, and using the proceeds to pay off the $2,000,000 mortgage, QTC would substantially reduce its total liabilities, improving its debt-to-equity ratio from 0.99:1 towards the industry average of 0.3:1. QTC could then lease back the same building and pay a regular rental instalment, meaning it retains use of the property while significantly reducing its gearing and improving its ability to meet its financial obligations as they fall due."
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
    "sampleAnswer": "Given QTC's debt-to-equity ratio of 0.99:1 is well above the industry standard of 0.3:1, QTC should consider using a rights issue as a source of finance rather than further debt. A rights issue is an offer made to existing shareholders to purchase new shares in QTC, in proportion to the number of shares they currently hold, in order to raise additional capital.\n\nA key advantage of a rights issue is that, unlike a public share offer, it does not typically require full shareholder approval and is generally easier and less costly to obtain because it is raised from existing shareholders who are already familiar with QTC's business model. Importantly, because it is a form of equity rather than debt finance, a rights issue would not add to QTC's already high level of liabilities, helping to improve rather than worsen its debt-to-equity ratio.\n\nHowever, a disadvantage of a rights issue is that it dilutes the value of each existing share, because more shares are issued in the company without a proportional increase in profit in the short term. There is also a risk of undersubscription, where existing shareholders choose not to take up their rights, meaning QTC may not raise the full amount of funds it requires. Overall, given QTC's need to reduce its gearing, a rights issue is an appropriate source of finance, provided QTC can manage shareholder expectations around dilution."
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
    "sampleAnswer": "One transforming resource used by VQ is its human resources, such as reception staff, chefs and spa therapists, who use their skills to convert inputs into the accommodation, dining and spa services provided to guests."
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
    "sampleAnswer": "The Work Health and Safety Act influences operations management at VQ by requiring the business to ensure that its worksite, including the kitchen, restaurant and spa facilities, is safe for both staff and guests. This means VQ's operations processes must incorporate safe use of machinery and equipment, such as kitchen appliances and spa equipment, along with proper training, supervision and provision of protective equipment for staff, which affects how tasks are designed and adds compliance costs to the business's day-to-day operations."
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
    "sampleAnswer": "VQ could use quality control to help achieve its operations objectives, by inspecting and checking each hotel room, meal and spa treatment against a set standard before it is delivered to the guest. For example, housekeeping could use a checklist to ensure each room is cleaned to standard before a guest checks in, and the kitchen could taste-test dishes before serving. This helps VQ maintain consistent, high-quality accommodation and dining experiences, which supports its objective of quality as a boutique, high-end hotel and helps build a strong reputation and repeat custom.\n\nVQ could also use quality assurance, adopting a set of pre-determined standards or accreditation that all rooms, food service and spa treatments must meet. Staff would be trained to follow standardised procedures for each guest interaction, from check-in to spa treatments, ensuring the entire guest experience is consistent regardless of which staff member is on duty. This is particularly important for VQ as a boutique hotel, where its reputation for premium, personalised service is central to its competitive position, and achieving formal quality accreditation could also be used as a marketing tool to attract guests seeking a guaranteed high-quality experience."
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
    "sampleAnswer": "An award refers to the minimum wages and conditions an employee is legally entitled to, depending on the industry they work in or the type of job they perform. Whereas, enterprise agreements are collective agreements negotiated at the level of an individual workplace, specific to a company or group of companies and their employees, reflecting the particular needs of that workplace. Enterprise agreements can cover matters such as pay, overtime, allowances, hours of work and leave, and must include a dispute resolution procedure and an expiry date. Unlike awards, enterprise agreements must be approved by the Fair Work Commission and must pass the Better Off Overall Test (BOOT), ensuring employees are better off than under the relevant award."
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
    "sampleAnswer": "As negotiations between Key Airways and the TWU have stalled, it is recommended that the parties use mediation to resolve the dispute. Mediation involves a confidential discussion of the issues, in this case the disagreement over a pay rise below inflation, in a non-threatening environment with the assistance of a neutral, objective third party. Mediation would allow Key Airways and the TWU to negotiate a resolution themselves with the guidance of the mediator, removing bias and potentially leading to a fairer and more timely outcome for both parties, while being significantly more cost-effective than escalating the dispute to more formal methods such as arbitration through the Fair Work Commission."
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
    "sampleAnswer": "This business shows a clear interdependence between human resources management and profitability management. Training expenditure per employee was cut significantly from $2,200 to $700, which contributed to the decline in the expense ratio from 22% to 12%, helping the business meet its profitability objectives in the short term. However, this reduction in training appears to have negatively affected human resources outcomes, as the number of accidents per 1000 employees rose from 22 to 27 and absenteeism per employee increased from 12 to 20 days, likely because staff were less well trained and possibly less satisfied with reduced investment in their development.\n\nThis rise in absenteeism and accidents is likely to increase costs in the longer term, for example through workers' compensation claims, lost productivity and the cost of temporary replacement staff, which would work against the short-term profitability gains achieved by cutting the expense ratio. While staff turnover fell from 12% to 7%, reducing recruitment costs, the sharp rise in absenteeism suggests employees may be dissatisfied and are taking indirect action rather than resigning outright. This demonstrates that human resources decisions, such as cutting training expenditure to reduce expenses, are directly interdependent with profitability management, as short-term cost savings in one area can create hidden long-term costs elsewhere in the business."
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
    "sampleAnswer": "The café should use an indirect distribution channel, such as partnering with a food delivery platform like Uber Eats or Menulog, to address its decline in sales during COVID lockdowns. This would allow the café to reach customers who are unable or unwilling to visit the CBD in person, using the delivery platform's existing infrastructure and customer base rather than the café having to build its own delivery service, which would help recover lost sales quickly and cost-effectively while restrictions remain in place."
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
    "sampleAnswer": "During the economic contraction caused by COVID lockdowns, characterised by higher unemployment and reduced incomes, consumer confidence falls and customers become more inclined to save rather than spend on discretionary items such as café meals and coffee. In response, the café's marketing strategies need to adjust, for example by using value-based pricing strategies or promotional discounts and loyalty offers to encourage customers to continue spending despite reduced disposable income, and by promoting cheaper menu items or bundle deals.\n\nHowever, as economists are forecasting a rapid economic recovery later in the year, characterised by falling unemployment and rising incomes, consumer confidence is expected to increase, meaning customers will feel more comfortable spending on discretionary items again. The café's marketing strategies should shift in anticipation of this upswing, for example reintroducing premium menu items, increasing promotional spending to rebuild customer traffic, and using advertising to remind customers of the in-café dining experience, in order to take full advantage of the recovery in economic activity and consumer spending."
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
    "sampleAnswer": "Relationship marketing, which aims to encourage repeat business by managing relationships and building customer loyalty, would be an effective strategy for the café to address its decline in sales during COVID lockdowns. By introducing a loyalty program, such as a stamp card or app-based rewards system offering a free coffee after a set number of purchases, the café can encourage previously lost customers to return and build ongoing loyalty once restrictions ease. The café could also use customer relationship management (CRM) tools, such as an email or SMS database, to send personalised promotions and updates to regular customers, keeping the business front-of-mind during the lockdown period and encouraging customers to return as soon as they are able.\n\nHowever, relationship marketing alone may not be sufficient to fully address the decline in sales, as its effectiveness depends on the café already having an established customer base and the data/systems needed to track and communicate with customers, which a small CBD café may not have invested in previously. It is also a longer-term strategy, focused on retention and repeat business, rather than directly solving the immediate cause of the sales decline, being lockdown restrictions on foot traffic. Therefore, while relationship marketing is a valuable strategy to rebuild loyalty and sales once restrictions ease, it should be used alongside other strategies, such as indirect distribution channels, to address the immediate decline in sales during the lockdown itself."
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
        "sampleAnswer":  "A good is a tangible item that can be seen, touched and stored, such as a manufactured product, whereas a service is an intangible offering that cannot be touched or stored and is usually produced and consumed at the same time, such as a haircut or financial advice."
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
        "sampleAnswer":  "Efficiency, as measured by the expense ratio, was the financial objective for which T-Bone\u0027s Cuts performed worse than the industry average in 2012, recording 0.8:1 compared to the industry average of 0.7:1."
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
        "sampleAnswer":  "T-Bone\u0027s Cuts\u0027 liquidity, measured by the current ratio, improved from 0.9:1 in 2011 to 1.1:1 in 2012. This means the business now has $1.10 in current assets for every $1 of current liabilities, which is better than the industry average of 1:1. This indicates the business is now in a stronger position to meet its short-term debts as they fall due."
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
        "sampleAnswer":  "Two sources of resistance to change for Stones Pty Ltd are the financial costs involved in purchasing new equipment, and inertia, where employees are comfortable with existing processes and reluctant to adopt new ones."
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
        "sampleAnswer":  "Effective sequencing and scheduling, using tools such as Gantt charts and critical path analysis, will allow Stones Pty Ltd to plan the order and timing of production tasks. This reduces wastage and idle time, improves the reliability of delivery to customers, and lowers overall production costs, helping the business remain competitive."
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
        "sampleAnswer":  "Performance management is a systematic process used by a business to evaluate and manage the performance of its employees, with the aim of improving individual and organisational effectiveness and achieving the best possible outcomes for the business."
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
        "sampleAnswer":  "Performance management can be used for a developmental purpose, helping to identify and build the skills and abilities of employees so they can overcome weaknesses and prepare for future roles, and for an administrative purpose, providing management with information that can be used for planning in human resources, such as decisions about promotion or remuneration."
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
        "sampleAnswer":  "One tool that could be used is 360 degree feedback, where an employee\u0027s performance is assessed using feedback gathered from a range of sources including supervisors, peers, subordinates and the employee themselves. This gives a rounded, comprehensive picture of an employee\u0027s performance, such as Sam\u0027s telephone manner and interactions with co-workers, from multiple perspectives."
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
        "sampleAnswer":  "Three elements of the promotion mix are advertising, which is a paid, non-personal message communicated through media such as television or social media to inform and persuade customers; personal selling, which involves direct, face-to-face communication between a salesperson and a potential customer to promote a sale; and sales promotion, which uses short-term incentives, such as discounts or competitions, to encourage the immediate purchase of a good or service."
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
        "sampleAnswer":  "T-Bone\u0027s Cuts should use leasing to finance the new computer. Leasing allows the business to use the equipment without a large upfront cash outlay, spreading the cost over regular lease payments that match the useful life of the computer. This preserves the business\u0027s cash flow for other purposes, and lease payments are generally tax-deductible, making it a suitable and cost-effective option for financing a relatively low-cost, short-life asset such as a computer."
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
        "sampleAnswer":  "Using equity finance to purchase the $75,000 non-current asset has several advantages. There is no interest to be repaid, which reduces ongoing financial pressure on the business, and because equity is not a liability, it improves T-Bone\u0027s Cuts\u0027 solvency and reduces its gearing. However, there are also disadvantages. Bringing in new owners to raise equity may dilute the existing owner\u0027s control over the business, and new owners may expect higher future profits or dividends in return for their investment. Unlike interest on debt, returns paid to equity holders are not tax deductible, and any dividend payments will reduce the cash available to the business."
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
        "sampleAnswer":  "One indicator a business can use is staff turnover: a high rate of staff leaving, especially where complaints about poor workplace behaviour like Sam\u0027s are common, suggests HR management has not effectively addressed conduct and morale issues, whereas low turnover suggests HR strategies such as training and performance management are working well. A second indicator is the level of internal disputes or complaints, such as those made about Sam by co-workers and customers; a rise in such complaints indicates that HR processes, including recruitment, induction or performance management, are not effectively equipping and managing staff, signalling a need for intervention such as further training or disciplinary action."
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
        "sampleAnswer":  "When marketing services, people, processes and physical evidence are essential because, unlike goods, services are intangible and are experienced directly by the customer. People are important because staff are often the face of the service; for example, a bank teller\u0027s friendliness and competence directly shapes a customer\u0027s perception of the whole business, so businesses must recruit, train and motivate staff to be customer-focused. Processes matter because the systems used to deliver a service, such as how quickly a café takes and fulfils an order, determine customer satisfaction and repeat business; inefficient processes can quickly damage a service business\u0027s reputation. Physical evidence is important because customers use tangible cues, such as the cleanliness and décor of a restaurant or the design of a website, to judge the quality of an otherwise intangible service before, during and after purchase. Together, these three elements build customer trust and satisfaction, which are critical to the success of any service-based business."
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
        "sampleAnswer":  "Monitoring involves Stones Pty Ltd continuously observing key aspects of its operations, such as production cost, time, quality and reliability of delivery. Control involves comparing these observations against pre-set benchmarks or standards to evaluate whether performance is meeting expectations. Where performance falls short, the business moves to the improvement stage, making changes to processes, technology or staff training to close the gap. By continually cycling through monitoring, control and improvement, Stones Pty Ltd can identify inefficiencies early, respond quickly to problems, and continuously refine its operations processes, allowing it to keep costs down, maintain quality and remain competitive as market conditions change."
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
        "sampleAnswer":  "Two objectives of financial management are profitability, which refers to a business\u0027s ability to maximise its net income relative to its size, and liquidity, which refers to the extent to which a business can meet its short-term financial commitments as they fall due."
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
        "sampleAnswer":  "Normalised earnings are a business\u0027s earnings that have been adjusted to remove the effect of one-off or unusual items, or to account for changes in the economic cycle, so that the figure more accurately reflects the business\u0027s typical or underlying financial performance."
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
        "sampleAnswer":  "Notes to the financial statements are important because they provide stakeholders, such as investors and creditors, with additional detail and context about the figures reported in the statements. This extra information helps stakeholders make more informed and accurate judgements about the business\u0027s true financial position and performance, rather than relying only on the summary figures."
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
        "sampleAnswer":  "Two influences on the operations function are technology, which can improve efficiency and reduce production costs, and government policies and legal regulation, such as environmental or workplace safety laws, which businesses must comply with when designing their operations processes."
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
        "sampleAnswer":  "Just-in-time (JIT) inventory management is a system where inputs arrive only as they are needed in the production process. An advantage of this is that it reduces the amount of storage space and warehousing costs a business needs, since large amounts of stock are not held on hand, freeing up capital that would otherwise be tied up in unused inventory."
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
        "sampleAnswer":  "Supply chain management involves the integration and coordination of all the activities involved in sourcing inputs, transforming them into outputs, and distributing the finished product to customers. Effective supply chain management contributes to business success by ensuring inputs are available when needed and outputs reach customers efficiently, which reduces costs, minimises delays and improves reliability, ultimately protecting the business\u0027s profitability and reputation."
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
        "sampleAnswer":  "All employers must comply with anti-discrimination laws because these laws have been enacted to protect employees from unfair treatment in the workplace. Compliance is a legal requirement for every business, and all employees have a right to work in an environment that is safe, fair and free from harassment based on characteristics such as gender, race, age or disability."
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
        "sampleAnswer":  "Comparative ratio analysis is the process of comparing a business\u0027s financial ratios over successive periods, or against industry benchmarks and competitors. The purpose of this is to allow management and other stakeholders to assess how well the business has performed relative to its past results or to similar businesses, identify trends, strengths and weaknesses, and use this information to make informed decisions about strategies that could improve future financial performance."
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
        "sampleAnswer":  "An operations manager could recommend quality control, where products are inspected at various points during production to detect and remove defective items before they reach the customer, protecting the business\u0027s reputation for reliability. A second recommended approach is quality assurance, which involves establishing a system of standards and procedures throughout the production process to ensure quality is built in from the start, reducing the likelihood of defects occurring in the first place and lowering the costs associated with rework and returns."
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
        "sampleAnswer":  "Marketing objectives are the realistic and measurable goals a business sets to be achieved through its marketing plan, such as increasing market share, expanding the product mix, or maximising customer service. Evaluating these objectives is highly important because it allows management to determine whether the marketing plan is actually achieving its intended results, and to identify any gaps between planned and actual performance. Given that markets and consumer preferences are constantly changing, regular evaluation ensures management understands the business\u0027s progress and can revise objectives and strategies where necessary, helping to ensure the ongoing effectiveness and relevance of the marketing plan and, ultimately, the long-term success of the business."
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
        "sampleAnswer":  "Ethical behaviour, which involves a business acting with honesty, fairness and social responsibility beyond the minimum legal requirements, has a significant impact on business success across all key business functions. In operations, ethical behaviour such as environmentally sustainable practices can protect a business\u0027s reputation and reduce the risk of regulatory penalties; for example, a manufacturer that reduces waste and pollution builds goodwill with the community and regulators. In marketing, ethical conduct such as truthful and accurate advertising builds long-term consumer trust, whereas unethical practices such as misleading claims can result in reputational damage, loss of customers and legal action under consumer protection law. In finance, ethical behaviour such as accurate and honest financial reporting maintains the confidence of investors, lenders and other stakeholders, which is essential for accessing finance and maintaining share price. In human resources, treating employees fairly and providing safe working conditions improves staff morale, reduces turnover and enhances a business\u0027s reputation as an employer. Overall, businesses that behave ethically tend to build stronger, more trusting relationships with stakeholders, which supports long-term profitability and success, whereas unethical behaviour can cause significant reputational and financial harm."
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
        "sampleAnswer":  "Outsourcing HR functions, such as payroll processing, to a specialist provider can reduce a business\u0027s costs because the provider can perform the task more efficiently and at a lower cost than an in-house team, due to their expertise and economies of scale. This reduction in HR overheads directly increases profitability, and it also frees up management\u0027s time and resources to focus on core, revenue-generating activities of the business."
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
        "sampleAnswer":  "One method of resolving a workplace dispute is mediation, where an independent third party helps the disputing parties, such as an employer and employee, to discuss the issue and negotiate a mutually acceptable solution, without imposing a binding decision on either party."
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
        "sampleAnswer":  "Ethics could influence TMAC\u0027s marketing function through the requirement for truth and accuracy in advertising. As TMAC enters the highly competitive retail chocolate market, it would be unethical to make exaggerated or misleading claims about the health benefits or ingredients of its chocolate bars in order to attract customers away from rivals; instead, the business should ensure all promotional claims about its product are honest and can be substantiated."
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
        "sampleAnswer":  "Consumer laws, particularly the Australian Consumer Law under the Competition and Consumer Act, will significantly influence TMAC\u0027s promotional strategy, as they prohibit the business from engaging in deceptive or misleading advertising when promoting its new chocolate bar. This means TMAC cannot make false claims about the product\u0027s quality, ingredients or origin to gain a competitive edge, and must ensure any comparative advertising against competitors\u0027 products is accurate, limiting the promotional tactics TMAC can legally use."
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
        "sampleAnswer":  "There should be a relationship between TMAC\u0027s marketing planning process and its finance budgeting process because marketing strategies, such as launching a new chocolate bar into a highly competitive market, require funding to be implemented, and this funding must be planned for and controlled through the finance budgeting process. Without this relationship, TMAC risks setting marketing objectives and strategies that the business cannot actually afford, or failing to properly monitor whether the money spent on marketing is generating an adequate return, which could threaten the business\u0027s overall financial position."
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
        "sampleAnswer":  "Effective task design will make it clear what each SEED employee\u0027s role and responsibilities are, allowing staff developing software or delivering online training to complete their tasks with greater efficiency and clarity. Combined with an effective process layout, which groups related functions together, SEED can minimise wasted time and costs in its operations. Together, these improve the speed and quality of SEED\u0027s software and training delivery, helping the business develop a competitive advantage over rival providers in the Asia-Pacific region."
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
        "sampleAnswer":  "Customer service is extremely important for SEED Pty Ltd because much of what it delivers, such as its online training programs, is a service, meaning customer service is a core part of the actual product being offered rather than an add-on. By responding effectively to customer feedback and enquiries during service delivery, SEED can identify where its software or training is falling short of customer needs and make adjustments accordingly, directly improving the quality of its outputs and helping to maintain customer satisfaction and loyalty in a competitive global IT market."
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
        "sampleAnswer":  "The global economic outlook is an important financial consideration for Fui Fui Muscle Up because factors such as the state of the global economic cycle, exchange rate movements and overseas consumer demand will directly affect the success of its planned offshore expansion. If global economic conditions are weak, demand for fitness equipment overseas may fall and access to the $20 million in finance required may become more difficult or expensive, whereas favourable global conditions would support stronger sales and more efficient use of resources when expanding into new international markets."
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
        "sampleAnswer":  "TMAC could use branding as a product strategy to achieve its premium positioning goal. By developing a distinctive brand identity, such as an elegant logo, premium ingredients messaging and sophisticated packaging design, TMAC can create a perception of high quality and exclusivity in the minds of consumers. This differentiates the chocolate bar from cheaper, mass-market competitors and justifies a higher price point, reinforcing the premium image TMAC wants to establish in the highly competitive retail chocolate market."
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
        "sampleAnswer":  "TMAC could use a price skimming strategy, setting the chocolate bar\u0027s initial price relatively high compared to standard chocolate bars on the market. Because consumers often associate a higher price with higher quality, this reinforces the premium positioning TMAC wants to achieve and signals to customers that the product is a superior, high-end offering, helping to differentiate it from cheaper, mass-market chocolate bars sold by competitors."
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
        "sampleAnswer":  "One advantage of a diverse, culturally competent workforce for a global business is increased creativity and innovation. Employees from different cultural backgrounds bring a wider range of perspectives, experiences and problem-solving approaches to the workplace, which can lead to more innovative products, marketing ideas and business solutions. For a global business, this diversity of thought can also improve the business\u0027s understanding of, and ability to respond to, the needs of customers in different international markets, giving it a competitive advantage over less culturally diverse competitors."
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
        "sampleAnswer":  "Two suitable external sources of finance for Fui Fui Muscle Up\u0027s $20 million expansion are a mortgage and a new share issue. A mortgage is a long-term loan secured against property or other assets, providing a large sum of finance over a long repayment period that matches the long-term nature of an offshore expansion. Alternatively, Fui Fui Muscle Up could raise equity finance through a new share issue, selling additional shares in the company to investors, which would provide substantial capital without creating a fixed repayment or interest obligation, making it well suited to funding significant, long-term growth plans."
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
        "sampleAnswer":  "Fui Fui Muscle Up could use hedging as a global financial management strategy to reduce the risks of selling its fitness equipment overseas. Hedging involves using financial instruments, such as forward exchange contracts, to lock in a specific exchange rate for a future transaction. This protects Fui Fui Muscle Up from the risk of adverse currency fluctuations between the time a sale is agreed and when payment is received, ensuring the business receives a predictable amount of revenue in Australian dollars. This reduces financial uncertainty and allows the business to more confidently plan and budget for its offshore expansion, despite the volatility of global currency markets."
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
        "sampleAnswer":  "SEED Ltd needs to balance cost and quality because operations strategies that reduce costs can often compromise the quality of the software and training services it delivers, which is particularly risky in a competitive global market where SEED\u0027s reputation for reliable, high quality IT products is central to its success. For example, SEED could reduce costs through outsourcing parts of its software development to lower-cost overseas providers, taking advantage of global sourcing and economies of scale. However, if this outsourcing reduces the quality or reliability of the software produced, SEED risks damaging its reputation and losing customers across the Asia-Pacific region to competitors. Similarly, investing in leading-edge technology could improve quality but increase costs, which may need to be passed on to customers, reducing SEED\u0027s price competitiveness internationally. SEED must therefore continually assess this cost/quality trade-off, ensuring that any cost-saving operations strategies do not undermine the quality outputs that are critical to maintaining its position and reputation in the global market."
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
        "sampleAnswer":  "Fabulous Fashion Pty Ltd primarily operates in the consumer market, selling women\u0027s clothing directly to individual customers for their personal use, where purchasing decisions are often influenced by fashion trends and customer service experience. It would also operate in the resource, or intermediate, market when purchasing clothing stock and supplies from wholesalers or manufacturers, which it then on-sells to consumers through its retail store."
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
        "sampleAnswer":  "Fabulous Fashion Pty Ltd should invest in staff training as a \u0027people\u0027 marketing strategy, directly targeting the poor customer service that caused the negative publicity. By training staff to provide friendly, knowledgeable and responsive service, the business can rebuild its reputation, improve the customer experience in-store, and encourage repeat visits and positive word-of-mouth, which would help the business recover lost customers and achieve its target of increasing market share by 10% within six months."
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
        "sampleAnswer":  "The Australian Consumer Law prohibits businesses from engaging in misleading or deceptive conduct, meaning Fabulous Fashion Pty Ltd must ensure any advertising about its clothing, such as claims about fabric quality or sale discounts, is truthful and can be substantiated, or it risks legal penalties and further reputational damage on top of its existing negative publicity. The Competition and Consumer Act 2010 also prohibits unfair market practices such as false representations about the standard or quality of goods, meaning Fabulous Fashion must accurately represent its products in all marketing materials, restricting the promotional claims it can make while trying to rebuild its market share."
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
        "sampleAnswer":  "The primary market is where a company, such as Fabulous Minerals Ltd, issues new shares for the first time in order to raise new capital directly from investors, for example through an initial public offering or a new share issue. The secondary market, by contrast, is where these already-issued shares are subsequently bought and sold between investors on the ASX; these trades do not raise any new capital for the company itself, but provide liquidity for shareholders."
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
        "sampleAnswer":  "The Australian Securities Exchange (ASX) plays a central role in financial markets by providing a regulated marketplace where public companies, such as Fabulous Minerals Ltd, can raise equity capital by issuing shares to investors. It also provides a secondary market where investors can buy and sell existing shares, giving them liquidity and the ability to convert their investment into cash relatively easily. The ASX further supports financial markets by enforcing listing rules and disclosure requirements that promote transparency and investor confidence, and by publishing share price information that helps investors and businesses make informed financial decisions."
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
        "sampleAnswer":  "One disadvantage of Fabulous Minerals Ltd raising finance through the ASX by issuing new shares is that it dilutes the ownership and control of existing shareholders, since the company\u0027s ownership must be divided among a larger number of shareholders; this may be a significant concern given the founders\u0027 desire to retain control of a highly successful business. A second disadvantage is the substantial cost and ongoing compliance burden of being listed on the ASX, including listing fees and strict disclosure requirements, which can be time-consuming and expensive, particularly given the size and complexity of a $250 million capital raising for a new mine."
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
        "sampleAnswer":  "The government has a substantial influence in determining employment contracts in Australia through legislation such as the Fair Work Act 2009, which establishes the National Employment Standards, setting minimum legal entitlements for all employees, such as maximum weekly hours, leave entitlements and notice of termination. Modern awards and minimum wage regulations further set baseline pay and conditions for different industries, which employers cannot legally contract below. On one hand, this government influence benefits employees by guaranteeing a fair, safe minimum standard of employment regardless of their bargaining power. On the other hand, it can be argued that this reduces flexibility for businesses to negotiate individually tailored contracts, potentially increasing labour costs and limiting a business\u0027s ability to respond quickly to changing conditions. Overall, government influence plays a critical role in balancing the protection of employee rights against the operational needs of businesses when determining employment contracts."
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
        "sampleAnswer":  "One social influence on human resource management is the growing expectation among employees for work/life balance and flexible working arrangements, driven by changing work patterns such as increased participation of women in the workforce and a greater focus on employee wellbeing. A specific example of a business responding to this influence is Atlassian, the Australian software company, which introduced a flexible \u0027“Team Anywhere”\u0027 policy allowing employees to choose where and how they work, alongside enhanced parental leave and wellbeing initiatives. This response has allowed Atlassian to attract and retain skilled staff in a highly competitive labour market, improve employee satisfaction and productivity, and strengthen its reputation as an employer of choice. By analysing this case, it is evident that businesses which proactively adapt their HR strategies to reflect changing social expectations around flexibility and wellbeing are better positioned to build a committed, motivated workforce, which directly supports the achievement of broader business goals."
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
        "sampleAnswer":  "Government policy could affect Precision Engineering Ltd\u0027s operations management through new environmental regulations, which require the business to invest at least $5 million upgrading its factory technology to remain compliant, and through occupational health and safety laws, which set legal requirements for how production processes and machinery must be designed and operated to protect workers manufacturing the diesel engines."
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
        "sampleAnswer":  "Environmental sustainability is a key concern of operations management because production processes, such as the manufacturing of diesel engines by Precision Engineering Ltd, can consume significant resources and generate pollution or emissions. Businesses must ensure their operations comply with environmental legislation, such as the new Federal regulations Precision Engineering now faces, or risk fines and legal penalties. Beyond legal compliance, failing to operate sustainably can damage a business\u0027s reputation with increasingly environmentally conscious consumers and stakeholders, while investing in more sustainable technology, although costly in the short term as seen with Precision Engineering\u0027s $5 million upgrade, can reduce long-term operating costs and protect the business\u0027s ongoing viability and reputation."
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
        "sampleAnswer":  "Change at Precision Engineering Ltd may be resisted for several reasons. First, the significant financial cost of the $5 million technology upgrade may be resisted by management or owners concerned about the impact on the business\u0027s profitability and cash flow in the short term. Second, employees may resist the change due to a fear of job losses, as new, more advanced technology could reduce the need for certain manual roles in the manufacturing process, creating anxiety about redundancy. Third, existing staff are likely to demonstrate inertia, being comfortable and familiar with current production processes and equipment, and may be reluctant to undergo the retraining required to operate new technology, seeing this as an unwelcome disruption to their established routines. On balance, these financial, job security and inertia-related concerns are all significant and legitimate sources of resistance that Precision Engineering\u0027s management will need to carefully manage, through clear communication and support, to successfully implement the required environmental upgrade."
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
        "sampleAnswer":  "A strength of Merino Pty Ltd is its strong reputation for producing high quality, Australian-made woollen garments, which has established it as a market leader that is trusted and popular with overseas tourists and older Australian consumers."
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
        "sampleAnswer":  "Transformed resources are the inputs that are actually changed or converted during the operations process, such as raw materials, information or customers themselves; for example, timber transformed into furniture. Transforming resources, on the other hand, are the inputs that carry out or perform this transformation, such as human resources (staff and their skills) and facilities (machinery, equipment and buildings). The key distinguishing feature is whether the resource is being changed by the process, or is actively carrying out the change."
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
        "sampleAnswer":  "Working capital = Current Assets - Current Liabilities. In 2020: $37,000 - $16,000 = $21,000. In 2021: $54,000 - $16,000 = $38,000. Therefore, Local Couriers\u0027 working capital increased by $17,000 between 2020 and 2021 ($38,000 - $21,000 = $17,000)."
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
        "sampleAnswer":  "Variation in demand refers to fluctuations in the amount of a good or service that customers require over time, for example due to seasonal peaks. This significantly influences a business\u0027s transformation processes because management must adjust sequencing and scheduling to cope with busier or quieter periods, and may need to alter task design, process layout or technology to increase or decrease output efficiently. Businesses must also predict changes in demand in advance so they can arrange sufficient inputs, such as raw materials, flexible or additional labour, and adequate capital equipment, ensuring the transformation process can respond to variation without compromising cost, quality or delivery reliability."
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
        "sampleAnswer":  "Accounts receivable turnover ratio = Sales ÷ Accounts Receivable. In 2020: $156,000 ÷ $24,000 = 6.5 times, meaning receivables were collected roughly every 56.2 days (365 ÷ 6.5). In 2021: $186,000 ÷ $20,000 = 9.3 times, or approximately every 39.2 days. This shows that Local Couriers\u0027 efficiency in collecting debts from customers has improved significantly between 2020 and 2021, and by 2021 the business\u0027s debt collection period had improved to within its 40-day trade credit policy, whereas in 2020 it was exceeding this target, which is a positive sign for the business\u0027s cash flow."
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
        "sampleAnswer":  "Return on equity = Net Profit ÷ Total Equity × 100. In 2020: $27,000 ÷ $61,000 × 100 = 44.26%. In 2021: $42,000 ÷ $69,000 × 100 = 60.86%. This shows that the profitability of Local Couriers, measured by return on equity, improved considerably between 2020 and 2021. For every dollar of equity the owners had invested in the business, they earned approximately 44 cents in 2020, rising to approximately 61 cents in 2021. Both results are favourable when compared with alternative low-risk investment options, such as bank interest, indicating the owners are earning a strong return on their investment in the business."
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
        "sampleAnswer":  "Normalised earnings involve adjusting reported earnings to remove the effect of irregular or one-off influences, or changes in the economic cycle. For Local Couriers, this could mean adjusting 2020 figures to account for the unusual downturn caused by the COVID-19 pandemic, giving stakeholders a more accurate picture of the business\u0027s true, ongoing earning capacity rather than one distorted by a temporary event. Capitalising expenses involves recording an expense, such as spending on research and development, as an asset on the balance sheet rather than as an expense on the income statement. If Local Couriers were to capitalise certain expenses, this would increase its non-current assets and improve its reported financial position, while also reducing expenses on the income statement, which would increase reported net profit and make the business\u0027s financial performance and position appear stronger than they otherwise would, even though the underlying cash flow is unchanged."
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
        "sampleAnswer":  "Merino Pty Ltd should first determine its information needs, identifying that it needs to understand the preferences, spending habits and fashion tastes of a younger target market it has not previously served. It would then move to data collection, gathering primary data through methods such as surveys or focus groups with younger consumers, as well as secondary data from existing industry reports on youth fashion trends. Finally, Merino would analyse and interpret this data to identify clear patterns and insights, such as preferred styles, price points or marketing channels, which would directly inform the design, pricing and promotion of its new product range aimed at younger customers."
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
        "sampleAnswer":  "Merino Pty Ltd should use social media advertising, in the form of targeted digital advertising and partnerships with youth-focused opinion leaders or influencers, as its promotional strategy for the new product range. This is a suitable choice because younger consumers spend significant time on social media platforms and are heavily influenced by opinion leaders and word-of-mouth recommendations from people they follow, unlike Merino\u0027s traditional customer base. By using visually engaging content and influencer partnerships that reflect current youth fashion trends, Merino can build awareness and credibility for its new product range among younger consumers cost-effectively, helping the business successfully expand beyond its existing 40+ and tourist customer base and offset falling sales caused by the drop in tourism."
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
        "sampleAnswer":  "In operations strategy, there is generally a direct relationship between cost and quality: as a business increases the quality of its inputs, processes or finished product, its production costs typically rise as well, for example through the use of higher-grade materials, more skilled labour or more rigorous quality control and assurance processes. Businesses must carefully balance this trade-off according to their market positioning; a premium brand such as Apple deliberately invests heavily in high-quality materials, design and manufacturing precision for its iPhones, accepting higher production costs because this supports a premium price and reinforces its brand image of superior quality. In contrast, a discount retailer such as Kmart focuses on minimising costs through strategies like large-scale, low-cost manufacturing and simplified product design, accepting a lower level of quality in order to offer the low prices that are central to its value-based positioning and target market. This shows that there is no single correct balance between cost and quality; rather, businesses must align their operations strategy with their broader marketing positioning and the expectations of their specific target market, ensuring the level of quality offered is consistent with the price customers are willing to pay."
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
        "sampleAnswer":  "One illegal marketing practice under Australian consumer law is deceptive and misleading advertising, where a business makes false or exaggerated claims about a product to induce a consumer to purchase it."
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
        "sampleAnswer":  "Psychological factors such as perception, motivation and self-image influence how a consumer interprets and responds to a product or marketing message. For example, a consumer motivated by status may choose a premium branded good over a cheaper alternative because it aligns with their self-image, while their perception of a brand\u0027s quality, built through past experience or advertising, will affect whether they trust and ultimately purchase from that business."
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
        "sampleAnswer":  "One ethical criticism of marketing is the creation of needs, where businesses use persuasive advertising to convince consumers that they need a product they did not previously want, encouraging materialism. For example, technology companies may market the latest smartphone as essential, pressuring consumers into unnecessary spending and fostering a culture of consumerism rather than genuine need."
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
        "sampleAnswer":  "A situational analysis, such as a SWOT or PEST analysis, allows a business to assess its internal strengths and weaknesses alongside external opportunities and threats in the market. By understanding factors such as competitor activity, consumer trends and economic conditions, the business can identify gaps in the market or areas of competitive advantage. This information is then used to design marketing strategies, such as targeting a particular market segment or adjusting pricing, that respond directly to the conditions identified, increasing the likelihood the strategy will succeed."
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
        "sampleAnswer":  "Finance and marketing are interdependent because marketing strategies require adequate funding, while finance relies on the revenue generated by marketing to sustain the business. For example, before launching an advertising campaign or entering a new market, the marketing department must work with finance to secure a budget, ensuring the promotion is financially viable. In turn, effective marketing that increases sales generates the revenue finance needs to pay expenses, invest in growth and satisfy stakeholders such as shareholders. Without this cooperation, a business could either overspend on marketing without financial approval, risking cash flow problems, or under-invest in marketing, reducing sales and the funds available for future investment."
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
        "sampleAnswer":  "The economic downturn is an influence on employment relations at Cantra Stylos, as it has forced management to cut costs by outsourcing jobs and reducing non-monetary benefits, which has damaged trust between employer and employees and led to threats of strike action."
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
        "sampleAnswer":  "A high staff turnover increases costs for a business as it must repeatedly recruit, select, induct and train new employees, all of which require time and money. Additionally, losing experienced staff such as those at Cantra Stylos reduces productivity and efficiency until replacements are fully trained, while morale among remaining staff may fall. These increased costs combined with lost productivity reduce the overall profitability of the business."
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
        "sampleAnswer":  "One advantage of global outsourcing is reduced costs, as businesses like Cantra Stylos can access cheaper labour in countries such as the Philippines to perform functions like accounting and administration, freeing up funds and allowing management to focus on its core manufacturing operations rather than support functions. This can significantly improve profitability during periods of economic downturn. One disadvantage, however, is a loss of control over quality and reduced employment relations domestically. Outsourcing accounting functions overseas can create communication difficulties due to time zone and cultural differences, potentially leading to errors or delays. It can also damage employment relations at home, as seen at Cantra Stylos where the loss of jobs and non-monetary benefits contributed to high staff turnover and the threat of strike action, ultimately harming morale and productivity."
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
        "sampleAnswer":  "A common cause of workplace disputes is job security and reduced conditions, as seen at Cantra Stylos where management\u0027s decision to outsource accounting roles and cut non-monetary benefits led employees to threaten strike action. Similarly, in 2011 Qantas grounded its fleet during a dispute with unions over outsourcing of maintenance jobs and job security concerns. Such disputes are commonly resolved through negotiation, where management and employee representatives, such as a union, attempt to reach a mutually acceptable agreement. If this fails, conciliation may be used, involving a neutral third party from the Fair Work Commission who helps both sides reach a voluntary agreement without imposing a decision. In more serious cases, arbitration may be used, where the Fair Work Commission makes a legally binding decision to end the dispute, as ultimately occurred when the Qantas dispute was referred to Fair Work Australia for a binding resolution."
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
        "sampleAnswer":  "One global influence Valpos Pty Ltd must consider is global sourcing, as expanding into Asia may allow the business to source raw materials such as leather more cheaply from overseas suppliers, reducing production costs. However, this requires careful management of supplier relationships and quality control to ensure the inputs still meet the business\u0027s quality standards while remaining competitive on price against local Asian manufacturers."
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
        "sampleAnswer":  "Businesses transform resources by converting inputs, such as materials, information and customers, into outputs of goods or services using transforming resources like facilities and human resources. For example, Valpos Pty Ltd uses machinery (facilities) and skilled workers (human resources) to convert raw leather (materials) into finished leather clothing, adding value through the design and manufacturing process so that the final product can be sold to customers."
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
        "sampleAnswer":  "Quality expectations refer to the standard to which a good or service satisfies customer needs, including its durability, reliability, fitness for purpose and the reputation it builds for the business; for Valpos Pty Ltd, this means ensuring its leather clothing is well made and consistent so customers trust the brand when competing in Asian markets. Cost-based competition, in contrast, refers to operational strategies used to lower production costs so that prices can be set lower than competitors, such as sourcing cheaper leather inputs, investing in more efficient technology, outsourcing labour-intensive processes, or achieving economies of scale through larger production runs. While quality expectations focus on satisfying the customer through the standard of the product itself, cost-based competition focuses on the price at which that product can be offered, and Valpos Pty Ltd must balance both to remain competitive against the many rivals operating in Asia."
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
        "sampleAnswer":  "A Gantt chart can be used in the transformation process by mapping out each task involved in production against a timeline, showing the estimated time needed to complete each stage. This allows Valpos Pty Ltd\u0027s managers to compare actual progress against the planned schedule, quickly identifying delays in the manufacturing of leather clothing. By setting clear completion dates for each stage of the transformation process, the Gantt chart supports better production scheduling and allows management to make timely decisions to keep operations running efficiently, particularly important as the business expands and coordinates production across new overseas markets."
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
        "sampleAnswer":  "Gross Profit = Sales $400 000 - COGS $125 000 = $275 000. Gross Profit Ratio = ($275 000 / $400 000) x 100 = 68.75%. This means Sullivans Auto Parts Pty Ltd generates approximately 69 cents of gross profit for every $1 of sales. This is a decline from the 2013 Gross Profit Ratio of 75%, indicating that the cost of goods sold has increased relative to sales, or that selling prices have fallen, reducing the margin earned before operating expenses are deducted."
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
        "sampleAnswer":  "Net Profit Ratio = (Net Profit / Sales) x 100 = ($20 000 / $400 000) x 100 = 5%. This means Sullivans Auto Parts Pty Ltd generates 5 cents of net profit for every $1 of sales in 2014. This is significantly below the 2013 result of 12%, indicating a decline in profitability relative to sales, likely due to increased operating expenses such as advertising and rent eating into the gross profit margin."
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
        "sampleAnswer":  "One cost control Sullivans Auto Parts Pty Ltd could adopt is expense minimisation, by reviewing its advertising expense of $60 000, which is a significant cost relative to its $20 000 net profit. By negotiating cheaper advertising contracts or shifting to more cost-effective digital marketing, the business could reduce this cost while maintaining sales, directly improving net profit. One revenue control the business could adopt is setting clear sales and marketing objectives, such as targeting a specific increase in sales volume through improved customer service or expanded product range. By establishing measurable revenue targets and monitoring actual sales against these objectives, management can identify underperformance early and take corrective action, such as adjusting pricing or promotional activity, to increase revenue and improve overall profitability."
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
        "sampleAnswer":  "Transformed resources are the inputs that are changed or converted during the operations process, such as materials, information and customers - for example, the paper and ink used by North Shore Printing Pty Ltd to produce brochures. Transforming resources, on the other hand, are the resources that act upon and bring about change in the transformed resources, such as human resources and facilities - for example, the printing presses and skilled staff operating them at North Shore Printing."
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
        "sampleAnswer":  "North Shore Printing Pty Ltd could gain cost leadership through economies of scale, by increasing the volume of brochures, catalogues and letterheads it produces so that the average fixed cost per unit, such as machinery and factory costs, is spread over a greater number of units, lowering the cost per item sold. It could also adopt new technology, such as investing in modern high-speed digital printing presses, which would reduce labour requirements and material waste, speed up production and lower the cost per print job, allowing the business to offer more competitive prices than rivals while maintaining its profit margin."
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
        "sampleAnswer":  "The volume of production affects North Shore Printing\u0027s operations process because as volume increases, such as when printing a large run of the same catalogue, processes become more systemised and automated, using specialised machinery to lower the cost per unit through economies of scale. Conversely, a high variety of products, such as producing small batches of brochures, magazines, books, labels and letterheads for different clients, requires more flexible processes and general-purpose equipment that can be reconfigured between jobs. This flexibility increases the cost per unit because machinery cannot run continuously on a single standardised task, and staff need broader skills to manage the variety of jobs. North Shore Printing therefore needs to balance its desire for cost leadership, which favours high volume and low variety, against client demand for a diverse range of printed products, which requires flexibility and reduces cost efficiency."
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
        "sampleAnswer":  "Trade unions, such as the Financial Services Union at Youee Australian Ltd, impact the human resource function by representing the interests of the 75% of staff who are members during negotiations such as the current Enterprise Bargaining Agreement discussions. This means HR management must consult and negotiate with the union over pay and working conditions rather than dealing with employees individually, which can extend the time and formality of decision-making but also helps ensure outcomes are seen as fair and are more readily accepted by staff."
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
        "sampleAnswer":  "An Award is a legally binding document that sets out the minimum wages and working conditions for employees in a particular industry or occupation, established and enforced by the Fair Work Commission. In contrast, an Enterprise Bargaining Agreement (EBA) is negotiated directly between an individual employer, such as Youee Australian Ltd, and its employees, often represented by a union like the Financial Services Union, and is tailored to the specific circumstances of that workplace. While an Award provides an industry-wide safety net, an EBA is negotiated at the enterprise level and must still be approved by, and not fall below the safety net set by, the Fair Work Commission."
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
        "sampleAnswer":  "One social influence impacting human resources at Youee Ltd is changing work patterns, such as the growing employee expectation for flexible working arrangements including part-time work, job sharing or working from home. As societal attitudes shift towards valuing work-life balance, Youee Ltd\u0027s HR function must adapt its policies, such as offering flexible rostering for staff, to remain attractive to current and prospective employees and to reduce turnover among its largely unionised workforce."
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
        "sampleAnswer":  "One HR strategy Youee Ltd could use is a rewards strategy, such as offering performance-based bonuses or additional leave to high-performing staff. This would motivate staff by directly linking financial and non-financial rewards to performance, increasing job satisfaction and encouraging valuable employees, particularly union members who make up 75% of the workforce, to remain with the business rather than seek employment elsewhere. A second strategy is training and development, such as providing ongoing professional development in insurance products and customer service skills. This increases employees\u0027 skills and career progression opportunities within the business, improving job satisfaction and a sense of value, which in turn reduces staff turnover and the associated costs of recruiting and training replacement staff."
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
        "sampleAnswer":  "One method a business can use to conduct a situational analysis is a SWOT analysis, which involves examining the business\u0027s internal Strengths and Weaknesses alongside external Opportunities and Threats. For Lulu\u0027s, this could involve assessing strengths such as its well-located retail stores and strong brand recognition, weaknesses such as reliance on physical stores, opportunities such as growth in online retail, and threats such as new competitors entering the fashion market, allowing management to update their marketing plan to reflect the current external environment."
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
        "sampleAnswer":  "A business such as Lulu\u0027s would use a selective distribution channel because it allows the product to be sold through only a limited number of carefully chosen retail outlets, such as its own stores and select fashion retailers like Stelly and Portmans, rather than being available everywhere. This helps maintain the brand\u0027s image and exclusivity as a well-known fashion label, and ensures that the retailers selected can provide an appropriate level of customer service and in-store presentation that is consistent with Lulu\u0027s brand positioning, rather than diluting the brand through mass distribution."
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
        "sampleAnswer":  "Lulu\u0027s can monitor its marketing strategies by regularly conducting sales analysis, tracking the sales performance of its dresses, tops and other product lines across both its own retail stores and stockists like Stelly and Portmans, and by monitoring its market share relative to competitors in the Australian women\u0027s fashion market. This monitoring allows management to identify whether the marketing plan is achieving its objectives, such as growth in sales or brand awareness. Once potential problems are identified, such as an underperforming product line or declining market share in a particular region, Lulu\u0027s can implement control measures by comparing actual results against the planned targets in the marketing plan and taking corrective action - for example, revising its pricing, promotional campaigns or distribution strategy for underperforming lines, or reallocating marketing budget towards more successful product ranges. This ongoing cycle of monitoring and controlling ensures that Lulu\u0027s marketing plan remains responsive to changes in the external environment, such as shifting fashion trends or new competitors."
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
        "sampleAnswer":  "Two financial institutions from which Southern Wines Pty Ltd could obtain debt finance are trading banks, which provide loans such as term loans and overdrafts, and finance companies, which specialise in providing finance such as leasing and hire purchase arrangements for business assets."
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
        "sampleAnswer":  "One limitation of this financial report is that assets are typically recorded at historical cost rather than current market value, meaning the non-current assets shown for Southern Wines Pty Ltd, such as land and equipment, may not reflect their true current worth. This can make it difficult for management to accurately assess the business\u0027s real financial position when using the balance sheet to plan for overseas expansion, as the actual market value of assets like vineyard land may have changed significantly since they were purchased."
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
        "sampleAnswer":  "Gearing Ratio = Total Liabilities / Owner\u0027s Equity x 100. For 2014: ($2,000,000 + $6,000,000) / $12,000,000 x 100 = 66.7%. For 2015: ($4,000,000 + $7,000,000) / $12,000,000 x 100 = 91.7%. This shows that Southern Wines Pty Ltd has become more highly geared between 2014 and 2015, relying more heavily on debt relative to owner\u0027s equity to finance its assets. This indicates the business is less solvent and more vulnerable to rising interest rates and economic downturns, which is an important consideration as management plans to use further debt finance to fund its overseas expansion."
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
        "sampleAnswer":  "One risk involved in global financial transactions is exchange rate fluctuations, which occur because currency values constantly change relative to one another. If Southern Wines Pty Ltd sells wine overseas and is paid in a foreign currency, an unfavourable movement in the exchange rate between the time of sale and the time payment is converted to Australian dollars could significantly reduce the actual revenue received, impacting profitability. A second risk relates to the method of payment used in international trade; for example, if Southern Wines uses a clean payment method when exporting, there is a risk the overseas buyer may fail to pay after the goods have been shipped, or conversely if using payment in advance, an overseas supplier may fail to deliver imported inputs after payment has been made, exposing the business to financial loss in either direction."
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
        "sampleAnswer":  "Casual workers do not have guaranteed or fixed hours of work and can be rostered on and off as required by the business, whereas part-time workers work regular, fixed hours each week that are agreed upon in advance. In addition, casual workers are paid a casual loading on top of their base wage (usually around 25%) but do not receive any paid leave entitlements, while part-time workers do not receive a casual loading but do receive pro-rata paid leave entitlements such as annual leave and personal leave, in proportion to the hours they work."
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
        "sampleAnswer":  "Collective agreements and common law contracts are similar in that they are both negotiated documents that set out the pay and conditions of employment, and both must ensure employees are \u0027better off overall\u0027 compared to the relevant award through the BOOT test. However, they differ in several important ways. Collective agreements are negotiated between an employer and a group of employees, often through a union, and apply to that whole group at a particular workplace, and must be lodged with and approved by the Fair Work Commission before they take effect. In contrast, common law contracts are individual agreements negotiated directly between an employer and a single employee, are not registered with any tribunal, and operate alongside the minimum standards set by the National Employment Standards and relevant award. If a dispute arises, collective agreements are generally resolved through the Fair Work Commission, whereas disputes over common law contracts are settled in the courts, as they are a legal contract between two parties rather than a registered industrial instrument."
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
        "sampleAnswer":  "Performance management, through processes such as regular appraisals, self-evaluation and management by objectives, benefits the employee by giving them clear feedback on what they are doing well and specific areas where they need to improve. This can highlight training and development opportunities and give the employee a clearer sense of what is expected of them, which can lead to increased motivation, job satisfaction and, over time, opportunities for promotion or pay increases as their performance is recognised. For the employer, performance management provides evidence of how individual employees are contributing to broader business goals, allowing management to identify skills gaps, underperformance or training needs across the workforce. This information helps the employer make informed decisions about rewards, promotions or further training, which in turn improves overall productivity, efficiency and staff retention. In this way, performance management creates a mutually beneficial cycle where the employee gains growth opportunities and the employer gains a more skilled, motivated and productive workforce."
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
        "sampleAnswer":  "Pescado del Dia could conduct primary research by surveying potential customers in the target Asian country to find out their preferences for fish species, aquarium types and price expectations. They could complement this with secondary research by analysing existing government census data and industry reports on pet ownership rates and the size of the pet care market in that country, which would help them estimate demand without the cost of collecting new data."
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
        "sampleAnswer":  "Pescado del Dia would need to consider cultural differences in their product range, as certain fish species carry particular cultural or symbolic meaning in parts of Asia (for example, some fish are seen as bringing good fortune), so stocking these varieties and avoiding culturally inappropriate ones would help the business connect with local customers and avoid offence. Secondly, they would need to consider the size and type of aquariums offered, as many customers in densely populated Asian cities live in smaller apartments than the typical Australian home; offering compact, space-efficient aquarium options rather than the larger set-ups sold in Australia would make the product range more suitable and appealing to this new market and increase the likelihood of successful sales."
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
        "sampleAnswer":  "E-marketing has strong potential for Pescado del Dia as it would allow the business to leverage its already established brand and reputation from operating successfully in six Australian cities to reach new customers across Asia at a relatively low cost, through a website and social media platforms showcasing their aquarium products and expertise. This could include content in local languages, virtual product demonstrations and online customer engagement to build trust and awareness before physical stores are established. However, the potential is limited by the fact that live fish and aquariums are difficult and risky to sell purely online due to the need for specialised delivery and care, meaning e-marketing would be best used to build brand awareness and generate enquiries rather than as a direct online sales channel. Overall, e-marketing offers a cost-effective and scalable way for Pescado del Dia to raise awareness and test demand in Asian markets ahead of a full physical expansion, making it a valuable but supporting strategy rather than a complete solution."
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
        "sampleAnswer":  "Strength: Fashionista\u0027s focus on the latest glamorous trends and upcoming product launches gives it timely, engaging content that can attract fashion-conscious readers, and its catchy name helps it stand out. Weakness: as a new entrant, Fashionista has no existing brand recognition, reader loyalty or subscriber base compared to established fashion magazines, making it harder to gain traction in a highly saturated market. Opportunity: Fashionista could expand into an online/digital edition and social media presence to reach younger readers and diversify revenue through sponsored content and events. Threat: the magazine industry faces an ongoing decline in print readership as consumers increasingly access fashion content for free through social media and blogs, and established competitors with loyal readerships could respond aggressively to a new entrant, for example through pricing or exclusive content deals."
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
        "sampleAnswer":  "A logical primary target market for Fashionista would be women aged approximately 18 to 40 who have a strong interest in fashion and beauty and a moderate-to-high level of disposable income, including younger fashion and retail industry professionals. This target market is appropriate because the magazine\u0027s focus on glamorous trends and upcoming product launches would appeal most to consumers who are highly engaged with fashion and have the purchasing power to act on the trends and product recommendations featured, making them more likely to become loyal, repeat readers and attractive to advertisers wanting to reach this demographic."
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
        "sampleAnswer":  "Given that Fashionista is entering a highly saturated market as a new and unknown magazine, a penetration pricing strategy would be most appropriate, setting the cover price lower than established competitors when it first launches. This would encourage price-sensitive fashion-conscious readers, including the target market of younger, fashion-engaged women, to try the magazine over well-known competitors, helping Fashionista build a subscriber and readership base and gain valuable market share quickly. Once the magazine has built brand recognition and reader loyalty, the price could gradually be increased closer to the level of competitor publications."
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
        "sampleAnswer":  "The purpose of a cash flow statement is to show the actual cash inflows and outflows of a business over a given period, categorised into operating, investing and financing activities. It helps management identify where cash is coming from and being spent, allowing them to monitor the business\u0027s liquidity and ensure it has enough cash on hand to pay its debts and other obligations as they fall due, as well as to plan for future cash needs such as major purchases or loan repayments."
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
        "sampleAnswer":  "Net cash provided by operating activities = $45,000 − $35,000 + $22,000 + $7,000 = $39,000. Net cash from investing activities = $135,000 − $260,000 = −$125,000. Net cash from financing activities = $190,000 + $40,000 − $85,000 − $35,000 = $110,000. Net increase in cash = $39,000 − $125,000 + $110,000 = $24,000. Closing cash balance = Cash at beginning of the quarter ($15,000) + Net increase in cash ($24,000) = $39,000."
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
        "sampleAnswer":  "Overall, XYZ Ltd\u0027s cash flow for the quarter is positive, with a net increase in cash of $24,000 and a healthy closing balance of $39,000. This is a good outcome, driven largely by strong net cash from operating activities of $39,000, showing that the core business is generating solid cash from its day-to-day trading. However, the cash flow statement also reveals some concerns: investing activities resulted in a large net outflow of $125,000, mainly due to a substantial $260,000 payment for plant and equipment which was not fully covered by the $135,000 in proceeds from asset sales. This shortfall was covered by financing activities, which contributed a net inflow of $110,000, largely from issuing new shares ($190,000) and additional borrowings ($40,000). While this allowed the business to fund its investment and still increase its overall cash position, it indicates that XYZ Ltd is currently relying heavily on external funding rather than its own operating cash flow to finance its expansion, which could increase its gearing and financial risk if this pattern continues in future quarters."
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
        "sampleAnswer":  "One action XYZ Ltd could take to improve its cash flow is to negotiate a distribution of payments (an instalment plan) with the supplier of its plant and equipment, rather than paying the full $260,000 in one lump sum during the quarter. This would spread the cash outflow for investing activities over a longer period, easing the pressure on the business\u0027s cash position and reducing its reliance on the large inflows from share issues and borrowings seen in the financing activities section. This would allow XYZ Ltd to still invest in the plant and equipment needed for the business while maintaining a stronger, more sustainable cash position that is less dependent on external financing in future quarters."
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
        "sampleAnswer":  "The critical path is A-C-E-F-G, taking 15 + 25 + 25 + 15 + 10 = 90 minutes in total, as this is the longest path through the network and therefore determines the minimum time needed to complete the assembly of the motors."
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
        "sampleAnswer":  "Transformed resources are the inputs that are changed by the operations process, such as materials, information and customers - for Vroom Pty Ltd, this includes the imported parts that are converted into finished electronic motors. Transforming resources, on the other hand, are the resources that act upon and bring about this change, namely human resources and facilities - for Vroom Pty Ltd, this includes the workers who assemble the motors and the machinery and factory used in the assembly process."
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
        "sampleAnswer":  "Monitoring is the process of measuring Vroom Pty Ltd\u0027s actual performance against planned performance, typically through Key Performance Indicators (KPIs) such as defect rates and repair rates for the electronic motors it assembles. This allows management to regularly check whether the assembly process, including the sequence of tasks shown in the diagram, is running as expected. Control occurs when these KPIs are assessed against predetermined targets and corrective action is taken if performance falls short - for example, if IT and maintenance costs at Vroom Pty Ltd exceed budget guidelines, management would investigate and take corrective action to bring costs back in line. Improvement involves the systematic reduction of inefficiencies, wastage and poor work practices, and the elimination of bottlenecks in the transformation process - for instance, Vroom Pty Ltd could look to minimise the time taken by employees to change over shifts on the assembly line, streamlining the critical path and reducing the overall 90-minute assembly time. Together, this ongoing cycle of monitoring, controlling and improving allows Vroom Pty Ltd to continuously enhance the efficiency and quality of its operations."
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
        "sampleAnswer":  "Marketing is a total system of interacting business activities designed to plan, price, promote and distribute products to present and potential customers."
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
        "sampleAnswer":  "Three types of markets include the consumer market, which consists of individuals who buy products for personal use; the industrial market, where businesses purchase products to use in the production of other goods; and the niche market, a narrowly selected market segment with specific, often unusual interests. Gazines Galore Pty Ltd is targeting a niche market, as it uses online metadata to track the obscure interests of internet users and bundle them into narrowly defined groups, allowing it to publish specialist magazine titles tailored to small, specific audiences such as particular hobby clubs and societies, rather than producing a single mass-market publication."
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
        "sampleAnswer":  "A sales (selling) approach places emphasis on aggressively selling existing products, often through increased advertising and persuasive techniques, in response to increased competition, with the goal of persuading customers to buy what the business has already produced. A marketing approach, in contrast, begins by researching what customers actually want through market research, and then develops and promotes products aimed at satisfying those identified needs. Essentially, a sales approach is product-focused (\u0027sell what we make\u0027), while a marketing approach is customer-focused (\u0027make what customers want\u0027)."
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
        "sampleAnswer":  "One marketing objective for Gazines Galore Pty Ltd is increasing market share, which means growing the business\u0027s proportion of total sales within the specialist magazine publishing industry; this could be measured by setting a specific target, such as a 10% increase in overall sales within a year. A second objective is expanding the product range, by using its online metadata insights to identify and launch new niche magazine titles catering to previously untapped obscure interest groups; this could be measured by tracking the number of new titles successfully launched and their subsequent sales performance. A third objective is maximising customer service, ensuring the business responds effectively to the needs of its niche subscriber base; this could be measured through subscriber satisfaction surveys or by monitoring subscription renewal and cancellation rates."
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
        "sampleAnswer":  "Current Ratio = Current Assets / Current Liabilities = $26,550 / $25,100 = 1.06:1 (current assets: cash $4,450 + accounts receivable $8,500 + inventory $13,600 = $26,550; current liabilities: overdraft $13,500 + accounts payable $11,600 = $25,100)."
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
        "sampleAnswer":  "In 2014, Neverland Pty Ltd\u0027s gearing ratio is Total Liabilities ($25,100 + $280,000 = $305,100) divided by Owner\u0027s Equity ($165,000 + $95,000 = $260,000) = 1.17:1. This is a significant increase from the 2013 gearing ratio of 0.8:1, meaning that for every $1 of owner\u0027s equity, the business now owes $1.17 in liabilities, compared to 80 cents previously. This shows that Neverland Pty Ltd\u0027s gearing has deteriorated over the year, as the business has taken on relatively more debt, placing it in a riskier financial position and making it more vulnerable to rising interest rates."
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
        "sampleAnswer":  "Return on Owner\u0027s Equity for 2014 = Net Profit / Total Owner\u0027s Equity = $95,000 / $260,000 = 36.5%, which is a large increase from the 2013 figure of 5.3%. One possible reason for this significant increase is that Neverland Pty Ltd achieved a much higher net profit in the current year, possibly due to increased sales or better cost control, which directly increases the numerator of the ratio and boosts the return generated for owners. Another contributing factor could be the business\u0027s increased use of debt, as reflected in its higher gearing ratio, which can amplify the return generated on the owner\u0027s equity base if the borrowed funds are used profitably."
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
        "sampleAnswer":  "Financial reports such as Neverland Pty Ltd\u0027s balance sheet have several limitations that affect their reliability for decision-making. First, assets like property and vehicles are typically recorded at historical cost rather than current market value, meaning the $410,000 property value shown may not reflect its true current worth, especially given rising property values over time. Second, the report does not include normalised earnings, meaning any one-off or unusual items affecting the $95,000 net profit figure are not separated out, making it harder to judge Neverland\u0027s ongoing, sustainable earning capacity. Third, there may be issues around capitalising expenses, where costs that should arguably be treated as expenses are instead recorded as assets, which can overstate the value of assets like equipment. Fourth, timing issues mean the balance sheet only reflects the business\u0027s position at a single point in time (30 June 2014), and may not reflect significant changes in items like inventory or debt that occurred shortly before or after that date. Finally, the report lacks the accompanying notes to the financial statements that would normally explain the accounting policies used and provide further detail, such as the terms of the mortgage or debt repayment schedule, limiting a full understanding of Neverland Pty Ltd\u0027s true financial position."
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
        "sampleAnswer":  "An enterprise agreement is a collective agreement made at the workplace level between an employer, such as Joe Pesciona, and a group of his employees, setting out the terms and conditions of their employment."
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
        "sampleAnswer":  "Joe Pesciona owes his workers a duty to provide them with work and not to unlawfully \u0027stand down\u0027 staff without pay when work is available. He also owes them payment of their agreed wages and any expenses specifically related to the conduct of their work, such as reimbursement for work-related costs. Additionally, Joe has an obligation to meet the requirements of relevant industrial relations and occupational health and safety legislation, including exercising a duty of care to ensure his restaurant is a safe working environment for his pizza and pasta staff."
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
        "sampleAnswer":  "Joe Pesciona\u0027s employees owe him an obligation to obey his lawful and reasonable commands regarding how their work in the restaurant should be carried out. They must also use reasonable care and skill when carrying out their duties, such as preparing food safely and correctly. Finally, employees owe Joe a duty to act in good faith, meaning they should act honestly and in the best interests of the business, for example by not engaging in conduct that would damage the restaurant\u0027s reputation or competing directly against it."
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
        "sampleAnswer":  "Joe Pesciona has breached several legislative policies. Firstly, by paying the new junior staff only $5 per hour, he has breached national minimum wage requirements, which are reviewed annually by the Fair Work Commission and set a legal minimum rate of pay that must be provided regardless of the employee\u0027s age or experience level. Secondly, by hiring inexperienced, untrained juniors without proper training, Joe risks breaching Work Health and Safety legislation, which requires an employer to exercise a duty of care and ensure staff are adequately trained to safely carry out their duties, such as working around hot kitchen equipment. Thirdly, by specifically sacking all his female employees, Joe has breached the Sex Discrimination Act 1984, as terminating staff on the basis of their sex is unlawful discrimination, regardless of his stated cost-saving motive. Together, these actions expose Joe Pesciona to significant legal risk and potential claims through the Fair Work Commission or anti-discrimination bodies."
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
        "sampleAnswer":  "Two performance objectives used by operations managers are quality (ensuring goods or services are free from defects and meet customer expectations) and speed (the time taken to deliver goods or services to the customer, from order to fulfilment)."
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
        "sampleAnswer":  "Two scheduling tools used in the manufacturing of goods are Gantt charts and Critical Path Analysis (CPA). A Gantt chart is a bar chart that plots each task in a production process against a timeline, showing the start and finish times of each activity. Its benefit is that it allows operations managers to see at a glance which tasks are running on schedule and which are falling behind, so they can reallocate resources or adjust deadlines before delays affect the whole production run. Critical Path Analysis (also known as PERT) maps out all the tasks in a production process and identifies the sequence of dependent tasks - the critical path - that determines the shortest possible time to complete production. Its benefit is that it allows managers to focus resources and attention on the tasks that most affect the overall completion time, reducing the risk of costly delays and helping the business meet delivery deadlines reliably."
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
        "sampleAnswer":  "A business can differentiate its service by varying the level of expertise it offers. For example, a car dealership such as BMW employs mechanics who are specifically trained and qualified to work on BMW vehicles, giving customers confidence that their car is serviced to the manufacturer\u0027s exact standard, which sets it apart from a generic mechanic. A business can also differentiate its service by varying the technology used in service delivery. For example, a bank that offers a fully-featured mobile app allowing customers to transfer funds, pay bills and video-call a consultant differentiates itself from banks that only offer in-branch service, providing greater convenience and a point of difference that can attract and retain customers."
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
        "sampleAnswer":  "Packaging is the container or wrapping in which a product is presented and sold. One benefit of packaging is that it protects and preserves the product, ensuring it arrives undamaged when transported to stores and consumers and remains in good condition on the shelf. A second benefit is that packaging attracts consumers - its visual design and information can persuade a shopper to pick up the product, understand what it does, and choose it over a competitor\u0027s, adding to the perceived value of the product."
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
        "sampleAnswer":  "Branding provides benefits to both consumers and businesses. For consumers, a recognisable brand such as Apple helps them quickly identify the products they prefer and trust, and gives them a sense of security and confidence in the quality of the product, especially when they lack the expertise to judge its features themselves. For businesses, branding builds customer loyalty, encouraging repeat sales because consumers recognise and trust the business\u0027s existing products. It also makes it easier for a business to launch new products, since customers are already familiar with, and confident in, the brand, reducing the marketing effort required to establish trust in the new offering."
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
        "sampleAnswer":  "Market-based pricing sets the price of a good or service according to supply and demand - essentially, whatever price the market is prepared to pay. This is common in situations such as fruit and vegetable auctions or online marketplaces like eBay, where prices are versatile and respond directly to customer demand, though this makes it difficult to apply consistently since demand is constantly changing. Cost-based (mark-up) pricing, in contrast, starts from the cost of producing or importing a product and adds a mark-up, often expressed as a percentage, to cover the business\u0027s running expenses and provide a profit margin - for example, an electrical appliance retailer pricing a television at cost plus 40%. Cost-based pricing is simple to apply and guarantees a profit margin, but unlike market-based pricing it does not take into account what customers are actually willing to pay or other elements of the marketing mix."
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
        "sampleAnswer":  "Employer associations are organisations that represent and assist employers, for example by providing advice on industrial relations and workplace law, representing members in negotiations with unions and government, and lobbying government on behalf of businesses in their industry. An example of an employer association is the Australian Industry Group (Ai Group), which represents and supports businesses across the manufacturing, construction and labour hire sectors."
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
        "sampleAnswer":  "One advantage of global outsourcing of human resources is that it saves costs, since a business can access labour in countries where wages are lower, while also allowing the business to focus its own resources on its core functions rather than tasks like payroll or IT support. One disadvantage, however, is that the quality of work may decline if the outsourced provider does not meet the same standards as an in-house team, and there can be ethical issues if the overseas labour force is working under poor conditions or for very low wages, which can damage the reputation of the outsourcing business."
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
        "sampleAnswer":  "Employees have a number of obligations in the workplace. One obligation is to obey the lawful and reasonable commands of their employer - for example, following reasonable instructions about how and when tasks should be completed, provided these do not breach health and safety or other laws. A second obligation is to use care and skill in the performance of their duties, meaning employees must carry out their work competently and to a reasonable standard, taking reasonable care to avoid causing loss or damage to the business, its customers or other employees."
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
        "sampleAnswer":  "This is an Income Statement (also known as a Profit and Loss Statement or Revenue Statement)."
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
        "sampleAnswer":  "Another financial statement Helen\u0027s Healthy Lunches could use is a Balance Sheet, which shows the business\u0027s assets, liabilities and owner\u0027s equity at a particular point in time."
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
        "sampleAnswer":  "Gross profit ratio = (Gross profit ÷ Sales) × 100 = ($30 000 ÷ $75 000) × 100 = 40%."
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
        "sampleAnswer":  "Net profit = Gross profit − total expenses = $30 000 − ($1500 + $2000 + $22 000) = $30 000 − $25 500 = $4 500. Return on equity = Net profit ÷ Total equity = $4 500 ÷ $25 000 = 0.18, or 18%. This means that for every $1 Helen has invested in the business, she is generating 18 cents of profit."
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
        "sampleAnswer":  "Helen could improve profitability by implementing cost controls, such as separating her costs into fixed costs (like rent and insurance) and variable costs (like ingredients), and using cost centres to track spending in each area of the business. This would allow her to identify areas of excessive expenditure - such as her relatively high administrative expenses of $22 000 - and implement an expense minimisation program, for example negotiating a lower rent or switching to a cheaper electricity provider, which would directly increase net profit. Helen could also use revenue controls by setting clear marketing objectives to increase sales revenue, such as introducing a customer loyalty program or expanding her menu to attract more customers. This is particularly important given her gross profit ratio has fallen from 63% in 2012 to 40% in 2013, suggesting the cost of goods sold has risen relative to sales; increasing sales revenue while also renegotiating supplier costs would help restore profitability."
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
        "sampleAnswer":  "One significant social influence on human resource management is the ageing population, as an increasing proportion of the workforce approaches retirement age while remaining healthy and willing to work longer. This impacts HRM because businesses must adapt their acquisition and maintenance strategies to retain valued older workers, for example by offering flexible working hours, part-time or job-share arrangements, and retraining opportunities so older employees can update their skills rather than being made redundant. Businesses may also need to review health and safety policies to suit older workers\u0027 physical needs. If HRM fails to respond to this social influence, businesses risk losing experienced staff and their accumulated skills and knowledge, increasing acquisition costs as new staff must be recruited and trained to replace them."
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
        "sampleAnswer":  "In 2011, Qantas experienced a major workplace dispute with its long-haul pilots (represented by the AIPA) and engineers (represented by the ALAEA). The dispute was caused by management\u0027s plans to outsource heavy maintenance and flying work overseas, which threatened around 2,800 jobs and reduced job security, as well as disagreements over pay increases and the retention of existing entitlements. To resolve the dispute, Qantas and the unions first engaged in negotiation, the formal discussion between employer and employee representatives to reach a compromise; however, this process dragged on for over a year without resolution. Qantas then used mediation, a confidential discussion facilitated by a neutral third party, before Qantas CEO Alan Joyce grounded the entire fleet and locked out employees in response to threatened strike action. This escalated the dispute to Fair Work Australia, which used conciliation and ultimately compulsory arbitration to resolve the matter. The engineers received a 3% pay rise but Qantas retained the right to send some maintenance offshore, while the pilots were awarded a staged pay rise of 4.5% and 3% over the following years. This case shows how a combination of negotiation, mediation and third-party intervention can be used to resolve serious workplace disputes."
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
        "sampleAnswer":  "Research and development is a global factor Pro Industries (PI) must consider, as it involves developing new technologies, methods and processes to create innovative products. By investing in R\u0026D, such as 3D printing or AI-assisted design for skateboard wheels, PI can reduce human error, improve product quality and differentiate itself as a high-tech, innovative brand, giving it a competitive advantage over rivals. Economies of scale is a second global factor PI should consider, referring to the cost savings gained from increasing the scale of production, such as buying wheel bearings in bulk from global suppliers at a discount. By spreading fixed costs over a larger output, PI can lower its per-unit costs, allowing it to pursue a cost leadership strategy and offer more competitive prices than competitors, thereby sustaining a long-term competitive advantage in the global skateboard market."
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
        "sampleAnswer":  "Corporate social responsibility (CSR) refers to open and accountable business actions based on ethical behaviour and respect for the community and environment, going beyond a business\u0027s legal obligations. CSR is a key concern in operations management because the transformation process directly determines how ethically and sustainably a business\u0027s inputs are sourced and its outputs are produced. Pro Industries (PI) can demonstrate CSR in its operations by responsibly sourcing inputs, such as using timber from certified, renewable forests to manufacture its skateboard decks, and by choosing not to outsource manufacturing overseas where labour standards may be lower. If PI embeds CSR into its operational and transformational processes, this is likely to enhance its brand image and reputation among increasingly ethically-conscious consumers, which can translate into increased revenue and profitability over the long term. However, CSR initiatives such as sourcing certified inputs or maintaining local manufacturing can increase production costs in the short term, which operations managers must weigh against the long-term reputational and financial benefits. Ultimately, because operational decisions have direct social and environmental consequences, CSR must be a central concern of operations management rather than an afterthought."
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
        "sampleAnswer":  "Accounts Receivable Turnover Ratio = Sales ÷ Accounts Receivable = $100,000 ÷ $12,000 = 8.33 times per year, which is equivalent to 365 ÷ 8.33 = approximately 44 days. This means it takes Bettle Pty Ltd about 44 days on average to collect its accounts receivable. This compares unfavourably to the industry average of 35 days, indicating that Bettle is less efficient than its competitors at collecting debts owed by customers, which raises concerns about its credit policy and may increase its risk of bad debts."
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
        "sampleAnswer":  "Bettle could use factoring to improve its accounts receivable turnover ratio. This involves selling its $12,000 of accounts receivable to a factoring company, which would provide Bettle with approximately 80-90% of the value within 24-48 hours. This immediately improves Bettle\u0027s cash flow and efficiency, and frees Bettle from the cost and effort of chasing up outstanding debts, allowing it to focus on its core ice-cream manufacturing business. Bettle could also offer discounts for early payment, giving customers a financial incentive to pay their accounts sooner. This would help Bettle collect cash faster, improving its accounts receivable turnover ratio, while also building a more positive relationship with its supermarket customers. Together, factoring and discounts for early payment would help bring Bettle\u0027s collection period closer to the 35-day industry benchmark."
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
        "sampleAnswer":  "Timing issues are a limitation for Bettle because, as an ice-cream manufacturer, its sales are likely to fluctuate seasonally, with higher demand in summer and lower demand in winter months. Because financial statements such as the income statement are usually prepared over a twelve-month period, they may not accurately reflect Bettle\u0027s true underlying financial performance at any given point in time, which could mislead stakeholders such as investors or lenders who rely on the reports to make decisions. Capitalising expenses is a second limitation relevant to Bettle. This occurs when an expense, such as the $2,000 spent on Research and Development, is recorded as a non-current asset on the balance sheet rather than as an expense on the income statement, which artificially inflates the current year\u0027s net profit. In Bettle\u0027s case, the Research and Development cost has correctly been left on the income statement as an expense, showing that Bettle has acted ethically and has not capitalised this expense to inflate reported profit, which is an important consideration for stakeholders assessing the reliability of Bettle\u0027s financial reports."
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
        "sampleAnswer":  "People refers to the interaction between Fair Dinkum Burgers\u0027 (FDB) staff and its customers. As FDB is a fast-food restaurant, it is vital that its US staff are well-trained and knowledgeable, particularly in taking orders efficiently and handling customer complaints professionally. By ensuring high-quality interactions between staff and customers, FDB can build customer loyalty, generate positive word of mouth, and ultimately increase sales in the new US market. Processes refers to the systems put in place to ensure the service is delivered in a way that meets customer needs. By implementing an automated and customised ordering platform both in-store and online, FDB can streamline its ordering process and ensure orders are prepared quickly and accurately. This is critical in the fast-food industry, where a quick turnaround directly shapes the customer experience. By developing effective people and process strategies, FDB is more likely to meet and exceed customer expectations, building a positive reputation, customer loyalty and repeat sales as it expands into the US market."
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
        "sampleAnswer":  "Marketing and finance must work interdependently at Fair Dinkum Burgers (FDB) to achieve the objective of profit maximisation when deciding between customisation and standardisation for its US expansion. If FDB customises its marketing mix to suit US tastes and preferences, this is likely to better meet customer needs and increase the likelihood of higher sales, supporting FDB\u0027s financial objective of growth. However, customising products, branding and promotion is more costly, as FDB cannot rely on its existing Australian strategies or benefit from economies of scale, meaning finance must allocate greater funds to product development and market research. Alternatively, if FDB decides to standardise its marketing strategy, this would be less expensive, as FDB could apply its existing systems and strategies to the US market, but this carries the risk of lower sales if the offering does not suit US consumer preferences. Finance must therefore conduct a cost-benefit analysis of both options to determine which approach will maximise profit, the most critical financial objective. Marketing and finance are also linked in relation to pricing strategy; for example, if FDB adopts a price penetration strategy to enter the US market and build market share quickly, finance must consider the short-term reduction in profit margin against the longer-term benefit of increased sales volume and market share. This shows that marketing decisions about customisation, standardisation and pricing cannot be made without close collaboration with finance to ensure decisions support FDB\u0027s overall profitability and growth objectives."
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
        "sampleAnswer":  "Negotiation is a formal or informal discussion or bargaining process undertaken directly between the employer and employee (or their representatives) in an attempt to reach a compromise, whereas mediation is the confidential discussion of the issues in dispute in a non-threatening environment, facilitated by a neutral, objective third party who helps the two sides reach their own resolution. Mediation is generally used when direct negotiation between the parties has failed, as a way of resolving the dispute before it escalates to more formal and expensive methods of resolution such as conciliation or arbitration."
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
        "sampleAnswer":  "The data collected at Flexatron Manufacturing (FM) suggests that human resource management has been largely ineffective between 2018 and 2019. Levels of disputation rose sharply from 5% to 24%, suggesting that FM\u0027s dispute resolution processes and possibly its management/leadership style are not effectively managing workplace conflict. This is linked to a fall in training spend per employee from $1,500 to $200, which may indicate reduced investment in training and development that could otherwise help prevent disputes and improve staff capability. Absenteeism also doubled from 8 to 18 days and staff turnover more than doubled from 8% to 18%, both of which are costly to the business and suggest declining staff morale, possibly linked to the rise in workplace accidents from 10% to 20%, itself likely connected to reduced training. However, corporate culture remained stable at 13%, suggesting that at least some aspects of FM\u0027s leadership and workplace relationships have not deteriorated. Overall, while corporate culture has been maintained, the sharp increases in disputes, absenteeism, turnover and accidents alongside a large cut to training investment indicate that HRM at Flexatron Manufacturing is, to a large extent, ineffective and requires urgent review of its training and development, dispute resolution and maintenance strategies."
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
        "sampleAnswer":  "Flexatron Manufacturing (FM) should implement training and development strategies, such as induction programs, coaching and mentoring, and specific WH\u0026S training. This is because training aims to build employees\u0027 skills, knowledge and safe work practices, which would directly address FM\u0027s high accident rate of 20% in 2019. Improved training would also give employees a greater sense of competence and value, helping to reduce the high staff turnover rate of 18%, saving FM the significant recruitment and induction costs associated with replacing staff. Secondly, FM should implement formal workplace dispute resolution strategies, such as a structured grievance procedure. This is because the level of disputation has risen sharply from 5% to 24%, indicating that current informal processes for managing conflict are not working. A transparent, fair grievance procedure would give employees and management a clear process to raise and resolve disagreements before they escalate, helping to reduce the current high level of workplace conflict, and in turn helping to lower the associated absenteeism (currently 18 days) that often accompanies unresolved disputes."
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
        "sampleAnswer":  "Legal regulations will impact Mixon Manufacturing\u0027s (MM) expansion in operations through legislation outlining workplace safety requirements, such as the Work Health and Safety Act 2011, which requires MM to provide staff with appropriate safety equipment, safe machinery and materials, and relevant training to mitigate safety risks in its manufacturing facility. Complying with this legislation is likely to increase MM\u0027s operating costs but reduces the risk of workplace injuries, fines and reputational damage."
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
        "sampleAnswer":  "Mixon Manufacturing (MM) will need to consider global sourcing as a supply chain management strategy as part of its expansion, which involves sourcing inputs such as steel, glass and tyres from suppliers overseas rather than being limited by location. This can allow MM to access lower-cost, high-quality inputs and take advantage of comparative advantages held by overseas producers, helping MM control production costs as it scales up for the Chinese market. However, global sourcing creates a more complex international supplier network, which can create bottlenecks or lead-time issues and expose MM to unfavourable exchange rate movements. MM will also need to consider logistics, which refers to the transportation, warehousing and distribution of both its raw material inputs and its finished cars to the Chinese market. By using technologies such as automated warehouse trucks and efficient transport modes, MM can improve the speed and reliability of getting its cars to Chinese customers, helping it meet demand requirements. However, the type of good being transported (large, heavy vehicles) will increase the cost and complexity of MM\u0027s logistics strategy as it expands internationally."
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
        "sampleAnswer":  "Mixon Manufacturing (MM) can demonstrate environmental sustainability by adopting greenhouse gas reduction measures in its car manufacturing plant, such as installing solar panels or converting to renewable energy sources like wind power to run its production line, directly reducing its carbon footprint. MM could also develop more eco-friendly products, such as a new range of electric vehicles, further minimising the environmental impact of its output and helping to achieve intergenerational equity. In terms of social responsibility, MM can ensure that its supply chain, including the mining of metals used for car bodies, does not exploit workers, by conducting supplier audits and adhering to international standards such as ISO 26000 on respect for human rights. MM can further demonstrate social responsibility by ensuring transparency in its reporting to stakeholders about its labour and environmental practices, helping to build trust with the community and government regulators as it expands its operations to meet Chinese demand."
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
        "sampleAnswer":  "3Tel Ltd should implement a comprehensive internal audit process, in addition to its mandatory external audit, to ensure that its financial accounts are prepared accurately and in line with relevant accounting standards. The internal audit team should report directly to the Board of 3Tel Ltd, remaining independent of the CEO and CFO, so that any errors or irregularities in the accounts can be identified and corrected internally before the formal external audit takes place. This would reduce the likelihood of discrepancies being found in future external audits and help restore stakeholder confidence in 3Tel\u0027s financial reporting."
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
        "sampleAnswer":  "Echo Industries\u0027 current ratio is $60,000 : $15,000 = 4:1, which is much higher than the industry average of 2:1. While a higher current ratio generally signals good liquidity, a ratio this far above the benchmark suggests Echo may be holding excessive current assets, such as its high accounts receivable balance of $35,000, which carries the risk of bad debts if customers do not pay, and its inventory of $20,000, which risks becoming obsolete, rather than being invested in more productive non-current assets. Echo Industries\u0027 debt to equity ratio is $215,000 : $85,000, or approximately 2.5:1, which is far higher than the industry average of 1:1. This indicates that Echo is heavily reliant on debt (particularly its $200,000 mortgage) relative to owner-contributed funds, putting it at a significantly higher risk of insolvency if it is unable to meet its interest and principal repayments, and reducing its capacity to raise further debt finance if needed in the future."
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
        "sampleAnswer":  "Echo Industries could enter into a sale and leaseback arrangement for its Land \u0026 Buildings, currently valued at $210,000. By selling this asset and immediately leasing it back, Echo would receive sale proceeds that could be used to repay its $200,000 mortgage in full. This would substantially reduce Echo\u0027s total liabilities and therefore significantly improve its debt to equity ratio, bringing it much closer to the 1:1 industry average. Alternatively, as a company, Echo could raise additional equity by issuing new shares to existing shareholders or private investors. This would increase Echo\u0027s owners\u0027 equity, directly improving the debt to equity ratio, and this improvement would be even greater if the funds raised were also used to repay a portion of the mortgage. For example, raising approximately $70,000 in new equity and using it to reduce the mortgage would bring Echo\u0027s debt to equity ratio below the industry benchmark of 1:1."
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
        "sampleAnswer":  "One ethical issue Supersize Burgers (SB) must consider is products that may damage health. SB\u0027s \u0027mega sized thick shakes\u0027 and oversized burgers are high in sugar and fat, and its tagline \u0027Burgers to make your heart scream\u0027 explicitly plays on this, so SB must ensure it does not target advertising of these products at children, given the health risks such as heart disease associated with excessive consumption. Ignoring this issue risks negative publicity and could damage SB\u0027s ability to achieve its marketing objective of expanding its product range. A second ethical issue is truth and accuracy in advertising. SB must ensure that its \u0027oversized burgers and chips\u0027 genuinely match the size and quality shown in its advertising and not deliver smaller portions than promised. If SB is found to mislead customers in this way, it risks creating negative brand awareness and a loss of sales, undermining its objective of profit maximisation."
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
        "sampleAnswer":  "The promotions mix has varied effectiveness for Supersize Burgers (SB). Advertising refers to a paid, non-personal message communicated through a mass medium. Through social media advertising, SB can raise awareness of its new burgers, generating demand and increasing sales revenue, which is effective in supporting its growth objectives. However, more traditional advertising such as television commercials or billboards can be very costly for a new entrant like SB, which may reduce its ability to maximise profit in the short term. Sales promotion refers to activities that act as a direct inducement to purchase. SB could offer a coupon deal, such as one free burger for every ten purchased, encouraging repeat purchases and increasing sales revenue in the short term. However, frequent use of sales promotions can erode profit margins over time, working against SB\u0027s objective of profit maximisation. Relationship marketing refers to activities aimed at building a strong, long-term, cost-effective relationship with consumers. By sending regular newsletters promoting new menu items to existing customers, SB can build customer loyalty and encourage repeat sales. However, because relationship marketing focuses on existing customers, it does little to attract new customers or expand SB\u0027s reach into new geographic markets. Overall, therefore, while each element of the promotions mix offers clear benefits to Supersize Burgers, each also carries limitations, meaning SB is likely to achieve the best results by using a balanced combination of advertising, sales promotion and relationship marketing rather than relying on any single strategy."
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
        "sampleAnswer":  "One role of operations management is to coordinate the process of transforming inputs, such as raw materials, labour and technology, into final goods and services by adding value at each stage. Effective coordination of this transformation process helps a business such as \u0027We\u0027re Fair Furniture\u0027 minimise waste and operate at the lowest possible cost, supporting its objective of maintaining sales and market share during the economic downturn."
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
        "sampleAnswer":  "Globalisation refers to the increasing integration and interdependence of the world\u0027s economies, allowing businesses to source inputs and sell outputs across international borders. Globalisation can influence \u0027We\u0027re Fair Furniture\u0027s\u0027 operations management by giving the business the opportunity to seek cheaper suppliers of timber, fabric and other inputs from overseas through the development of a global supply web, helping to reduce production costs during the downturn. Globalisation also allows the business to standardise its furniture production to meet the needs of global consumers, which can further reduce expenses through economies of scale, and can foster growth opportunities through access to new technologies and innovative production methods from around the world."
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
        "sampleAnswer":  "Firstly, \u0027We\u0027re Fair Furniture\u0027 could improve its sequencing and scheduling of production, ensuring that furniture orders are processed and manufactured in the most efficient order. This would reduce downtime between jobs and lower labour and overhead costs, helping the business reduce costs during the downturn while still meeting customer orders and maintaining sales levels. Secondly, the business could review its technology, task design and factory layout, for example by rearranging workstations to reduce unnecessary movement of materials and staff. This would improve the efficiency of the transformation process, lowering production costs per unit, which would allow \u0027We\u0027re Fair Furniture\u0027 to maintain competitive prices and sustain its sales levels and market share despite the economic downturn."
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
        "sampleAnswer":  "One illegal marketing practice under Australian consumer law is deceptive and misleading advertising, where a business makes false or exaggerated claims about a product to influence consumers into purchasing it."
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
        "sampleAnswer":  "Psychological factors refer to the internal influences on an individual when making a purchasing decision. A consumer\u0027s perception of a product, formed through word of mouth, advertising or personal experience, can influence whether they view the product positively or negatively and therefore whether they choose to purchase it. Similarly, a consumer\u0027s personality and self-image can influence their choices, as they may purchase products that align with the image they wish to project of themselves, such as buying eco-friendly furniture to be seen as environmentally conscious."
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
        "sampleAnswer":  "One ethical criticism of marketing is a lack of truth and accuracy in advertising. Advertising is a paid, non-personal message communicated through a mass medium, but some businesses exaggerate the claims made in their advertisements or conceal important facts about a product, deceiving consumers into making a purchase they otherwise would not have made. This criticism raises concerns about whether businesses are acting ethically in how they promote their products to the public."
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
        "sampleAnswer":  "A situational analysis uses tools such as a SWOT analysis and the product life cycle to determine where a business is positioned relative to its competitors and market. By identifying its internal strengths and weaknesses and external opportunities and threats through a SWOT analysis, a business can build upon its strengths and capitalise on opportunities it identifies, allowing it to select marketing strategies that best achieve its objectives. In addition, a situational analysis involves identifying the stage of the product life cycle that a product is in, as the appropriate marketing strategy will differ depending on whether a product is in the introduction or growth phase, where strategies focus on building awareness and market share, or in the maturity or decline stage, where a business may need to use strategies such as promotion or product modification to reinvigorate sales. Together, these tools allow a business to make informed, evidence-based decisions about which marketing strategies are most likely to be effective given its current situation."
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
        "sampleAnswer":  "Cost of Goods Sold = Opening stock + Purchases − Closing stock = $43,000 + $26,000 − $34,000 = $35,000. Gross Profit = Sales − COGS = $160,000 − $35,000 = $125,000, giving a Gross Profit Ratio of $125,000 ÷ $160,000 = 0.78125:1, or 78%. Total expenses for 2012 = Selling expenses $20,000 + Administrative expenses $6,000 + Interest $4,000 = $30,000, so Net Profit = Gross Profit − Expenses = $125,000 − $30,000 = $95,000, giving a Net Profit Ratio of $95,000 ÷ $160,000 = 0.59375:1, or 59%."
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
        "sampleAnswer":  "Debt finance involves acquiring finance from external sources that require interest repayments plus principal and are not tax deductible, whereas equity finance refers to money contributed by the owners, shareholders or investors that is not tax deductible and does not require interest repayments, but does carry an expectation of a return on investment. Additionally, debt finance involves no loss of ownership for the business, while equity finance results in a loss of ownership, as investors who contribute equity typically gain a share of the business."
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
        "sampleAnswer":  "Brisk Café\u0027s expense ratio for 2012 is Total Expenses ÷ Sales = $30,000 ÷ $160,000 = 0.1875:1, or 18.75%. This is a low expense ratio, indicating that Brisk Café is very efficient, as it only requires 18.75% of its total sales revenue to cover its expenses. This reflects strong cost control and effective use of resources to generate sales."
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
        "sampleAnswer":  "Brisk Café could implement cost centres to continually monitor and manage its fixed costs, such as rent and salaries, as well as its variable costs, such as food and beverage inputs. By breaking the business down into cost centres, management can identify areas of excessive spending and take corrective action, improving the gap between revenue and costs and therefore improving profitability. Brisk Café could also use revenue controls, such as reviewing its sales mix and pricing policy to promote its more profitable menu items and set attractive prices, increasing the potential for sales. If implemented alongside effective cost controls, these revenue strategies can significantly improve Brisk Café\u0027s overall profitability."
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
        "sampleAnswer":  "One influence on employment relations at Futurz Graphics is the economic downturn, which has forced management to reduce costs by outsourcing accounting and administration functions to Malaysia and cutting non-monetary benefits such as training and flexible working hours. This economic pressure has directly damaged employment relations, as employees have responded by threatening to go on strike unless they are given a greater say in the decision-making process."
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
        "sampleAnswer":  "A high staff turnover can negatively impact a business by increasing training costs and reducing profitability. As staff leave and need to be replaced, the business must recruit and train new employees, which dramatically increases the training costs incurred. This increase in training costs reduces profitability, as resources that could otherwise generate revenue must instead be channelled into training new staff. In addition, new staff are typically less experienced and may be less effective at performing their roles, such as selling products or providing service, which can further reduce sales and profitability until the new employees become fully competent."
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
        "sampleAnswer":  "One advantage of global outsourcing for Futurz Graphics is access to expertise, as outsourcing accounting and administration functions to a specialist vendor in Malaysia means tasks can be completed faster and to a higher quality than if performed in-house, while also reducing the operational and recruitment costs associated with hiring and training in-house staff for these functions. However, one disadvantage of global outsourcing is the risk of exposing confidential company data, as outsourcing accounting and administrative functions involves sharing sensitive financial and staff information with a third-party provider overseas, which could be mishandled or leaked. Additionally, outsourcing results in the loss of domestic jobs, as current Australian employees performing these roles lose their positions, which is likely to further damage employment relations at Futurz Graphics given staff are already threatening strike action."
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
        "sampleAnswer":  "Futurz Graphics should adopt a more democratic leadership style, as staff have specifically expressed a desire to be part of the decision-making process. By empowering employees to contribute their views on decisions such as the outsourcing of functions and changes to working conditions, management can improve employee satisfaction and rebuild trust, which is likely to reduce the threat of strike action and improve employment relations. Futurz Graphics could also implement job design strategies such as job enrichment, giving employees greater responsibility and ownership over their tasks. This would provide intrinsic rewards such as a sense of satisfaction and achievement, which can help offset the reduction in non-monetary benefits such as training expenses and flexible working hours, improving employee morale, productivity and overall employment relations at the business."
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
        "sampleAnswer":  "Manny could adopt a producer-retailer-consumer distribution channel, selling his printed t-shirts in bulk to retail stores such as clothing boutiques or department stores, which then on-sell the shirts to the final consumer. This channel would allow Manny to expand his market reach well beyond his single factory shopfront, without having to manage every individual retail sale himself, as the retailers take on the function of stocking, displaying and selling the product to a wider range of customers across different locations."
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
        "sampleAnswer":  "One physical distribution issue that may impact Manny\u0027s expansion is transport. As Manny grows from a single factory shopfront to supplying multiple retail outlets or online customers, he will need reliable, cost-effective transport, such as road freight, to deliver t-shirts across a wider area. If transport arrangements are unreliable or too expensive, deliveries could be delayed, the retail price of shirts could rise, or stock could be damaged in transit, all of which would undermine the customer service and reputation Manny is trying to build as he expands."
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
        "sampleAnswer":  "For Manny\u0027s new custom design service to succeed, he needs to carefully manage the people, processes and physical evidence elements of his extended marketing mix. In terms of people, Manny should employ or train staff who are skilled in graphic design and who can provide friendly, knowledgeable customer service, as customers ordering custom shirts for themselves or their teams will rely heavily on staff advice and reassurance throughout the design process. In terms of processes, Manny needs an efficient and flexible workflow that takes a customer from initial enquiry, through design consultation and approval, to production and delivery, ensuring the process is fast enough to meet customer expectations while still allowing genuine customisation of each order. Finally, physical evidence is important because customers cannot experience a service before buying it, so Manny\u0027s factory and any online ordering platform should look clean, professional and well organised, and the finished t-shirts should be presented with quality packaging and labelling. Together, these three strategies build customer confidence and satisfaction, helping to differentiate Manny\u0027s custom design service from generic printed t-shirt retailers and increasing the likelihood that customers return or recommend the service to others."
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
        "sampleAnswer":  "One legal regulation that may affect operations management at ZenPlastic is the Environmental Protection and Biodiversity Conservation Act (1999), which sets standards for how businesses manage waste and acquire natural resources for the production process. Given that ZenPlastic has already been fined for poor waste disposal practices, this Act would require the operations manager to redesign disposal procedures for plastic waste so that they have minimal impact on the natural environment, ensuring the business meets its legal obligations and avoids further penalties."
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
        "sampleAnswer":  "Environmental sustainability could influence ZenPlastic\u0027s operations process by pushing the business to reduce waste and increase efficiency in how plastic inputs are transformed into finished goods. For example, ZenPlastic could invest in machinery that produces less scrap plastic per unit, or switch to recycled or biodegradable plastic inputs. This would help ZenPlastic reduce the environmental impact identified by the recent fine, while also potentially lowering material costs and improving the business\u0027s public image with environmentally conscious customers."
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
        "sampleAnswer":  "Two influences that may have led ZenPlastic to consider outsourcing production to Germany are technology and globalisation. Firstly, technology is a key influence, as German manufacturers have access to advanced machinery and skilled operators who can use technologies such as computer-aided design (CAD) and computer-aided manufacturing (CAM) to improve the accuracy of production and reduce defects. This would allow ZenPlastic to lower its operating costs, reduce waste, and increase output quality compared to relying solely on its existing Blacktown facility, directly addressing the type of process failures that led to its recent fine. Secondly, globalisation is an influence, as the increasing ease of coordinating production and trade across international borders makes outsourcing to Germany a more viable option than in the past. Being closer to new European markets would allow ZenPlastic to reduce transport costs and delivery times to these customers, and to respond more quickly to changing demand in that region, giving the business a competitive advantage as it expands its international customer base."
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
        "sampleAnswer":  "One common law obligation of employers is the duty of care, which requires Harris Pty Ltd to take reasonable steps to protect the health and safety of its 30 full-time and 15 casual employees, for example by providing safe machinery and adequate training in the boat construction process. One common law obligation of employees is the duty to obey lawful and reasonable instructions, meaning Harris\u0027 staff must follow reasonable directions given by supervisors relating to how boats are constructed and workplace procedures are carried out."
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
        "sampleAnswer":  "An award is a legal document, set by the Fair Work Commission, that establishes the minimum wages and working conditions that apply to all employees working within a particular industry or occupation, such as the boat building industry. In contrast, an enterprise agreement is a document negotiated directly between Harris Pty Ltd and its employees (or their representatives), which sets out pay and conditions that apply specifically to Harris\u0027 workforce rather than the whole industry. While an award provides a safety net of minimum standards, an enterprise agreement can be tailored to the specific needs of Harris\u0027 business and employees, but it must be registered with the Fair Work Commission, which will only approve it if all employees are Better Off Overall (the BOOT test) compared to what they would receive under the relevant award."
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
        "sampleAnswer":  "Economic influences such as the business cycle can significantly impact the human resource processes of acquisition and maintenance at Harris Pty Ltd. During a boom in the business cycle, rising demand for luxury boats would require Harris to expand its workforce, impacting the acquisition process as management would need to plan workforce requirements, recruit new candidates through internal and external channels, and select suitable staff using interviews and reference checks. At the same time, other boat builders experiencing the same boom would also be looking to increase their staff numbers, and may try to attract Harris\u0027 existing employees with higher pay or better conditions. This places pressure on the maintenance process, as Harris\u0027 human resource managers must review and adjust monetary and non-monetary rewards to retain skilled staff, while balancing this against the need to protect the profitability of the business."
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
        "sampleAnswer":  "Current Ratio = Current Assets ÷ Current Liabilities = $35,000 ÷ $22,000 = 1.6:1. This means that for every $1 of current liabilities, Dunn\u0027s Drums has $1.60 in current assets available to meet those short-term debts as they fall due."
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
        "sampleAnswer":  "Debt to Equity Ratio = Total Liabilities ÷ Total Equity = ($22,000 + $20,000) ÷ $38,000 = $42,000 ÷ $38,000 = 1.1:1. This means Dunn\u0027s Drums has $1.10 of debt for every $1 of equity, meaning approximately 52.5% of the business is financed through debt."
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
        "sampleAnswer":  "It is important for a business to control its debt to equity ratio because this ratio is a measure of the business\u0027s long-term financial stability and its ability to meet all of its liabilities. The higher the ratio of debt to equity, the more unstable and highly geared the business becomes, making it more vulnerable to rising interest expenses, particularly if interest rates increase, and increasing the risk that the business may become insolvent if it cannot service its debt obligations. By controlling this ratio, a business can maintain a healthy balance between debt and equity financing, reducing financial risk while still being able to fund growth."
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
        "sampleAnswer":  "Debt and equity financing are the two broad sources of external funds available to a business, and each carries its own advantages and disadvantages. Debt finance, such as loans or overdrafts, has the advantage that interest payments are tax-deductible and it does not dilute the owner\u0027s control of the business, but it can be expensive, repayments typically begin immediately and cannot be deferred, and lenders may require personal guarantees or a strong credit history before approving finance. Equity finance, such as issuing shares or bringing in new investors, has the advantage that funds do not have to be repaid and do not incur interest, giving the business greater flexibility, particularly while it is establishing itself. However, equity financing means exchanging part ownership of the business, which dilutes the original owner\u0027s control, is not tax-deductible, and requires a share of future profits to be distributed to the new owners. In practice, a business should use a mix of debt and equity that matches its risk profile, growth stage and cash flow position, ensuring it is not overly reliant on one source of finance."
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
        "sampleAnswer":  "One transformed resource used in the production of a cup of coffee is the coffee beans and milk, as these materials are physically converted into the finished beverage. One transforming resource is the barista, a human resource who operates the coffee machine (a facility) and applies skill and labour to combine the ingredients into the final cup of coffee."
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
        "sampleAnswer":  "Technology refers to the design, construction and application of innovative devices, methods and machinery to the operations process. Technology can influence a business\u0027s operations processes by improving efficiency and effectiveness at every stage of the transformation process. For example, office technology such as computers and networked systems can improve the efficiency of administrative labour, allowing greater output during the working day, while manufacturing technology such as robotics, Computer Aided Design (CAD) and Computer Aided Manufacturing (CAM) can improve the quality of inputs, throughputs and outputs while lowering long-run costs per unit. Technology can be either leading edge, meaning the most recently developed, or established, meaning it has existed for some time; both can help a business achieve greater efficiency and quality in production, which can lead to increased sales and profits."
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
        "sampleAnswer":  "Corporate social responsibility refers to open and accountable business actions based on respect for people, the community and the broader environment. It involves going beyond mere legal compliance and taking extra steps to ensure that social, environmental and financial goals are all met, which may incur added compliance costs in the short run. Corporate social responsibility is a key concern of operations management because consumers today are increasingly concerned about the social and environmental performance of businesses. If a business\u0027s operations process generates excessive waste, pollution or unsafe conditions, this can negatively affect the public\u0027s perception of its brand and reduce consumer trust. Conversely, a business that manages its operations responsibly is likely to strengthen its brand image and consumer sentiment, which can boost sales and profits in the long run, meaning the short-run compliance costs of CSR are typically outweighed by long-run gains."
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
        "sampleAnswer":  "Two stakeholders of the human resource function are employees, who are directly affected by HR decisions relating to pay and working conditions, and unions, which represent the collective interests of employees in matters such as wages and workplace safety."
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
        "sampleAnswer":  "The Human Resource department should be aware of the maximum weekly hours of work, which under the National Employment Standards is 38 hours a week plus reasonable additional hours, ensuring the enterprise agreement does not require staff to work excessive hours. The department should also be aware of annual leave entitlements, which are generally four weeks of paid leave per year for full-time employees, as the new enterprise agreement cannot provide conditions that are worse than these minimum standards."
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
        "sampleAnswer":  "Unions influence human resource management by acting on behalf of employees during collective bargaining sessions and before industrial tribunals and courts. They provide employees with advice on matters such as unfair dismissals and workplace discrimination, make submissions in safety net wage claims, negotiate enterprise agreements with employers, and lobby government to represent the interests of workers in changes to workplace laws. This means HR managers must often negotiate directly with unions when setting pay and conditions. For example, the Transport Workers Union represents employees in the transport industry and would be closely involved in negotiating wages and safety conditions with employers in that sector."
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
        "sampleAnswer":  "Global outsourcing involves a business using third-party specialist businesses located overseas to perform functions that would otherwise be carried out internally. One advantage of global outsourcing is potential cost savings, as inputs such as labour may be cheaper in other countries, allowing a business to reduce its production costs and achieve a cost leadership advantage, leading to greater profits. One disadvantage of global outsourcing is more complex logistics, as the business now has functions being performed by an external party in another country, making coordination and integration between the outsourced function and the rest of the business more difficult. This can result in communication delays, inefficiencies and reduced quality control, which could negatively affect sales if customers experience inconsistent product quality or delivery delays."
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
        "sampleAnswer":  "A weakness of Bronie and Debs\u0027 coffee shop is that they operate in a niche market by only selling organic coffee, which might limit their appeal compared with the international franchise. As a small, specialised business they are also likely to have a much smaller marketing budget and less brand recognition than the large multinational chain, which could make it harder for them to attract new customers from the growing local population, particularly those unfamiliar with, or not specifically seeking, organic coffee."
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
        "sampleAnswer":  "Implementation is the process of putting Bronie and Debs\u0027 marketing strategies into operation, which includes developing a financial forecast related to marketing the organic coffee and deciding how, where and when their plan will be carried out, for example running a local social media campaign highlighting the coffee shop\u0027s organic point of difference. Monitoring is the ongoing checking of these operations to see how the implementation is translating into increased sales and customer awareness, such as tracking foot traffic or sales figures on a weekly basis. Control is the final phase, where Bronie and Debs compare their actual sales results against their planned sales goals at the end of a set period, such as a month or a year; if performance is below target, this is when the marketing process is revised and changed, for example by adjusting pricing or promotional activity in response to the competition from the international franchise."
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
        "sampleAnswer":  "Bronie and Debs could adopt a price skimming strategy, setting a relatively high price for their organic coffee to position it as a unique and prestigious product that is clearly differentiated from the standardised coffee sold by the international franchise. This strategy would establish their coffee in consumers\u0027 minds as a premium product, appealing to customers who value organic, locally made coffee and are willing to pay more for it, which could increase revenue per sale. However, there is a risk that some price-sensitive customers, particularly those simply seeking convenience given the franchise\u0027s proximity and brand recognition, may be lost to the cheaper competitor. This lost custom might be counterbalanced by the extra revenue earned from the higher price, especially if Bronie and Debs successfully attract new customers who are specifically seeking a genuine organic coffee experience that the multinational chain cannot offer."
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
        "sampleAnswer":  "The Australian Securities and Investment Commission (ASIC) is an independent statutory government body that enforces and administers the Corporations Act 2001. It protects consumers in the areas of investment, life and general insurance, superannuation and banking, and aims to reduce fraud and unfair practices in Australia\u0027s financial markets. ASIC regulates companies and financial services providers to ensure they adhere to the law, including requirements around disclosure, licensing and reporting."
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
        "sampleAnswer":  "A derivative is a financial instrument whose value is based on, or derived from, another commodity or financial instrument, such as a currency, interest rate or share price. Businesses might use a derivative to manage risk associated with international trade; for example, an exporting business could use a derivative to lock in today\u0027s exchange rate for a transaction that will actually be settled at a future date, protecting the business from the risk that the value of its home currency will strengthen and reduce the value of its foreign earnings before payment is received."
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
        "sampleAnswer":  "It is important to match the terms and source of finance to business purpose because doing so ensures the most efficient use of a business\u0027s available monetary resources. To minimise interest costs, businesses should use long-term finance, such as a mortgage or debenture, to fund long-term assets like property or equipment, and short-term finance, such as an overdraft, to fund short-term needs like day-to-day working capital. If a business instead used the wrong type of finance, for example funding a long-term asset with a short-term overdraft, it would likely end up paying more in interest and fees than necessary, which would negatively impact the business\u0027s profitability and cash flow."
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
        "sampleAnswer":  "One working capital management strategy a business could use is sale and leaseback, which involves selling an owned asset to a lessor and then leasing that same asset back through fixed payments over a specified period. This strategy would increase the business\u0027s liquidity, as the cash obtained from the sale can be used as working capital, while the expense of using the asset is spread out over its useful life, and some lease agreements even place maintenance responsibilities on the lessor. One cost control strategy a business could use is expense minimisation through the use of cost centres, which requires different sections of the business to account separately for their own costs. This encourages managers throughout the business to actively find ways to lower per unit costs of production, for example by negotiating bulk discounts on variable costs such as raw materials, which helps improve overall profitability without necessarily reducing the quality or volume of output."
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
        "sampleAnswer":  "Interdependence refers to the mutual dependence that the key business functions have on one another. Operations is interdependent with finance as the processes that operations put in place require funds from the financial function to pay for the transformed and transforming resources needed to produce goods and services. Finance is, in turn, interdependent with operations, as finance requires operations to produce a good or service which can be sold in order to generate future funds for the business."
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
        "sampleAnswer":  "Monitoring is the process of measuring actual performance against planned performance. Control occurs when key performance indicators (KPIs) are assessed against predetermined targets and corrective action is taken if required. For example, McDonald\u0027s would monitor the production of its burgers by measuring the actual production time and quality against its predetermined standards. If the actual production time or quality falls below the standard, McDonald\u0027s would then take corrective action, such as retraining staff or adjusting equipment, to improve the speed and quality of its burger production, ensuring the operations process remains efficient and effective."
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
        "sampleAnswer":  "Globalisation refers to the removal of barriers of trade between nations, leading to the emergence of a global market. This has had a significant impact on the operations management of a business like Qantas. Globalisation enables Qantas to globally source its inputs and materials, such as fuel, using an international supply chain, taking advantage of better quality or lower cost inputs. It has also enabled Qantas to globally outsource parts of its non-core operations, such as aircraft maintenance, to countries like the Philippines, where wage costs are lower. Furthermore, globalisation has opened Qantas up to a wider global market of consumers, allowing it to operate in new and emerging markets such as Asia. Globalisation has therefore influenced Qantas\u0027s operations by opening the business to new global markets and enabling it to access a wider pool of technology, human resources and inputs, ultimately allowing the business to be more efficient and effective in its operations process by decreasing costs and improving quality."
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
        "sampleAnswer":  "The strategic role of financial management involves the long-term planning, implementing and monitoring of a business\u0027s financial resources to allow the business to achieve its overall financial goal of profit maximisation."
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
        "sampleAnswer":  "Cash flow management is the matching of cash inflows and outflows to result in a positive net cash flow. One strategy a business could use to achieve a positive net cash flow is the distribution of payments. This involves spreading large one-off expenses over the year into monthly instalments, to ensure that large expenses do not occur at the same time or result in cash shortfalls in a particular month. Qantas, for example, could break down its large fuel and maintenance costs into monthly instalments throughout the year, which would enable the company to maintain an ongoing positive net cash flow rather than facing large cash outflows in particular months. A second strategy is offering discounts for early payment, which encourages debtors to pay Qantas sooner, improving the availability of cash and helping the business manage its cash flow more effectively."
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
        "sampleAnswer":  "Terms of finance refers to the purpose for which a business needs to seek finance, usually considering the type of asset (current or non-current) and the size of the loan required. Source of finance refers to the type of finance the business selects, which includes internal finance, external debt finance (both short term, e.g. overdraft, and long term, e.g. mortgage) and external equity finance, e.g. shares. It is important for a business to match the term and source of finance, as without doing so the business is likely to incur unnecessary expenses through fees and a loan that is not appropriate. For example, if a business needs quick access to a relatively small amount of cash, it is best to use an overdraft due to its being easily accessible and highly flexible, and can therefore be paid off in the short term. A mortgage, however, would be unwise, as the business would have to take out too much finance and, due to the lack of flexibility, could be locked into paying off the loan for too long. Conversely, a mortgage would be appropriate for a property purchase, due to the asset being long-lived and a larger amount of cash being needed, that cannot be quickly paid off; hence an overdraft would cause unnecessary expense due to the high interest rate."
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
        "sampleAnswer":  "Two key stakeholders in the human resource process are employers and employees."
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
        "sampleAnswer":  "Separation is where an employee leaves a business, which may be voluntary or involuntary. In Nedbank\u0027s case, the business is having to make certain employees redundant. This refers to employees losing their jobs as the position is no longer needed. The HR department must ensure it follows the legal requirements in regard to redundancies and ensure the redundancy decision it makes has the least financial impact on the company\u0027s profits. Management must also be clear with staff about the reasons for the redundancies and communicate who is being made redundant in a timely manner. Up to 5 weeks\u0027 notice of redundancy must be given to the relevant staff, and they must also be paid a redundancy package (up to 16 weeks) based on their length of service at the company. Nedbank will need to determine which staff are best to retrench and how this will impact the company\u0027s redundancy costs and the motivation of the remaining staff."
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
        "sampleAnswer":  "Nedbank is in the process of re-negotiating its enterprise agreement and making a number of positions redundant. Legally, Nedbank must ensure the conditions of employment laid out in the new enterprise agreement meet the ten National Employment Standards (NES) in order for the agreement to be approved by the Fair Work Commission. It must also ensure it correctly provides staff who are being retrenched with the appropriate notice period of up to 5 weeks and the correct redundancy payout of up to 16 weeks, both based on length of service. The enterprise agreement must also meet the BOOT (Better Off Overall Test) for it to be certified as a legally binding agreement. In addition, Nedbank must comply with anti-discrimination laws in the running of its enterprise agreement negotiations and general operations, for example it could not make an employee redundant simply for being pregnant, as this would be unlawful discrimination."
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
        "sampleAnswer":  "The production approach to marketing focuses the business\u0027s efforts on improving the production methods used to make its goods and services. It is not customer-focused or even sales-focused; instead the approach takes the attitude that if the business produces goods and services, customers will buy them."
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
        "sampleAnswer":  "E-marketing, or electronic marketing, is the use of the internet to perform marketing activities. For example, many businesses use social media as a way to reach their target market with advertising messages. This allows a business to target potential customers, as the marketing messages can be tailored to people\u0027s search criteria, making the advertising effort efficient and effectively reaching the target market."
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
        "sampleAnswer":  "Price strategies refer to the different pricing tactics a business can use to generate sales, build market share and achieve its marketing objectives. Price strategies include price skimming, price points, penetration pricing and loss leaders. Loss leaders is a pricing strategy that a business would use to build market share and attract consumers into their business. It involves giving away or selling a product below cost to attract a customer, with the business then hoping to sell other products or develop a long-term relationship with that customer in order to generate profits into the future. When Officeworks opens a business in a new area, they send all businesses within the area a letter announcing their arrival and giving a voucher for $30 of free product. As a result, new customers are tempted to experience Officeworks and see their product range. While this may cause an initial loss of $30 of free goods, the establishment of market share and ongoing business from customers helps Officeworks make profits in the long run. Price points is another strategy businesses can use to increase their market coverage. It involves selling a good or service at different price ranges to indicate the level of service or quality, allowing a business to broaden its target market across different socio-economic groups. Qantas uses a price point strategy when it charges different ticket prices for its economy, business and first-class seats on the same flight. The price of the seat reflects the level of service and quality that passengers can expect, allowing Qantas to target different customers on one flight, thus building its sales and market share and achieving its marketing objectives."
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
        "sampleAnswer":  "Two transformed resources are materials (raw materials or components that are converted into finished goods) and information (data that is processed and used to create outputs, such as a customer\u0027s order details)."
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
        "sampleAnswer":  "Sequencing refers to the order in which activities need to be completed within an operational process, whilst scheduling refers to the length of time that is allocated to, and taken for, each activity within that process. An operations manager\u0027s understanding of both these processes can enhance the effectiveness and efficiency of the business\u0027s operations. Operations managers use tools such as Gantt charts and critical path analysis to plan the order and timing of operational activities. A Gantt chart can be used to determine when materials will arrive and identify when manufacturing of the product can begin, while critical path analysis is then used to determine the time taken for each activity so that the business can identify the quickest path to producing a high-quality good or service for the customer. By using these tools together, a business can eliminate unnecessary delays and bottlenecks, increase production rates and reduce costs, thereby improving the overall efficiency of the operations process."
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
        "sampleAnswer":  "Technology refers to the application of improved inputs, transformation processes and outputs, typically achieved through automation, to make a business\u0027s operations process smoother, faster and more cost-effective. Qantas, a well-known Australian airline, has effectively used both leading-edge and established technology as an operations strategy. Leading-edge technology involves innovative devices that are not yet widely available, and Qantas has implemented this through in-flight wifi on domestic routes, contactless check-in, electronic bag tags and a client pulse app; as a result, the Qantas Group\u0027s fuel efficiency has increased by 20% and costs have been cut by $8 billion over the past 15 years. Established technology, which is readily available to the market, has been applied by Qantas through the purchase of Dreamliner aircraft with in-flight wifi and biofuel capability, along with upgrades to its in-flight entertainment system, increasing customer satisfaction by 17%. Overall, the use of both leading-edge and established technology has improved Qantas\u0027s quality, speed and dependability of service while increasing customisation for its customers. This demonstrates that technology has been an influential and effective operations strategy in maintaining Qantas\u0027s competitive advantage and improving its overall operational efficiency."
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
        "sampleAnswer":  "A debenture is an external source of long-term debt finance. It is a type of corporate bond issued by a company to the public, where the business pays regular fixed interest payments to debenture holders before repaying the full amount of the loan at the end of a fixed period of time."
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
        "sampleAnswer":  "Interdependence is the mutual reliance of one business function on another in order to meet the overall goals of the business. Finance provides operations with the funds needed to purchase inputs, such as raw materials and facilities, and to carry out the transformation process that converts these inputs into finished products. In turn, operations relies on finance to fund this process, while finance relies on operations to produce goods and services that can be sold for a profit, generating the revenue that finance needs to fund the business. If operations can minimise the costs of production, profits can be increased, and if operations focuses on quality, the resulting products can be sold at higher prices and generate higher revenue for finance. Together, finance and operations are mutually dependent on one another to ensure the business achieves its overall objectives."
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
        "sampleAnswer":  "One limitation of financial reports is normalised earnings, which are earnings that have been adjusted to account for changes in the economic cycle, or to remove one-off or unusual items that would otherwise distort profitability. Because this adjustment involves subjective judgement by the business, it gives a more favourable but potentially less accurate depiction of the true earnings of the business, making it difficult to compare figures reliably from one year to the next, or against other businesses; for example, the removal of a one-off gain from the sale of land. A second limitation is capitalising expenses, an accounting method where a business records an expense as an asset on the balance sheet rather than as an expense on the income statement, for example research and development expenditure. This does not accurately represent the true financial position of the business, as it understates expenses and overstates both profit and total assets, potentially misleading users of the financial report about the business\u0027s real performance and position."
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
        "sampleAnswer":  "One legal influence on human resources at Kulula Airways is the National Employment Standards, which set out the legally enforceable minimum employment conditions (such as minimum wage rates, leave entitlements and notice periods) that Kulula Airways must comply with when renegotiating employment contracts with its employees."
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
        "sampleAnswer":  "An enterprise agreement is a collective agreement made at the workplace level between an employer and a group of employees regarding terms and conditions of employment. This would be a beneficial employment contract for Kulula Airways, as it allows employees to bargain in good faith with management so that a genuine attempt can be made to consider all proposals before the contract is finalised. Because the airline has different divisions, such as pilots, cabin crew and baggage handlers, separate enterprise agreements could be negotiated efficiently for each division. Awards could also be used, particularly for less-skilled workers such as baggage handlers, as they set out the legally enforceable minimum terms and conditions that apply to a particular industry or occupation. More specialised or professional roles at the airline, such as marketing managers, could instead be employed under individual common law contracts, which give them greater power to negotiate directly with Kulula Airways over pay and other benefits due to their specialised skills."
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
        "sampleAnswer":  "Due to changes in the economic cycle, such as rising unemployment and the economy heading into recession, airlines like Kulula Airways face significant financial stress, as people have less disposable income and therefore travel less, while businesses also reduce spending on travel for conferences and meetings. This reduction in revenue would mean staff restructuring is likely to occur, directly impacting the HR department. HR may need to manage the separation of employees through voluntary and involuntary redundancies, which requires HR to identify the need for change and clearly communicate this culture of change to employees. To support affected staff, HR could offer increased training on how to prepare a resume and conduct practice interviews, helping employees transition into new employment more easily. For employees who choose not to take a redundancy and remain with Kulula Airways, HR may need to undertake a skills audit to identify which areas of the business require more staff, then develop training and development programs so employees can be redeployed into these other areas. Conversely, during a period of economic boom, Kulula Airways may need to significantly increase acquisition and development activities, such as recruiting and training additional pilots and cabin crew, to meet rising demand. This demonstrates that economic factors have a significant and wide-ranging influence on human resource management at Kulula Airways."
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
        "sampleAnswer":  "The resource market consists of those individuals or groups that are engaged in all forms of primary production, including mining, agriculture, forestry and fishing. In contrast, the industrial market includes industries and businesses that purchase products to use in the production of other products, or in their own daily operations, such as a manufacturer buying raw materials or equipment."
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
        "sampleAnswer":  "A situational analysis is the first step in the marketing process, comprised of both a SWOT analysis and a Product Life Cycle analysis. A SWOT analysis considers the internal strengths and weaknesses of the business, as well as the external opportunities and threats it faces in its operating environment, helping the business determine its current competitive position. A Product Life Cycle analysis determines which stage a product is currently in — introduction, growth, maturity or decline — which assists the business in deciding which marketing strategies relating to product, price, promotion and place it should implement. By undertaking a thorough situational analysis, a business ensures that management has a precise understanding of its current position, allowing it to develop an effective and well-informed marketing plan going forward."
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
        "sampleAnswer":  "Consumer laws exist to protect the rights of consumers and to clarify the responsibilities of businesses when marketing their products. Deceptive and misleading advertising is one such law, enforced by the Australian Competition and Consumer Commission (ACCC) under the Competition and Consumer Act 2010, which prohibits businesses from using advertising that creates a false impression about the nature, quality or characteristics of a product. Breaching this law can result in significant financial penalties for a firm. Nurofen is an example of a business that breached Australian Consumer Law by marketing its \"pain-specific\" range, such as \"back pain\" and \"period pain\" products, as though they targeted different types of pain, when in fact all products contained the same active ingredient. As the products were sold at different prices despite being chemically identical, this was found to be deceptive and misleading to consumers who purchased the higher-priced targeted products. As a result, Nurofen was fined $6 million by the ACCC and has since had to change the marketing of its products to align with consumer law, directly impacting how the business promotes and prices its range going forward."
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = QUESTIONS;
}

