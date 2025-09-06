An Gen AI system that detects misconceptions, fake facts, or misleading claims in YouTube / social media videos by analyzing transcripts and cross-verifying them with trusted knowledge sources using RAG (Retrieval-Augmented Generation).

🚀 Project Overview

With the rise of deepfakes, misinformation, and pseudoscience on platforms like YouTube and Instagram, people often struggle to know whether the information they consume is true or misleading.

Misconception Detector AI aims to solve this problem by:

Extracting video transcripts (via APIs or caption files).

Using a Gen AI model + RAG pipeline to check claims against trusted sources (Wikipedia, scientific articles, news, etc.).

Returning a fact-check report with labels like:

✅ Correct

⚠️ Misleading / Partially true

❌ Incorrect / Fake fact

🛠️ Tech Stack

Frontend: Streamlit / React (for demo UI)

Backend: Python (FastAPI / Flask)

LLM: OpenAI GPT / Llama-2 / Gemini

RAG Layer:

Vector DB (FAISS / Pinecone / Weaviate)

Document sources: Wikipedia API, scientific datasets, news archives

Video Transcript Extraction:

YouTube API / Whisper AI (for speech-to-text)

Deployment: Docker + Cloud (GCP / AWS / HuggingFace Spaces)

🔎 Workflow

Input: YouTube video link / uploaded video.

Transcript Generation: Extract speech → convert to text.

Claim Segmentation: Break transcript into atomic claims (facts/arguments).

Verification with RAG:

Retrieve supporting docs from trusted sources.

LLM evaluates if the claim is ✅ correct, ⚠️ partially true, or ❌ false.

Output: Display results as fact-check report with confidence scores.

📊 Example Output

Video Claim: "Humans use only 10% of their brain."

🔍 Retrieved Evidence: Neuroscience research (PubMed, Wikipedia).

✅ Fact-Check Result: ❌ False – humans use almost all parts of their brain, even when resting.

🔗 Sources: Wikipedia
, [PubMed]

💡 Future Enhancements

Real-time browser extension for YouTube/Instagram.

Multi-language support for global content.

Integration with Content Credentials to flag AI-generated videos.

🌍 Impact

Helps users separate facts from fiction, fighting misinformation in education, science, health, and news.
