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
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = QUESTIONS;
}
