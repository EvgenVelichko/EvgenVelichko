import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import Slider from './Slider';

const Certificates = () => {
  const { t } = useTranslation();

  const certificates = [
    { id: 1, image: '', title: t('certificates.cert1') },
    { id: 2, image: '/src/assets/Certificates/Certificates.webp', title: t('certificates.cert2') },
    { id: 3, image: '', title: t('certificates.cert3') },
  ];

  return (
    <section className="slider-section" id="certificates">
      <h2 className="section-heading" data-aos="slide-right" data-aos-duration="1000">
        {t('sections.certificates')}
      </h2>
      <Slider items={certificates} type="certificate" />
    </section>
  );
};

export default Certificates;