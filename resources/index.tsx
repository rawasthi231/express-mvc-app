// index.tsx
import React from "react";

import { hydrateRoot } from "react-dom/client";

import Signup from "../app/Views/Signup";

hydrateRoot(document.getElementById("root")!, <Signup />);
