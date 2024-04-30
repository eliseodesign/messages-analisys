interface Offensive {
    level: number; // The level of offensive language used in the conversation (0-1)
    userOfensive: string[]; // The user(s) who used offensive language in the conversation
  }
  
  interface Concordance {
    level: number; // The level of concordance between the messages in the conversation (0-1)
    userOutConcordance: string[]; // The user(s) who sent messages that were off-topic or unrelated to the conversation
  }
  
  interface Sentiments {
    neutral: number; // The level of neutral sentiment in the conversation (0-1)
    happiness: number; // The level of happy sentiment in the conversation (0-1)
    sadness: number; // The level of sad sentiment in the conversation (0-1)
    fear: number; // The level of fearful sentiment in the conversation (0-1)
    anger: number; // The level of angry sentiment in the conversation (0-1)
    surprise: number; // The level of surprised sentiment in the conversation (0-1)
    love: number; // The level of loving sentiment in the conversation (0-1)
    hate: number; // The level of hateful sentiment in the conversation (0-1)
  }
  
  interface MessageAnalysis {
    offensive: Offensive; // Information about the use of offensive language in the conversation
    concordance: Concordance; // Information about the level of concordance between the messages in the conversation
    sentiments: Sentiments; // Information about the sentiments expressed in the conversation
    message: string; // Explaination of the message if it is offensive or off-topic
  }
  