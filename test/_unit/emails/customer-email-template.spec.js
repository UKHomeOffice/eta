'use strict';

const assert = require('node:assert');
const fs = require('fs');
const path = require('path');
const mustache = require('mustache');

describe('Customer email template', () => {
  const templatePath = path.resolve(__dirname, '../../../apps/eta/emails/customer.html');
  const template = fs.readFileSync(templatePath, 'utf8');

  it('renders customer details and ETA warning when data row has a value', () => {
    const output = mustache.render(template, {
      name: 'Alex Example',
      'your-question': 'When will I get my decision?',
      data: [
        {
          table: [
            {
              value: 'If you need to travel soon'
            }
          ]
        }
      ]
    });

    assert.ok(output.includes('Dear Alex Example'));
    assert.ok(output.includes('When will I get my decision?'));
    assert.ok(output.includes('If you need to travel soon'));
    assert.ok(output.includes('You must apply for an ETA before you travel to the UK.'));
  });

  it('does not render ETA warning block when value is empty', () => {
    const output = mustache.render(template, {
      name: 'Alex Example',
      'your-question': 'When will I get my decision?',
      data: [
        {
          table: [
            {
              value: ''
            }
          ]
        }
      ]
    });

    assert.ok(!output.includes('You must apply for an ETA before you travel to the UK.'));
  });
});
