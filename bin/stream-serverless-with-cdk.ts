#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { StreamServerlessWithCdkStack } from '../lib/stream-serverless-with-cdk-stack';

const app = new cdk.App();
new StreamServerlessWithCdkStack(app, 'StreamServerlessWithCdkStack');
