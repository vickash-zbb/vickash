// Extend the Window interface to include gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const downloadResume = async (): Promise<boolean> => {
  try {
    // Track download analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'download', {
        'event_category': 'engagement',
        'event_label': 'resume_download'
      });
    }

    // Create download link
    const link = document.createElement('a');
    link.href = '/vickash-shivan-resume.pdf';
    link.download = 'Vickash_Shivan_Resume.pdf';
    link.target = '_blank';
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show success notification
    if (typeof window !== 'undefined') {
      // You could integrate with a toast notification system here
      console.log('Resume download initiated');
    }
    
    return true;
  } catch (error) {
    console.error('Resume download failed:', error);
    
    // Fallback: open in new tab
    try {
      window.open('/vickash-shivan-resume.pdf', '_blank');
      return true;
    } catch (fallbackError) {
      console.error('Fallback download failed:', fallbackError);
      return false;
    }
  }
};

export const previewResume = (): void => {
  try {
    window.open('/vickash-shivan-resume.pdf', '_blank');
  } catch (error) {
    console.error('Resume preview failed:', error);
  }
};

// Check if resume file exists
export const checkResumeAvailability = async (): Promise<boolean> => {
  try {
    const response = await fetch('/vickash-shivan-resume.pdf', { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
};
