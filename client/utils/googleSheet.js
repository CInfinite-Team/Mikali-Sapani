export const submitEmailToSheet = async (email) => {
 
  const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL ;

  try {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('timestamp', new Date().toISOString());

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: formData,
      mode: "no-cors" 
    });
    
    return true; 
  } catch (error) {
    console.error("Error submitting to Google Sheet:", error);
    return false;
  }
};
