# Land Use Land Cover Classification using Random Forest Algorithm 🌍🌳🏢
[![Machine Learning](https://img.shields.io/badge/Machine_Learning-Random_Forest-blue)](https://en.wikipedia.org/wiki/Random_forest)
[![Google Earth Engine](https://img.shields.io/badge/Google_Earth_Engine-API-green)](https://earthengine.google.com/)

## Overview 🌏
This project performs Land Use Land Cover (LULC) classification using the Random Forest Algorithm on satellite imagery from Landsat 8. The classification categorizes land into four classes: water, built-up, bare land, and vegetation. The model compares datasets from 2013 and 2023 to analyze changes over a decade.

## Features ✨

- **Supervised Learning:** Utilizes Random Forest Algorithm.
- **Satellite Imagery:** Based on Landsat 8 data.
- **Classes:** Water, Built-up, Bare Land, Vegetation.
- **Temporal Analysis:** Compares land cover between 2013 and 2023.
- **Visualization:** Generates classified maps to visualize land cover changes.
- **Charts:** Includes charts to illustrate land cover changes over time.

## Table of Contents 📚
- [Usage](#usage)
- [Dataset](#dataset)
- [Methodology](#methodology)
- [Results](#results)
- [Charts](#charts)
- [License](#license)

**Usage** 🚀

1. Define Region of Interest (ROI): Use the provided ROI file to set your study area.
2. Load Dataset: Import Landsat 8 satellite images for the years 2013 and 2023.
3. Run Classification: Apply the Random Forest Algorithm to classify the land cover.
4. Visualize Results: Compare the classified maps to analyze land cover changes.
5. Generate Charts: Use the provided scripts to generate charts illustrating changes in land cover over time.


**Dataset** 📊
The dataset includes:

1. Satellite Images: Landsat 8 images for bands B3, B4, and B5.
2. Training Data: Manually selected pixel values for each class (water, 
   built-up, bare land, vegetation).

**Methodology** 📈
1. Data Collection: Manually select training data on the map for each land cover class.
2. Model Training: Train the Random Forest model using the selected training data.
3. Classification: Apply the trained model to classify the entire study area.
4. Comparison: Generate classified maps for 2013 and 2023 and compare them to analyze changes.
5. Chart Preparation: Create charts to visually represent the changes in land cover.

**Results** 📉
The results include classified maps that show:
1. The increase or decrease in water levels.
2. Changes in built-up areas.
3. Variations in vegetation cover.
4. Changes in bare land areas.

**Charts** 📊
We have prepared charts to help visualize the changes in land cover over the 10-year period. These charts provide a clear, understandable way to see trends and patterns in the data.

**License** 📄
This project is licensed under the MIT License - see the LICENSE file for details.
