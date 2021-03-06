import Ember from 'ember';

const { Component, computed } = Ember;
const { alias } = computed;

export default Component.extend({
  resume: null,
  sections: alias('resume.sections')
});
