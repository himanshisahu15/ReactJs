#  React Class-Based Image Gallery

A beautiful and functional **Image Gallery app** built using **React Class Components**. This project includes core React concepts like state management, lifecycle methods, and also demonstrates the use of a **Higher-Order Component (HOC)** to enhance the modal feature.

---

##  Features

-  Display images in a responsive grid
-  Add new images via form
-  Delete existing images
-  Click on an image to view a full-size modal
-  **Modal enhanced with HOC**:
  - Fade-in animation
  - Theme toggling (`dark` / `light`)
  - Backdrop click handling

---

##  Tech Stack

- **React (Class Components)**
- **CSS Modules** for scoped styling
- **HOC Pattern** for reusable modal enhancements
- **Vite** for fast development and build

---

 HOC: addFeature()
The addFeature() HOC enhances the modal with:

 Theme switching (dark/light)

 Fade-in animation

 Prevents closing modal when clicking inside modal box


const Model = addFeature(BaseModel);

It wraps the original Model component to add functionality without changing the component logic itself.

{selectedImage && <EnhancedModal img={selectedImage} onClose={this.closeModel} />}
