// HSC Marking Practice — Question Bank
// Each question: { id, marks, topic, source, stimulus, question, criteria[], keyPoints, sampleAnswer }
// criteria descriptors are ordered highest mark first.

const QUESTIONS = {
  "business-studies": [

    // ============ 1 MARK ============
    {
      id: "bs-1-1",
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
      marks: 6,
      topic: "Business Environment",
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
    "marks": 1,
    "topic": "Business Environment",
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
  }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = QUESTIONS;
}
