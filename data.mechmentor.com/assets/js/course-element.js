  // Define the Course element
  class Course extends HTMLElement {
    constructor() {
        super();

        // Create a shadow root
        this.attachShadow({ mode: 'open' });

        // Define the HTML template
        this.shadowRoot.innerHTML = `
            <style>
			
                .embed-responsive .modal-video {
                    position: absolute;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    right: 0;
                    width: 100%;
                    height: 100%;
                    border: 0;
                }

                .modal-body {
                    overflow: hidden;
                }
            </style>

            <div class="course__curriculum-meta">
                <button type="button" class="btn btn-outline-primary btn-sm"
                    data-bs-toggle="modal" data-bs-target="#myModal">
                    View Course
                </button>

                <!-- The Modal -->
                <div class="modal" id="myModal">
                    <div class="modal-dialog modal-fullscreen">
                        <div class="modal-content">
                            <!-- Modal Header -->
                            <div class="modal-header">
                                <h4 class="modal-title"><slot name="title">Course Title</slot></h4>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                            </div>

                            <!-- Modal body -->
                            <div class="modal-body">
                                <!-- Embedded Video -->
                                <div class="embed-responsive embed-responsive-16by9">
                                    <iframe class="embed-responsive-item modal-video"
                                        src="${this.getAttribute('video')}"
                                        allowfullscreen></iframe>
                                </div>
                            </div>

                            <!-- Modal footer -->
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

// Define the custom element
customElements.define('course-element', Course);