let format = {
  "id": "string",                          // Unique ID, e.g., "lc-217" for LeetCode 217
  "type": "theory",                        // "theory" | "coding" | "behavioral" | "system-design"

  // Common Fields
  "question": "string",                    // Problem title
  "answer": "string",                      // Explanation or reasoning behind the solution
  "subject": "string",                     // e.g., "DSA", "MERN Stack", "System Design"
  "category": "string",                    // e.g., "array", "frontend"
  "subcategory": "string",                 // e.g., "traverse", "react"
  "subSubcategory": "string",              // e.g., "use hashmap to validate the gap subarray"
  "status": "new",                         // "new"" | "completed"
  "bookmarked": false,                     // true if user bookmarked it
  "difficulty": "easy",                    // "easy" | "medium" | "hard"
  "tags": ["string"],                      // e.g., ["array", "two-pointer"]
  "codeSnippet": "string",                 // Optional: starter or full solution code
  "leetcodeId": "string",                  // Optional: LeetCode slug (e.g., "two-sum")

  // Sources (ordered: LeetCode, LintCode, NeetCode, GeeksForGeeks)
  "sources": [
    {
      "platform": "LeetCode",
      "id": "string",                      // Optional LeetCode ID
      "slug": "string",                    // Optional slug
      "url": "string",                     // Full URL
      "ispremium": false                   // true if question is premium-only
    },
    {
      "platform": "LintCode",
      "id": "string",                      // Optional LintCode ID
      "title": "string",                   // Optional LintCode title
      "url": "string",                     // Full URL
      "ispremium": false
    },
    {
      "platform": "NeetCode",
      "url": "string",                     // Full URL
      "ispremium": false
    },
    {
      "platform": "GeeksForGeeks",
      "title": "string",                   // Optional GFG title
      "url": "string",                     // Full URL
      "ispremium": false
    }
  ],

  // Metadata
  "createdAt": "2025-06-25T09:30:00.000Z", // Full ISO 8601 format
  "updatedAt": "2025-06-25T09:45:00.000Z",
  "related": ["string"],                   // Optional: Related question IDs
  "company": ["string"]                    // Optional: Companies where this is asked
}
