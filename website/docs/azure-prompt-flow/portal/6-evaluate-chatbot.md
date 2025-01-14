---
id: pf-evaluate-chatbot-lab6'
title: '6️⃣ | Evaluate Chat Agent'
sidebar_position: 6
slug: /evaluate-chatbot
---

You can unit test your Flow.  However, Prompt flow provides a gallery of sample evaluation flows your can use to test you Flow in bulk.  For example, classification accuracy, QnA Groundedness, QnA Relevant, QnA Similarity, QnA F1 Score etc.  This enables you to test how well your LLM is performing.  In addition, you have the ability to examine which of your variant prompts are performing better.   In this example, we’ll use the **QnA RAG Evaluation** template to test our flow.


## Evaluate chatbot flow

1. On the **Outputs** section, click on the **+ Add output** button.  Then enter **context** for the **Name** field and `${response.output}` for the value.

![](/img/tutorial/00-output-eval-content.png)

2. Click **Save** button

3. Click on the **Evaluate** button on the top right-side of the screen.

![](/img/tutorial/evaluate.png)

4.	On the **Batch run & Evaluate** page, select the **Next** button
5.	Under **Data**, select the **test-contoso-dental-data** dataset you created earlier.  A preview of the top 5 rows of the data should be displayed at the bottom of the page.
6.	Under Input mapping, enter the open and close brackets **[]** for the value of **chat_history**.
7.	Click in the Value textbox for the **question** field and enter `${data.question}`.

![](/img/tutorial/evaluate-input-flow.png)
 
8.	Click the **Next** button.
9.	On the **Select evaluation** page, select the checkbox for the **QnA RAG Evaluation**.

![](/img/tutorial/evaluation-gallery.png)
 
10.	Click the **Next** button.
11.	Click on the right arrow **“>”** to expand the **QnA RAG Evaluation** settings.

![](/img/tutorial/evaluate-qna-fields.png)
 
12.	Select the *test-contoso-dental-dataset* dataset your uploaded earlier for the **Choose data asset for evaluation** field.
13.	For the **metric** field, cope and paste the following text:
```bash
gpt_groundedness,gpt_retrieval_score,gpt_relevance  
```
14. Enter `${run.outputs.answer}` for the **answer** field.
15. Click on the Data Source textbox and enter `${data.question}` for the **question** field. 
16.	Enter `${run.outputs.context}` for the **documents**field.

![](/img/tutorial/pf-rag-eval-input.png)

17.	On the right-hand side of the page, scroll down to the bottom of the page.
18.	Select your AzureOpenAI connection name (e.g. azure-openai-conn) for the **Connection** fields.
19.	The **Deployment name / Model** should automatically population the your AzureOpenAI deployment name.
 
 ![](/img/tutorial/evaluate-connection.png)

20.	Click the **Next** button. 
21.	Finally, click on the **Submit** button.
22.	To monitor the run progress, click on the **Prompt flow** navigation option.  Then click on the **Runs** tab


![](/img/tutorial/start-evaluate.png)
 
23.	Click the Refresh button to update the run status. The run should take ~15 minutes.
24.	Click on the radio button for the QnA RAG Evaluation, the press the **Visualize outputs** to view the results.

![](/img/tutorial/pf-visualize-output.png)

25.	The **Runs & metrics** section shows a summary score for gpt_groundedness, gpt_retrieval_score, and gpt_relevance.  The **Outputs** section shows the detailed results for each of the 3 metrics.

 ![](/img/tutorial/evaluate-results.png)

26.	The score will range from 1 to 5, where 1 is the worst and 5 is the best performance.

## Summary

In this lab, we learned that while building generate AI solution, it is important to apply responsible AI principles. We learn that even when an AI app provides the correct answer, it is important to validate that the answer is grounded to the context it's data source.  Even when the answer is grounded, it is important to validate that the answer is relevant to the question.  Finally, it is important to validate that the answer is similar to the answer provided by the data source.  In the content of Contoso dental clinc, we learn the important of the chatbox giving out information that pertain to their specific clinic.

Next, we learn how vector index are useful in storing and retrieving custom data, instead of using a pre-trained LLM where the data may be out of date or not relevance to your unique use case.  

Finally, we learn how vector embedding is useful in converting text to numeric representation. This makes if useful in storing data base on thier relationship distance and similarity.  Search is quicker and more accurate when using vector embedding.  